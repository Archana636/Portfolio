import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particles';


function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
              <Particle />
            </div>
            <div className="typography">
       <h1>Hi I'm <span>Lorem Ipsum</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing
            industry. 
            when an unknown took a galley of  specimen book.
        </p>
        <div className="icons">
            <a href="https://www.facebook.com/" className=" icon i-facebook">
                <FacebookIcon/>
            </a>
            <a href="https://github.com/Archana636/task0001" className="icon i-github">
                <GithubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/archana-k-68a532209" className="icon i-linkedin">
                <LinkedinIcon/>
            </a>
      </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
 width: 100%;
 height: 100vh;
position: relative;

 .p-particle-con{
     position: absolute;
     top: 0;
     left: 0;

 }

 .typography{
     position: absolute;
     top:50%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-align: center;
     width: 80%;

     .icons{
         display: flex;
         justify-content: center;
         margin-top:1rem ;
         .icon{
border: 2px solid var(--border-color);
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
transition:  all .4s ease-in-out;
cursor: pointer;
&:hover{
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}
&:not(:last-child){
    margin-right:1rem ;
    
}
svg{
   margin: .2rem;

   }
}
.i-linkedin{
    &:hover{
        border: 1px solid #0077b5 ;
    color: #0077b5 ;
} 
}
.i-github{
    &:hover{
        border: 2px solid #fafafa ;
    color: #fafafa ;
} 
}
.i-facebook{
    &:hover{
        border: 2px solid #4267B2 ;
    color: #4267B2 ;
} 
}
}
}
`;

export default HomePage;
