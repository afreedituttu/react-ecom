import React from 'react'
import styled from 'styled-components'
import imu from '../static/imu.jpg'
import {mobile} from '../responsive';
import Navbar from '../components/Navbar';
const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(255,255,2,0.5), url(${imu});
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    margin:4px;
    font-weight:300;
    font-size:24px;
    ${mobile({width:'80%'})};
`
const Form = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:100%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Aggrement = styled.div``
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-top:10px;
`
const Title = styled.h1``
const Login = () => {
  return (<>
    <Navbar />
    <Container>
      <Wrapper>
        <Title>LOGI INTO ACCOUNT</Title>
        <Form>
            <Input palcholder="username" />
            <Input palcholder="password" />
            <Button>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
    </>
  )
}

export default Login
