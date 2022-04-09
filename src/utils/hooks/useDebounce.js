import { useCallback } from 'react'

const debounce = (func, delay = 300) => {
    let timerId
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func(...args)
        }, delay)
    }
}
const useDebounce = (func, delay) => useCallback(debounce(func, delay), [])

export default useDebounce
