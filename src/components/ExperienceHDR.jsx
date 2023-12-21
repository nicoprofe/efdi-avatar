import { Environment, OrbitControls, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import { Avatar } from './Avatar'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from './RGBELoader'

const ExperienceHDR = () => {
    const map = useTexture("textures/AirportEqui.jpg")
    const HDR = useLoader(RGBELoader, "textures/spree_bank_4k.hdr")
  return (
    <>
    <ambientLight intensity={0.5} />
    <Environment preset='sunset' />
      <OrbitControls />
      <Avatar scale={2} position-y={-3} />
      <mesh>
        <sphereGeometry args={[ 5, 64, 64]} />
        <meshStandardMaterial map={HDR} side={THREE.BackSide} />
      </mesh>
    </>
  )
}

export default ExperienceHDR
