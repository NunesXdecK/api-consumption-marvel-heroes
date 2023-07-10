import { createContext, useContext, useState } from 'react'
import useBGSVG from '../hooks/use-bg-svg'

interface ContextProps {
  bg: any
  sortNewBG: (arg0: string, arg1: string) => void
}

interface ProviderProps {
  children: any
}

const BGContext = createContext<ContextProps | null>(null)

const BGContextProvedor = ({ children }: ProviderProps) => {
  const [bgi, setBgi] = useState<number>(1)
  const {
    bg,
    active,
    bgControl,
    handleMoveBG
  } = useBGSVG()

  const bgs = [
    {
      ...bgControl,
      tStroke: 5,
      tOne: 0,
      tTwo: 0,
      tThree: 0,
    },
    {
      ...bgControl,
      tStroke: 10,
      tOne: -15,
      tTwo: 15,
      tThree: -15,
    },
    {
      ...bgControl,
      tStroke: 20,
      tOne: -35,
      tTwo: 35,
      tThree: -35,
    },
    {
      ...bgControl,
      tStroke: 25,
      tOne: -50,
      tTwo: 50,
      tThree: -50,
    }
  ]

  const random = (exclude: number) => {
    let random = Math.floor(Math.random() * 4) + 1
    while (random === exclude) {
      random = Math.floor(Math.random() * 4) + 1
    }
    return random
  }

  const sortNewBG = (bgColor: string, strokeColor: string) => {
    if (active) return 
    const randombg = random(bgi)
    const bgr = bgs[randombg]
    setBgi(randombg)
    handleMoveBG({
      ...bgr,
      bgColor,
      strokeColor
    })
  }

  return (
    <BGContext.Provider value={{
      bg,
      sortNewBG
    }}>
      {children}
    </BGContext.Provider>
  )
}

export default BGContextProvedor


export const useBGContext = (): ContextProps => {
  const context = useContext(BGContext)
  if (!context) throw new Error('useGlobalContext must be used within a provider GlobalProvider')

  return { ...context }
}
