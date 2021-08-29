import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        < ImageSectionStyled>
            <div className="left-content">
            <img src={resume} alt=""/>
            </div>
            <div className="right-content">
            <h4>Archana <span>  K</span></h4>
             <p className="paragraph">
             Seeking to join an organization, this will utilize my abilities to the maximum, while providing me a wide exposure, sufficient responsibilities, independence of thoughts and opportunity to learn. My personal and professional
              growth should be tandem with the organization.
         </p>
         <div className="about-info">
         <div className="info-title">
             <p>Full Name</p>
             <p>Age</p>
             <p>D.O.B</p>
             <p>Gender</p>
             <p>Nationality</p>
             <p>Marital status</p>
             <p>Language proficiency</p>
             <p>Location</p>
             <p>Service</p>
           </div>  
           <div className="info">
             <p>:Archana</p>
             <p>:23</p>
             <p>:11/01/1998</p>
             <p>Female</p>
             <p>:Indian</p>
             <p>Married</p>
             <p>:English, Tamil and Kannada</p>
             <p>:Bangalore</p>
             <p>:Fresher</p>
            
           </div>   
         </div>
         <PrimaryButton title={'Download CV'}/>
            </div>
        </ ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
margin-top: 5rem;
display: flex;
margin-top: 4rem;
 @media screen and (max-width: 1000px){
  flex-direction: column ;
  .left-content{
      margin-bottom:2rem ;
  }
 }
.left-content{
    width: 100%;
    /* height: 60vh; */
    img{
        width: 90%;
        height: 65%;
        object-fit: cover;

    }
}
.right-content{
    width: 100%;
    h4{
        font-size: 2rem;
        color: white;
        span{
            font-size: 2rem;
        
        }
    }
    .paragraph{
        padding: 1rem 0;
    }
    .about-info{
        display: flex;
        padding-bottom:1.4rem ;

        .info-title{
           padding-right: 3rem;
            p{
                font-weight: 600;
            }
        }
        
        .info-title, .info{
         p{
             padding: .3rem 0;
         }
        }

    }
}


`;

export default ImageSection
