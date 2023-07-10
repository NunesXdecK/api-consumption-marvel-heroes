import { useEffect, useState } from "react"
import { Hero, HeroColors } from "../types/hero"
import { useParams } from "react-router-dom"
import { useBGContext } from "../contexts/bg-context"
import { colors } from "../../../config/colors"
import { fetchHeroAPI } from "../../../api/api"

export default function useHero() {
  const { sortNewBG } = useBGContext()
  const [hero, setHero] = useState<Hero>()
  const [heroColors, setHeroColors] = useState<HeroColors>({
    primary: colors.inputBorder, secondary: colors.white
  })
  const { id } = useParams()

  const filterPredominantColors = (imageUrl: string) => {
    const image = new Image()
    image.crossOrigin = 'Anonymous'
    image.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = image.width
      canvas.height = image.height
      if (!ctx) return
      ctx.drawImage(image, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data
      const colorCounts: { [color: string]: number } = {}
      for (let i = 0; i < imageData.length; i += 4) {
        const red = imageData[i]
        const green = imageData[i + 1]
        const blue = imageData[i + 2]
        const alpha = imageData[i + 3]
        if (alpha === 0) continue
        const color = `rgb(${red},${green},${blue})`
        if (colorCounts[color]) {
          colorCounts[color]++
        } else {
          colorCounts[color] = 1
        }
      }
      const sortedColors = Object.keys(colorCounts).sort(
        (a, b) => colorCounts[b] - colorCounts[a]
      )
      const primary = sortedColors?.length / 4
      const secondary = sortedColors?.length / 2
      const primaryC = sortedColors.slice(primary, primary + 1)
      const secondaryC = sortedColors.slice(secondary, secondary + 1)
      sortNewBG(primaryC[0], secondaryC[0])
      setHeroColors({
        primary: primaryC[0],
        secondary: secondaryC[0]
      })
    }
    image.src = imageUrl
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return
      try {
        /*
        const response = await fetch('/data.json')
        const jsonData: any[] = await response.json()
        setHero(hero)
        */
       const res = await fetchHeroAPI(id)
       const hero: Hero = res?.data?.results[0] ?? {}
       setHero(hero)
       const path = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
       await filterPredominantColors(path)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      }
    }
    fetchData()
  }, [id])

  return {
    hero, heroColors
  }
}