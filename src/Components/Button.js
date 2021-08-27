import React from 'react'
import styled from 'styled-components';


function Button({filter, button}) {
    return (
        <ButtonsStyled>
           {
              button.map((but, i) => {
              return <ButtonStyled key={i} onClick={() => filter(but)} >
                  {but}
              </ButtonStyled >
              }) 
           } 
        </ButtonsStyled>
    )
}
const ButtonStyled = styled.button`
   outline: none;
   border: none;
   background-color: var(--background-light-color-2);
   padding: .4rem 2rem;
   font-size: inherit;
   color: white;
   cursor: pointer;
   transition: all .4s ease-in-out;
   &:active ,&:focus{
       background-color: var(--primary-color);
   }
   &:hover{
       background-color: var(--primary-color);
   }
   &:not(:last-child){
       margin-right: .6rem;
   }
`;
const ButtonsStyled = styled.div`
margin-bottom: 2rem;
 display: flex;
justify-content: space-around;
 align-items: center;
 flex-wrap: wrap;
 width: 70%;
margin : 2.4rem, auto;


`;
export default Button;
