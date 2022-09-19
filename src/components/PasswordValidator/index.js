import {useState} from 'react'

import {
  MainContainer,
  Container,
  Input,
  MsgContent,
  NameText,
  MainHeading,
  Warning,
} from './styledComponents'

const PasswordValidator = () => {
  const [name, setName] = useState('')

  const onChangeName = event => setName(event.target.value)

  return (
    <MainContainer>
      <Container>
        <MainHeading>Password Validator</MainHeading>
        <NameText>check how strong and secure is your password</NameText>
        <Input
          type="password"
          placeholder="Enter Password"
          value={name}
          onChange={onChangeName}
        />
        <Warning>
          {name.length > 8
            ? null
            : 'Your password must be at least 8 characters'}
        </Warning>
      </Container>
    </MainContainer>
  )
}

export default PasswordValidator
