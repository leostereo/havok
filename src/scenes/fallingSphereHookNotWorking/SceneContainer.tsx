import React from 'react'
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, Scene, TransformNode } from "@babylonjs/core";
import SceneComponent from './SceneComponent.tsx';
import { PhysicsAggregate } from "@babylonjs/core/Physics/v2/physicsAggregate";
import { PhysicsShapeType } from "@babylonjs/core/Physics/";



const onSceneReady = (scene:Scene) => {
    // This creates and positions a free camera (non-mesh)
    const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'box' shape.
    const groundMesh = MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);
    const sphereMesh = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);
        sphereMesh.position.y = 4;
    
        
        
      };
      
      const onRender = (scene:Scene) => {
        //const groundMesh = scene.getMeshByName('ground') as TransformNode;
        //new PhysicsAggregate(groundMesh, PhysicsShapeType.BOX, { mass: 0 }, scene);
        const sphereMesh = scene.getMeshByName('sphere') as TransformNode
        new PhysicsAggregate(sphereMesh, PhysicsShapeType.SPHERE, { mass: 1, restitution: 0.75 }, scene);

};

const SceneContainer = () => {
  return (
    <SceneComponent 
    antialias={undefined}
    engineOptions={undefined}
    adaptToDeviceRatio={undefined}
    sceneOptions={undefined}
    onRender={onRender}
    onSceneReady={onSceneReady} />
  )
}

export default SceneContainer