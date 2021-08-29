import React from 'react'
import styled from 'styled-components';

function SkillsSection({skill,progress,width}) {
    return (
        <SkillsSectionStyled>
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
               <div  className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                    <div className="progress">
                       <div className="inner-progress" style={{width:width}}></div> 
                    </div>
                    </div>
                   </div> 
            </div>
        </div>
        </SkillsSectionStyled>

    )
}

const SkillsSectionStyled = styled.section`
.SkillsSection{
    /* margin:4.5rem 0; */
    /* display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        } */
.skills-container{
    margin: 4rem 0 ;
   
    
    .skill-title{
      font-size: 1.4rem;
      font-weight: 400;
    }

    .skill-bar{
        display: flex;
         align-items: center;
       .skill-text{
          

       } 
       .skill-progress{
           width: 100%;
          .progress{
              width:100%;
              height: .5rem;
              background-color: red;
              margin-left: 1rem;
              background-color: #0381ff3f;
              position: relative;
              .inner-progress{
                position: absolute;
                 
                  background-color: #037FFF;
                  height: 100%;
                  bottom: 0;
                  left: 0;
              }
 }
           }
       }
    }

}

.skillscontainer{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
    row-gap: 3rem;
    margin: 1rem 0;
}


`;



export default SkillsSection;
 