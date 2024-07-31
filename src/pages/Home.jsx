import React from "react";
import TopBar from '../components/TopBar'
import HomeBanner from '../components/Banner/HomeBanner'
import Header from "../components/Header";
import About from "../components/About";
import Whyus from "../components/Whyus";
import Benefits from "../components/Benefits";
import Service from "../components/Service";
import Gallery from "../components/Gallery";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <HomeBanner />
            <About />
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