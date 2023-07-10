import { styled } from "styled-components";

interface MainProps { }
export const Main = styled.main<MainProps>`
  height: 100%;
  padding: 10px;
  display: flex;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
`