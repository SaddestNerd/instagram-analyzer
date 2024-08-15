import { useState, useEffect } from "react"

const useCountdownTimer = (hours) => {
  const [time, setTime] = useState(hours * 60 * 60)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          return hours * 60 * 60
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [hours])

  const hoursRemaining = String(Math.floor(time / 3600)).padStart(2, "0")
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0")
  const seconds = String(time % 60).padStart(2, "0")

  return { hoursRemaining, minutes, seconds }
}

export default useCountdownTimer
