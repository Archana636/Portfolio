import React from 'react'
import styled from 'styled-components';
import Title from '../Components/Title';
import { InnerLayout} from '../styles/Layouts';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase =  <BusinessCenterIcon/>
    const school = <SchoolIcon/>
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'}/>
            <InnerLayout>
                <div className="small-title">
            <SmallTitle icon={briefcase} title={'Educational Qualification'}/>
            </div>
            <div className="resume-content">
            <ResumeItem 
            year={'2012-2013'} 
            title={'10th Standard'}
            subTitle={'Shushruti Vidya Samste '}
            text={'I completed my class 10th std on the year 2013 at Shushruti Vidya Samste School, peenya 2nd Stage, Bangalore'}/>

<ResumeItem 
            year={'2013-2015'} 
            title={'2nd PUC (Class 2)'}
            subTitle={'GT Independent PU College, Bangalore,India'}
            text={'I completed my class 1(1st PUC) and class 2 (2nd PUC) on the year 2015 at GT Independent PU College, Bangalore '}/>

<ResumeItem 
            year={'2015-2018'} 
            title={'Bachelor Degree'}
            subTitle={'KLE  societys S. Nijalingappa College '}
            text={'I completed my Bachelor of Computer Application (BCA) at KLE Institute, Rajajinagar, Bangalore '}/>
           </div>

           <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={'Experience'}/>
            </div>
            <div className="resume-content ">
<ResumeItem 
            year={'2015-2016'} 
            title={'DCA(Diploma in Computer Application)'}
            subTitle={'KEONICS, Rajajinagar '}
            text={'I have an 1 year experience on DCA (Diploma in Computer Application). I am completed cource at KEONICS Training Institute Rajajinagar, Bangalore '}/>

<ResumeItem 
            year={'2017-2018'} 
            title={'Sql Server Administrator'}
            subTitle={'KDSSG Institute Marathahalli, Bangalore,India'}
            text={'I have an 1year experience on  SQL Database.  I am completed cource at KDSSG Training Institute, Marathahalli Bangalore '}/>

    
<ResumeItem 
            year={'2015-2018'} 
            title={'Bachelor Degree'}
            subTitle={'KLE  societys S. Nijalingappa College '}
            text={'I completed my Bachelor of Computer Application (BCA) at KLE Institute, Rajajinagar, Bangalore '}/>
            </div>
          
            </InnerLayout>
            
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
.small-title{
    padding-bottom: 3rem;
}
.u-small-title-margin{
    margin-top:4rem;
}
 
.resume-content{
    border-left: 2px solid var(--border-color);

}

`;

export default Resume

