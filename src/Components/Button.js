import React from 'react'
import styled from 'styled-components';
import Button from "@material-ui/core/Button";


function Buttons(props) {
const {filter, button}  = props;
    return (
       
        <>
           {button.map((but, i) => (
               <Button1>
                   <Button2>
               <Button color="primary" key={i} onClick={() => filter(but)} >
                  {but}
              </Button >
              </Button2>
              </Button1>
              ))}
              
        </>
    );
}
const Button1 = styled.button`
   
   outline: none;
   border: none;
   background-color: var(--background-light-color-2);
   padding: .4rem 2rem;
   font-size: inherit;
   color: white;
   cursor: pointer;
   transition: all .4s ease-in-out;
   margin-bottom: .6rem;
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
const Button2 = styled.div` 
margin-bottom: 0.5rem;
 display: flex;
justify-content: space-around;
 align-items: center;
 flex-wrap: wrap;
 width: 70%;
margin : 2.4rem, auto;


`;
export default Buttons;
