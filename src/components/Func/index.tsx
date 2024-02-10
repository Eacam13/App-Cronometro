import React, { useState, useEffect } from 'react'

export function cronometro() {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const iniciarContagem = () => {
    if (timer != null) {
      clearInterval(timer)
      setTimer(null)
    } else {
      const newTimer = setInterval(() => {
        setCount((prevCount) => prevCount + 0.01)
      }, 10)
      setTimer(newTimer)
    }
  }

  useEffect(() => {
    return () => {
      if (timer !== null) {
        clearInterval(timer)
      }
    }
  }, [timer])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    const centiseconds = Math.floor((time * 100) % 100)

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`
  }

  return { count, setCount, timer, setTimer, iniciarContagem, formatTime }
}