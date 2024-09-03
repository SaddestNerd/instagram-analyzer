import { useState, useEffect, useRef } from "react"

export const useGetPaidAccount = () => {
  const [activeModalWindow, setActiveModalWindow] = useState(true)
  const [showHeaderTimer, setShowHeaderTimer] = useState(false)
  const [time, setTime] = useState(15 * 60)
  const scrollToOffer = useRef(null)
  const timerBlockRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          return 15 * 60
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (timerBlockRef.current) {
        const rect = timerBlockRef.current.getBoundingClientRect()
        const isVisible = rect.bottom >= 0
        setShowHeaderTimer(!isVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const onScrollToOffer = () => {
    if (scrollToOffer.current) {
      scrollToOffer.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return {
    activeModalWindow,
    setActiveModalWindow,
    showHeaderTimer,
    time,
    scrollToOffer,
    timerBlockRef,
    onScrollToOffer,
  }
}
