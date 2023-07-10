import styled from 'styled-components'
import { sizes } from '../../../config/font-sizes'
import { devices } from '../../../config/devices'

export const Paper = styled.div`
  border-radius: 2px;
  background-color: #FFFFFF;
  padding: ${sizes.paperPadding};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Content = styled(Paper)`
  padding: 0;
  display: flex;
  padding: 8px 0;
  flex-wrap: wrap;
  margin-top: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  align-content: start;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #888;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  @media ${devices.tabletMax} {
    display: block;
  }
`
