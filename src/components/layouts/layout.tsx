import { Container, Main } from "./styles"
import { useBGContext } from "../../modules/core/contexts/bg-context"

interface Props {
  children: any
}

export default function Layout({ children }: Props) {
  const { bg } = useBGContext()
  return (
    <Main style={{
      backgroundImage: bg
    }}>
      <Container>
        {children}
      </Container>
    </Main>
  )
}