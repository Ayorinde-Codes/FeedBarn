import {React, useEffect} from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import AboutBreadCrumb from '../components/Banner/AboutBreadcrumb';
import About from '../components/About';
import Timeline from '../components/Timeline';
import ChooseUs from '../components/ChooseUs';
import OurFarmers from '../components/OurFarmers';
import Footer from '../components/Footer';

const AboutUs = () => {
    useEffect(() => {
        let scripts = [
            { src: "/assets/js/main.js" },
        ]

        scripts.map(item => { 
            const script = document.createElement("script")
            script.src = item.src
            script.async = true
            document.body.appendChild(script)
        })    
      }, []);
    
    return (
        <div> 
            <TopBar />
            <Header />
            <AboutBreadCrumb />
            <About />
            <Timeline />
            <ChooseUs />
            <OurFarmers />
            <Footer />
        </div>
    )
}

export default AboutUs;