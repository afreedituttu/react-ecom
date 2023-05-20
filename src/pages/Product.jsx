import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import imu from '../static/imu.jpg'
import { Remove, Add } from '@material-ui/icons'
import {mobile} from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({flexDirection:'column'})};
`
const ImageContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;
    ${mobile({height:'40%'})};
`
const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding:'10px'})};
`
const Title = styled.h1`
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterCotainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    ${mobile({width:'100%'})};
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${(props)=>{return props.color}};
    margin:0 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:'100%'})};
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:600;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background:white;
    cursor:pointer;
    font-weight:500;
    transition:all 0.4s ease;
    font-size:1em;

    &:hover{
        background:teal;
        color:white;
    }
`

const Product = () => {
    return (
    <Container>
      <Announcment />
      <Navbar />
      <Wrapper>
        <ImageContainer>
            <Image src={imu} />
        </ImageContainer>
        <InfoContainer>
            <Title>POCO X2</Title>
            <Desc>lorem ifjaoie fei jiejf ioejfoa eisojsijioej fioejfioejfiofjiefjioesjfoiejoifjeoifjeifjfajfeio jeoi f oie ifef e e i e i k </Desc>
            <Price>$ 20</Price>
            <FilterCotainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="green" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterCotainer>
            <AddContainer>
                <AmountContainer>
                    <Remove />
                    <Amount>1</Amount>
                    <Add />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
