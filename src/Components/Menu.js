
import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';

function Menu({menuItem}) {
    return (
        <MenuItemStyled>
       
        {
            menuItem.map((item) => {
                return <div className="grid-item" key={item.id}>
                <div className="portfolio-content">
                 <div className="portfolio-image">
                      <img src={item.image} alt=""/>
                      <ul>
                         <li>
                         <a href={item.link1}>
                          <GitHubIcon/>
                         </a>
                         </li>
                         <li>
                         <a href={item.link2}>
                             <PinterestIcon/>
                         </a>
                         </li>
                         </ul>
                     </div> 
                     <h6>{item.title}</h6> 
                     <p>{item.text}</p> 
                  
              </div> 
                </div>
            })
        }
              
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 2rem;

.grid-item{
    .portfolio-content{
        display: block;
        position: relative;
        h6{
            font-size: 1.5rem;
        }

        img{
            width: 100%;
            height: 30vh;
            object-fit: cover;

        }
        ul{
            display: none;
          
        }
        .portfolio-image{
            &::before{
            content: "";
                position: absolute;
                left: 2%;
                top: 4%;
                transform: scale(0);
                height: 0;
                width: 0;
                transition: all .4s ease-in-out;
            }

            }
            .portfolio-image:hover{
                ul{
                    display:block;
                    position: absolute;
                    left: 50%;
                    top: 40%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content:center ;
                    li{
                        background-color: blue;
                        display: flex;
                        align-items: center;
                        justify-content:center ;
                        padding: 1rem;
                        border-radius: 50%;
                       margin:0;
                    }
                    svg{
                        font-size: 2rem;
                    }

                }
                &::before{
                height:  calc(100% - 32% );
                width: calc(100%- 4%);
                background-color: white;
                opacity: 0.9;
                transform-origin: left;
                transition: all .4s ease-in-out;
        
        }
        }

    }
}

`;
export default Menu
