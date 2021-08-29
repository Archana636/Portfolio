import React, {useState} from 'react'
import Title from '../Components/Title';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import portfolio from '../data/portfolio';
import Menu from '../Components/Menu';
import Button from '../Components/Button';

const allButtons = ['All', ...new Set(portfolio.map(item => item.category))]

function PortfolioPage() {
    const [menuItem, setMenuItem] = useState(portfolio);
    const [button] = useState(allButtons);

    const filter = (button) => {
        console.log(button);

        if(button === 'All'){
            setMenuItem(portfolio);
            return;
        }

        const filteredData = portfolio.filter(item => item.category === button);
        setMenuItem(filteredData);
        
      
    }
    return (
        <MainLayout>
             <Title title={'portfolio'} span={'portfolio'}/>
           <InnerLayout>


          <Button filter={filter} button={button}/>
           <Menu menuItem={menuItem}/>
           </InnerLayout>
            </MainLayout>
    )
}


export default PortfolioPage;
