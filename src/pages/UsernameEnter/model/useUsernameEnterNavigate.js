import { useState, useEffect } from "react"

const useUsernameEnterNavigate = (currentForm, navigate) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (currentForm === 1) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 17) {
            return prev + 1
          } else {
            clearInterval(interval)
            setTimeout(() => {
              navigate("/get-account")
            }, 1000)
            return prev
          }
        })
      }, 300)
    }
  }, [currentForm, navigate])

  return { progress }
}

export default useUsernameEnterNavigate
