import { Container, ErrorMessage, Icon, InputContainer, Message } from "./styles";

export interface Props {
  id: string
  icon?: any
  title: string
  type?: string
  value?: string
  validation?: boolean
  placeholder?: string
  errorMessage?: string
  bottomMessage?: string
  onChange: (arg0: string) => void
}

export default function InputText({
  id,
  icon,
  type,
  title,
  value,
  validation,
  placeholder,
  errorMessage,
  bottomMessage,
  onChange
}: Props) {
  return (
    <Container className={`${validation ? 'invalid' : ''}`}>
      <label htmlFor={id}>{title}</label>
      <InputContainer className="input-container">
        <input
          id={id}
          value={value}
          placeholder={placeholder}
          type={type ? type : 'text'}
          onChange={(event) => onChange(event?.target?.value)} />
        {icon && <Icon className="icon-container">{icon}</Icon>}
      </InputContainer>
      {validation && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {bottomMessage && <Message>{bottomMessage}</Message>}
    </Container>
  )
}