
import React from 'react';
import { EngineOptions } from '@babylonjs/core/Engines/thinEngine.js';
import { Scene, SceneOptions } from '@babylonjs/core/scene.js';

export type BabylonjsProps = {
    antialias?: boolean
    engineOptions?: EngineOptions
    adaptToDeviceRatio?: boolean
    renderChildrenWhenReady?: boolean
    sceneOptions?: SceneOptions
    onSceneReady: (scene: Scene) => void
    /**
     * Automatically trigger engine resize when the canvas resizes (default: true)
     */
    observeCanvasResize?: boolean
    onRender?: (scene: Scene) => void
    children?: React.ReactNode
  };