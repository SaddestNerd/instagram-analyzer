import { useState, useEffect, useRef } from "react"

const useEnterAccountNavigate = (loadingForm) => {

  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null) 

  useEffect(() => {
    if (loadingForm) {
      startInterval()
    }

    return () => clearInterval(intervalRef.current)
  }, [loadingForm])

  const startInterval = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1
        } else {
          clearInterval(intervalRef.current)
          return prev
        }
      })
    }, 50)
  }

  const resetProgress = () => {
    setProgress(0)
  }

  const updateInterval = () => {
    startInterval() 
  }

  return { progress, setProgress, resetProgress, updateInterval }
}

export default useEnterAccountNavigate