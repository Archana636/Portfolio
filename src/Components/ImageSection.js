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
            <h4>Archana <span> Archu K</span></h4>
             <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend ipsum et ante aliquet finibus.
        Duis magna diam, pulvinar ornare lorem quis, sagittis convallis velit.
         </p>
         <div className="about-info">
         <div className="info-title">
             <p>Full Name</p>
             <p>Age</p>
             <p>Nationality</p>
             <p>Languages</p>
             <p>Location</p>
             <p>Service</p>
           </div>  
           <div className="info">
             <p>:Archana</p>
             <p>:23</p>
             <p>:Hindu</p>
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
        color:  var(--white-color);
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
