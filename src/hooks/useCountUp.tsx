import { useEffect, useState } from 'react'

export default function useCountUp(end: number, duration: number) {
  const [count, setCount] = useState(0)
  const fps = 60
  const totalFrames = Math.round(fps * (duration / 1000))

  function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
  }

  useEffect(() => {
    let frame = 0

    const counter = setInterval(() => {
      frame += 1

      const currentProgress = easeOutExpo(frame / totalFrames)
      const currentCount = Math.round(end * currentProgress)
      setCount(currentCount)

      if (end === currentCount) {
        clearInterval(counter)
      }
    }, 1000 / fps)
  }, [end, duration, totalFrames])

  return count
}
