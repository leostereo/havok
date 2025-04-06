import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import SceneContainer from './scenes/fallingSphere/SceneContainer.tsx'
import SceneContainer from './scenes/fallingSphereClass/SceneContainer.tsx'

import './css/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SceneContainer />
    </StrictMode>,
)
