import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data.js';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }



    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle} />   
         <HeroSection />
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <InfoSection {...homeObjThree} />
         

        </>
    )
}

export default Home;