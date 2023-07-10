import { HeroList } from "../../../../core/types/hero"

interface Props {
  id: string
  label: string
  list: HeroList
}

export default function HeroContentList({ id, label, list }: Props) {
  if (!list || list?.items?.length === 0) return <></>
  return (
    <>
      <label htmlFor={`hero-${id}`}>{label} {list?.available}</label>
      <ul id={`hero-${id}`}>
        {list?.items?.map((s, i) => <li key={`hero-${i}-${id}`}>{s?.type ? s?.type + ' - ' : ''}{s?.name}</li>)}
      </ul>
    </>
  )
}