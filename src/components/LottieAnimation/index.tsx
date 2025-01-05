'use client'
import lottie, { AnimationItem } from 'lottie-web'
import * as React from 'react'

const LottieAnimation = ({
  animationData,
  scroll
}: {
  animationData: any
  scroll: boolean
}) => {
  const anime = React.useRef<HTMLDivElement>(null)
  const anim = React.useRef<AnimationItem>()

  React.useEffect(() => {
    if (anime.current) {
      anim.current = lottie.loadAnimation({
        container: anime.current,
        renderer: 'svg',
        loop: scroll,
        autoplay: scroll,
        animationData
      })
    }

    return () => {
      if (anim.current) {
        anim.current.destroy()
      }
    }
  }, [animationData, scroll])

  React.useEffect(() => {
    if (anim.current) {
      anim.current.playSegments([0, 70], true)
    }
  }, [scroll])

  return <div ref={anime} />
}

export default LottieAnimation
