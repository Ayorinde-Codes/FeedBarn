import {React, useEffect} from "react";
import TopBar from '../components/TopBar'
import HomeBanner from '../components/Banner/HomeBanner'
import Header from "../components/Header";
import Whyus from "../components/Whyus";
import Benefits from "../components/Benefits";
import Service from "../components/Service";
import Gallery from "../components/Gallery";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import AboutPreview from "../components/AboutPreview";

const Home = () => {
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
            <HomeBanner />
            <AboutPreview />
            <Whyus />
            <Service />
            <Benefits />
            <Gallery />
            <CallToAction />
            <Footer />
        </div>
    )
}

export default Home;