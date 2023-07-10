import { FormEvent, useState } from "react"
import { Button } from "../components/ui/button/styles"
import useHeroes from "../modules/core/hooks/use-heroes"
import { useNavigate, useParams } from "react-router-dom"
import InputText from "../components/ui/input-text/input-text"
import useWindowResize from "../modules/core/hooks/use-window-rezise"
import { SearchBar } from "../modules/home/components/search-bar/styles"
import HeroPortrait from "../modules/home/components/hero-portrait/hero-portrait"
import { Hero } from "../modules/core/types/hero"
import { Content } from "../components/ui/paper/styles"

export default function Home() {
  const navigate = useNavigate()
  const { heroName } = useParams()
  const [search, setSearch] = useState<string>(heroName ?? '')
  const { heroes } = useHeroes()
  const { targetRef, windowSize } = useWindowResize()
  const handleOnChange = (text: string) => {
    setSearch(text)
  }
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    navigate(`/${search}`)
  }
  const handleToHeroPage = ({ id }: Hero) => {
    navigate(`/hero/${id}`)
  }
  return (
    <>
      <SearchBar>
        <form onSubmit={handleOnSubmit}>
          <InputText id="search-text" title="Pesquisa" onChange={handleOnChange} value={search} />
          <Button type="submit">PESQUISAR</Button>
        </form>
      </SearchBar>
      <Content
        ref={targetRef}
        style={{
          height: windowSize.height + 10
        }}>
        {heroes?.map((h, i) => <HeroPortrait key={`${h?.id}-${i}-hero-list-item`} hero={h} onClick={() => handleToHeroPage(h)}/>)}
      </Content>
    </>
  )
}