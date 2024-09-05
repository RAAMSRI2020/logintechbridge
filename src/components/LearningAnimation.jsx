import React from 'react'
import { Lottie } from 'react-lottie'
import { learning } from '../assets'

const LearningAnimation = () => {
  return (
    <div>
        <Lottie
        options={{
        loop: true,
        autoplay: true,
        animationData: learning,
        width: '100%',
        height: '100%',
        }}
        style={{ background: 'transparent', border: 'none' }}
        />
    </div>
  )
}

export default LearningAnimation;