import {
  useEffect,
  useRef,
} from 'react'

type TestFunction<T> = (newValue: T | undefined, oldValue: T | undefined) => boolean

const usePrevious = <T>(value: T, shouldUpdate?: TestFunction<T>): T | undefined => {
  const previousValueRef = useRef<T>()

  useEffect(() => {
    if (shouldUpdate) {
      if (shouldUpdate(value, previousValueRef.current)) {
        previousValueRef.current = value
      }
    }
    else {
      previousValueRef.current = value
    }
  }, [
    value,
    shouldUpdate,
  ])

  return previousValueRef.current
}

export default usePrevious
