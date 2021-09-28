import React from 'react'
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
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
       <h1>Hi, <span>I'am Archana</span></h1>
        <p>Seeking to join an organization, this will utilize my abilities to the maximum, while providing me a wide exposure, 
            sufficient responsibilities, independence of thoughts and opportunity to learn. My personal
             and professional growth should be tandem with the organization
        </p>
        <div className="icons">
            <a href="https://twitter.com/Archana01179986?s=08" className=" icon i-facebook">
                <TwitterIcon/>
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

@media screen and (max-width: 520px){
  h1{
      font-size: 10px;
     
  }
}
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
    span{
        font-size: 2.5rem;
    }
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
