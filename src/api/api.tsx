var md5 = require('md5')
export const fetchHeroesAPI = async (heroName: string) => {
  if (!process.env.REACT_APP_API_PUBLIC_KEY || !process.env.REACT_APP_API_PRIVATE_KEY) return
  const timestamp = new Date().getTime()
  const hs = timestamp + process.env.REACT_APP_API_PRIVATE_KEY + process.env.REACT_APP_API_PUBLIC_KEY
  const hash = md5(hs)
  const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${heroName ?? ''}&ts=${timestamp}&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${hash}`
  return await fetch(url).then(res => res.json())
}

export const fetchHeroAPI = async (id: string) => {
  if (!process.env.REACT_APP_API_PUBLIC_KEY || !process.env.REACT_APP_API_PRIVATE_KEY) return
  const timestamp = new Date().getTime()
  const hs = timestamp + process.env.REACT_APP_API_PRIVATE_KEY + process.env.REACT_APP_API_PUBLIC_KEY
  const hash = md5(hs)
  const url = `https://gateway.marvel.com/v1/public/characters/${id ?? ''}?ts=${timestamp}&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&hash=${hash}`
  return await fetch(url).then(res => res.json())
}