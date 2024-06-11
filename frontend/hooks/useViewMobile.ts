import React from "react"

export const useViewMobile = () => {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWidth(width)
  }
  const isMobile = width < 769

  return isMobile
}

export const useViewMobileDimension = (): number => {
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])
  const updateDimensions = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  return width
}
