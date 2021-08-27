import React from 'react'
import blogs from '../data/blogs';
import styled from 'styled-components'
import  Title  from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts'


function BlogsPage() {
    return (
       <MainLayout>
        <BlogsStyled>
       
        <Title title={'Blogs'} span={'Blogs'}/>
        <InnerLayout className={'blog'}>
            {
                blogs.map((blog) =>{
                    return <div key={blog.id} className={'blog-item'} >
                    <div className="image">
                        <img src={blog.image} alt=""/>
                  </div>
                  <div className="title">
                      <a href={'blog.link'}>
                          {blog.title}
                      </a>

                  </div>
                    </div>
                })
            }
        </InnerLayout>
        </ BlogsStyled >
        </MainLayout>
        
    )
}


const BlogsStyled = styled.div`
 .blog{
     padding: 2rem;
     
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     grid-column-gap: 2rem;
     grid-row-gap: 3rem;
     
    
     .blog-item{
        background-color: var( --background-dark-color2);
        padding: 2rem 1rem;

       
     }
  .image{
      width: 90%;
      /* height: 90%; */
      overflow: hidden;
      padding-bottom: .5rem;
      
      img{
          width: 90%;
          height: 95%;
          object-fit: cover;
          transition: all .4s ease-in-out;
         
         &:hover{
              cursor: pointer;
              transform : rotate(10deg) scale(1.1);
          }

      }
  }
  .title{
      a{
          font-size: 1.5rem;
          padding: 2rem 0;
          color: white;
          cursor: pointer;
          transition: all .4s ease-in-out;
         
          &:hover{
              color: var(--primary-color);
              cursor: pointer;
              transform : rotate(10deg) scale(1.1);

          }
      }
  }
 }

`;
export default BlogsPage;
