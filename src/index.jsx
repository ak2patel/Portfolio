import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        camera={ {
            fov: 35,
            near: 0.2,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } }
    >
        <Experience />
    </Canvas>
)