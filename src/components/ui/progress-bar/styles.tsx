import styled from "styled-components"

export const LoadingHolder = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    z-index: 40;
    position: fixed;
    background-color: transparent;
`

export const LoadingBar = styled.div`
    height: 1px;
    transition-duration: 100ms;
    background-color: #000000;
    box-shadow: 0 2px 5px #000000;
`