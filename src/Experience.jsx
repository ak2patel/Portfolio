import { OrbitControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import Lights from './Lights.jsx'
import Level from './Level.js'

export default function Experience()
{
    return <>
        <Perf position ="top-left"/>
        <OrbitControls makeDefault />
        <Physics >
            <Lights />
            <Level />
        </Physics>

    </>
}