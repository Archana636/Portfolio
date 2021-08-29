import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
  const phone = <PhoneIcon/>
  const email = <EmailIcon/>
  const location = <LocationOnIcon />

    return (
        <MainLayout>
          <Title title={'Contact'} span={'Contact'}/>
          <ContactPageStyled>
          <InnerLayout className={'contact-section'}>
            
         <div className="left-content">
           <div className="contact-title">
             <h4>Get In Touch</h4>
           </div>
           <form  className="form">
              <div className="form-field">
 <label for="name">Enter your Name*</label>
 <input type="text" id="name" name="name"/>
 
            </div> 
            <div className="form-field">
 <label for="name" >Enter your Email *</label>
 <input type="email" id="email"/>
            </div> 
            <div className="form-field">
 <label for="name" >Enter your Subject*</label>
 <input type="text" id="subject"/>
            </div> 
   <div className="form-field">
     <label for="text-area">Enter your Message *</label>
     <textarea name="textarea" id="textarea" cols="30" row="10"></textarea>
     </div>  
     <div className="form-field form-button">
       <PrimaryButton title={'Send Email'} />
       </div>       
           </form>
         </div>
         <div className="right-content">
         <ContactItem title={'Phone'} icon={phone} contact1={'6360637581'} contact2={'6360637581'}/>
         <ContactItem title={'Email'} icon={email} contact1={'archu.it11@gmail.com'}  contact2={'archu.aru.sen@gmail.com'}/>
         <ContactItem title={'Address'} icon={location} contact1={'#567/6 3rd main 14th Cross NRI Layout, Bangalore '}  contact2={'Karnatake Bangalore 43'}/>
       
         
         </div>
        </InnerLayout>
          </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
.contact-section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem ;
    @media screen and (max-width: 978px ){
    grid-template-columns: repeat(1, 1fr);
    /* .form-button{
       margin-bottom:2rem ;
       
     } */

}
    .right-content{
      display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media screen and (max-width: 502px){
   width: 70%;
}
      }
    .contact-title{
      color: var(--white-color);
      padding: 1rem 0;
      font-size: 1.8rem;
    }
    .form{
      width: 100%;
      @media screen and (max-width: 502px){
   width: 70%;
}

      .form-field{
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label{
      position: absolute;
      left: 20px;
      top:-19px;
      display: inline-block;
      background-color: var(--background-dark-color);
      padding:0 .5rem;
      color: inherit;
        }
        input{
          border:1px solid var(--border-color);
          /* outline:  #1e3247 solid 1px; */
           /* background: transparent; */
           outline: none;
           background: transparent;
           opacity:4 ;
           height:50px;
           padding: 0 15px;
            width: 100%;
            color: inherit;
          }
          textarea{
             background-color: transparent;
             border:1px solid var(--border-color);
             outline: none;
             color: inherit;
             width: 100%;
             padding: .8rem 1rem;
          }
     } 
    
          }
      }
    



`;
export default ContactPage
