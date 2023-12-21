import { Environment, OrbitControls, useTexture } from '@react-three/drei'
import React, { useState } from 'react'
import * as THREE from 'three'
import { Avatar } from './Avatar'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from './RGBELoader'

const ExperienceHDR = () => {
    const [ background, setBackground ] = useState("park")
    const textures = {
    airport: useTexture("textures/AirportEqui.jpg"),
    park: useLoader(RGBELoader, "textures/spree_bank_4k.hdr"),
    stPeters: useLoader(RGBELoader, "textures/st_peters_square_night_4k.hdr") ,
    street: useLoader(RGBELoader, "textures/wide_street_02_4k.hdr"),
    sky: useLoader(RGBELoader, "textures/the_sky_is_on_fire_4k.hdr")
    }


    const map = textures[background]


  return (
    <>
    <ambientLight intensity={0.5} />
    <Environment preset='sunset' />
      <OrbitControls />
      <Avatar setBackground={setBackground} scale={2} positionY={-3} />
      <mesh>
        <sphereGeometry args={[ 5, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  )
}

export default ExperienceHDR
