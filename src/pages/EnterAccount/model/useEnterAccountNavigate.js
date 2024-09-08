import { useState, useEffect, useRef } from "react"

const useEnterAccountNavigate = (loadingForm) => {

  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)  // Ссылка на интервал

  useEffect(() => {
    if (loadingForm) {
      startInterval()
    }

    return () => clearInterval(intervalRef.current) // Очищаем интервал при размонтировании или изменении
  }, [loadingForm])

  // Метод для старта/обновления интервала
  const startInterval = () => {
    clearInterval(intervalRef.current)  // Очищаем старый интервал, если есть
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1
        } else {
          clearInterval(intervalRef.current)
          return prev
        }
      })
    }, 600)
  }

  // Метод для сброса прогресса до 0
  const resetProgress = () => {
    setProgress(0)
  }

  // Метод для ручного обновления интервала
  const updateInterval = () => {
    startInterval()  // Запуск нового интервала
  }

  return { progress, setProgress, resetProgress, updateInterval }
}

export default useEnterAccountNavigate