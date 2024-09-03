import { useState, useCallback } from "react"

const useHttpHook = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (func) => {
    try {
      setLoading(true)
      const result = await func()
      return result
    } catch (e) {
      setError(e.message)
      throw e
    } finally {
      setLoading(false)
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return { loading, error, request, clearError }
}

export default useHttpHook
