import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

export default function Avatar(props) {

  const { nodes, materials } = useGLTF('/models/avatar.glb')
  const { animations  } = useFBX('/animations/animations.fbx')
  const group = useRef()
  const { actions } = useAnimations(animations , group)

  const { state } = useControls({
    state: { value: 'idle', options: ['idle', 'bored'] }
  })


  useEffect(() => {
    actions[state].reset().fadeIn(0.5).play();
    return () => actions[state].fadeOut(0.5);
  }, [state]);



  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.AvatarBody.geometry} material={materials['AvatarBody.001']} skeleton={nodes.AvatarBody.skeleton} />
      <skinnedMesh geometry={nodes.AvatarLeftCornea.geometry} material={materials['AvatarLeftCornea.001']} skeleton={nodes.AvatarLeftCornea.skeleton} />
      <skinnedMesh geometry={nodes.AvatarLeftEyeball.geometry} material={materials['AvatarLeftEyeball.001']} skeleton={nodes.AvatarLeftEyeball.skeleton} />
      <skinnedMesh geometry={nodes.AvatarRightCornea.geometry} material={materials['AvatarRightCornea.001']} skeleton={nodes.AvatarRightCornea.skeleton} />
      <skinnedMesh geometry={nodes.AvatarRightEyeball.geometry} material={materials['AvatarRightEyeball.001']} skeleton={nodes.AvatarRightEyeball.skeleton} />
      <skinnedMesh geometry={nodes.AvatarTeethUpper.geometry} material={materials['AvatarTeethUpper.001']} skeleton={nodes.AvatarTeethUpper.skeleton} />
      <skinnedMesh geometry={nodes.outfit.geometry} material={materials['outfit.001']} skeleton={nodes.outfit.skeleton} />
      <skinnedMesh geometry={nodes.AvatarEyelashes.geometry} material={materials['AvatarEyelashes.001']} skeleton={nodes.AvatarEyelashes.skeleton} />
      <skinnedMesh geometry={nodes.AvatarHead.geometry} material={materials['AvatarHead.001']} skeleton={nodes.AvatarHead.skeleton} />
      <skinnedMesh geometry={nodes.AvatarTeethLower.geometry} material={materials['AvatarTeethLower.001']} skeleton={nodes.AvatarTeethLower.skeleton} />
    </group>
  )
}

useGLTF.preload('/models/avatar.glb')
