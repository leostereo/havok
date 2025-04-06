import { useEffect, useRef } from "react";
import { Engine, Scene, Vector3 } from "@babylonjs/core";
import { BabylonjsProps } from "./SceneComponent.props";
import HavokPhysics from "@babylonjs/havok";
import { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin";



const SceneComponent = ({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest }: BabylonjsProps) => {

    const reactCanvas = useRef(null);

    async function setPhysics(scene:Scene) {
        const gravity = new Vector3(0, -9.81, 0);
        const hk = await HavokPhysics();
        const plugin = new HavokPlugin(true, hk);
        scene.enablePhysics(gravity, plugin);
        
    }

    // set up basic engine and scene
    useEffect(() => {
        
        // const { current: canvas } = reactCanvas;
        const canvas = reactCanvas.current;

        if (!canvas) return;

        const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);

        const scene = new Scene(engine, sceneOptions);
        if (scene.isReady()) {
            onSceneReady(scene);
        } else {
            scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
        }
        
        setPhysics(scene);

        engine.runRenderLoop(() => {
            if (typeof onRender === "function") onRender(scene);
            scene.render();
        });

        const resize = () => {
            scene.getEngine().resize();
        };

        if (window) {
            window.addEventListener("resize", resize);
        }

        return () => {
            scene.getEngine().dispose();

            if (window) {
                window.removeEventListener("resize", resize);
            }
        };
    }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

    return <canvas id="bbjsCanvas" ref={reactCanvas} {...rest} />;
};

export default SceneComponent;