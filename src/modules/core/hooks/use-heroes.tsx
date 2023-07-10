import { useEffect, useState } from "react"
import { Hero } from "../types/hero"
import { useParams } from "react-router-dom"
import { fetchHeroesAPI } from "../../../api/api"

export default function useHeroes() {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const { heroName } = useParams()

  const fetchData = async () => {
    if (!heroName) return
    try {
      /*
      const response = await fetch('/data.json')
      let jsonData: any[] = await response.json()
      if (heroName) {
        jsonData = jsonData.filter(h => h?.name?.includes(heroName))
      }
      const response = await fetch(url)
      */
      const res = await fetchHeroesAPI(heroName)
      setHeroes(res?.data?.results ?? [])
    } catch (error) {
      console.error('Erro ao buscar os dados:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [heroName])

  return {
    heroes
  }
}