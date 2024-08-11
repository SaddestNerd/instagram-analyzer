import { useState, useEffect } from "react"

const useEnterAccountNavigate = (currentForm, navigate) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (currentForm === 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1
          } else {
            clearInterval(interval)
            setTimeout(() => {
              // navigate("/main")
            }, 1000)
            return prev
          }
        })
      }, 150)
    }
  }, [currentForm, navigate])

  return { progress }
}

export default useEnterAccountNavigate
