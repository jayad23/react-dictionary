import React, {useContext, useState} from 'react';
import {Button, CardMedia, TextField} from '@mui/material';
import { LoginContainer, Glass, Container, Form } from './Login.styles';
import { PasswordInput } from '@components/common/password/Password';
import {SearchContext} from '@context/Context';

const Login = () => {
  const [values, setValues ] = useState({ email: "", password: ""});
  const { state } = useContext(SearchContext);

  const handleChange = (value:string) => {
    setValues({...values, password: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(values)
  };

  const text = {
    en: "Email",
    es: "Correo",
    submit: {
      en: "Submit",
      es: "Enviar"
    }
  };

  return (
    <LoginContainer>
      <Glass>
        <Container>
          <CardMedia 
            component="img"
            height={70}
            width={70}
            sx={{ objectFit: "contain", marginBottom: "20px"}}
            image="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/6076870474b1ea11f0fbdbaffe86d3fc.png"
          />
          <Form id="login-form" component="form" onSubmit={handleSubmit}>
            <TextField 
              label={text[state.lang]} 
              name="email" 
              type="email"
              value={values.email}
              onChange={(e) => setValues({...values, email: e.target.value })} 
            />
            <PasswordInput handleChange={handleChange} value={values.password} />
          </Form>
          <div style={{ marginTop: "10px", textAlign: "end"}}>
            <Button form="login-form" variant='contained' type="submit">{text.submit[state.lang]}</Button>
          </div>
        </Container>
      </Glass>
    </LoginContainer>
  )
}

export default Login