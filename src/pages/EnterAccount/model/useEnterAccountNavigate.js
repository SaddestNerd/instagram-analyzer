import { useState, useEffect } from "react"

const useEnterAccountNavigate = ({loading}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1
          } else {
            clearInterval(interval)
            return prev
          }
        })
      }, 600)
  
  }, [])

  return { progress }
}

export default useEnterAccountNavigate
