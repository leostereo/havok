import React from 'react'
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, Scene, AppendSceneAsync, SceneLoader, ImportMeshAsync, } from "@babylonjs/core";
import BasicHook from '../../sceneHooks/sceneHooks/basicHook.tsx';
import "@babylonjs/loaders";


let box;

const loadScene = async (scene) => {
  const meshes = await ImportMeshAsync('./Prototype_Level.glb', scene)
  meshes.meshes.map((mesh)=>{mesh.checkCollisions = true})
}

const createCamera = (scene:Scene)=>{

  const camera = new FreeCamera("camera", new Vector3(10, 5, 0), scene);
  camera.attachControl();

  camera.applyGravity = true;
  camera.checkCollisions = true;

  camera.ellipsoid = new Vector3(1, 1, 1);

  camera.minZ = 0.45;
  camera.speed = 0.75;
  camera.angularSensibility = 4000;

  camera.keysUp.push(87);
  camera.keysLeft.push(65);
  camera.keysDown.push(83);
  camera.keysRight.push(68);
}

const onSceneReady = (scene: Scene) => {

  createCamera(scene);

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
 

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  loadScene(scene);
};

const onRender = (scene: Scene) => {
  if (box !== undefined) {
    const deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

const SceneContainer = () => {
  return (
    <BasicHook
      antialias={undefined}
      engineOptions={undefined}
      adaptToDeviceRatio={undefined}
      sceneOptions={undefined}
      onRender={onRender}
      onSceneReady={onSceneReady} />
  )
}

export default SceneContainer