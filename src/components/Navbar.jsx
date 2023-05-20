import React from "react";
import styled from 'styled-components'
import {Search} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {ShoppingCartOutlined} from '@material-ui/icons'
import {mobile} from '../responsive';
import {Link} from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({height:'auto'})}    
`
const Wrapper = styled.div`
    padding: 5px 10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-shadow:0px 10px 30px rgba(202, 202, 202, 0.682);
    margin-bottom:30px;
    ${mobile({padding:'10px 0px'})} 
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({flex:2,justifyContent:'center'})} 
`
const InputText = styled.span`
    ${mobile({display:'none'})} 
`
const Language = styled.span`
    font-size:14px;
    cursor:pointer;
    ${mobile({display:'none'})} 
`
const SearchContaincer = styled.div`
    border:0.25px solid black;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:25px;
`
const Input = styled.input`
    border:none;
    outline:none;
    ${mobile({width:'50px'})} 
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:'24px'})} 
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({fontSize:'15px'})} 
`
function Navbar(){
    return(<>
        <Container>
            <Wrapper>
                <Left>
                    <Link to='/product'><Language>EN</Language></Link>
                    <SearchContaincer>
                        <InputText>input</InputText>
                        <Link to='/productlist'><Input />productlist</Link>
                        <Search style={{color:'gray',fontSize:16}} />
                    </SearchContaincer>
                </Left>
                <Center>
                    <Link to='/'><Logo>ECOM</Logo></Link>
                </Center>
                <Right>
                    <Link to='/register'><MenuItem>REGISTER</MenuItem></Link>
                    <Link to='/login'><MenuItem>SIGN IN</MenuItem></Link>
                    <MenuItem>
                        <Badge overlap="rectangular" badgeContent={3} color="primary">
                            <Link to='/cart'><ShoppingCartOutlined /></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </>)
}

export default Navbar;