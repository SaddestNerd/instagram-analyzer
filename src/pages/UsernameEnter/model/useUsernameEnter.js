import { useState, useEffect } from "react"

const useUsernameEnter = (currentForm) => {
  const [progress, setProgress] = useState(0)
  const [navigate, setNavigate] = useState(false)

  useEffect(() => {
    if (currentForm === 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 17) {
            return prev + 1
          } else {
            clearInterval(interval)
            setTimeout(() => {
              setNavigate(true)
            }, 1000)
            return prev
          }
        })
      }, 300)
    }
  }, [currentForm])

  return { progress, navigate }
}

export default useUsernameEnter
