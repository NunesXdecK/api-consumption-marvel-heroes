import styled from "styled-components"
import { colors } from "../../../config/colors"

export const Container = styled.fieldset`
  padding: 0;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  label {
    font-size: 16px;
    color: ${colors.subtitle};
    transition-duration: 300ms;
  }

  &.active, &:hover, &:active {
    label {
      color: ${colors.title};
    }

    div.input-container {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border: 1px solid ${colors.inputActiveBorder};
    }
  }

  &.invalid {
    label {
      color: ${colors.error};
    }

    div.input-container {
      color: ${colors.error};
      border: 1px solid ${colors.error};
      input, input::placeholder {
        color: ${colors.error};
      }
    }

    &.active, &:hover, &:active {
      label {
        color: ${colors.error};
      }

      div.input-container {
        border: 1px solid ${colors.error};
      }
    }
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  outline: none;
  border-radius: 5px;
  align-items: center;
  transition-duration: 300ms;
  background-color: transparent;
  border: 1px solid ${colors.inputBorder};
  input {
    width: 100%;
    border: none;
    height: 40px;
    outline: none;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 5px;
    color: ${colors.black};
    background-color: transparent;
    &::placeholder {
      font-size: 14px;
      font-weight: normal;
      color: ${colors.inputPlaceholderGray};
    }
  }
`

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  fill: ${colors.inputIconGray};
`

export const Message = styled.p`
  margin-top: 8px;
  font-size: 10px;
  color: ${colors.inputPlaceholderGray};
`

export const ErrorMessage = styled(Message)`
  color: ${colors.error};
`