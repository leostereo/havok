import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RotatingBoxScene from './scenes/rotatingBoxHook/SceneContainer.tsx'
import FallingBallScene from './scenes/fallingSphereClass/SceneContainer.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import './css/index.css'
import Layout from './layout/layout.tsx'
import Home from './pages/Home.tsx'



createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StrictMode>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Layout />} />
                    <Route index element={<Home />} />
                    <Route path="/hook1-rotatingbox" element={<RotatingBoxScene />} />
                    <Route path="/phy1-falling-ball" element={<FallingBallScene />} />
                </Route>
            </Routes>
        </StrictMode>,
    </BrowserRouter>
)
