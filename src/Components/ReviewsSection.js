import React from 'react';
import styled from 'styled-components';
import { InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';


function ReviewsSection() {
    return (
       
        <ReviewsStyled >
            <Title title={'Reviews'} span={'Reviews'}/>
            <InnerLayout>
           <div className="reviews">
               <ReviewItem 
               text={'Lorem ipsum dolor sit constinhgd ghg'}
               />
                <ReviewItem 
               text={'Lorem ipsum dolor sit constinhgd ghg ggfggnjugdbb?'}
               />
              
               </div> 
            </InnerLayout>
        </ReviewsStyled >
        
    )
}

const ReviewsStyled = styled.section`
.reviews{
display: flex;

}
`;

export default ReviewsSection;
