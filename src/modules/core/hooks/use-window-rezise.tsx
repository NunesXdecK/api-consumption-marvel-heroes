import { useEffect, useState, useRef } from "react"

interface WindowSize {
  width: number
  height: number
}

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 })
  const targetRef = useRef(null)
  const handleResize = () => {
    if (!targetRef?.current) return
    const target: HTMLElement = targetRef?.current
    const targetOffsetTop = target?.offsetTop ?? 0
    const computedStyle = window.getComputedStyle(target)
    const marginTop = parseFloat(computedStyle.marginTop) ?? 0
    const marginBottom = parseFloat(computedStyle.marginBottom) ?? 0
    const paddingTop = parseFloat(computedStyle.paddingTop) ?? 0
    const paddingBottom = parseFloat(computedStyle.paddingBottom) ?? 0
    const margin = marginTop + marginBottom
    const padding = paddingTop + paddingBottom
    setWindowSize({
      width: window.innerWidth,
      height: (window.innerHeight - targetOffsetTop - margin - padding)
    })
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [targetRef])

  return {
    windowSize,
    targetRef
  }
}