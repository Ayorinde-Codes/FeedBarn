import React from "react";
import TopBar from '../components/TopBar'
import HomeBanner from '../components/Banner/HomeBanner'
import Header from "../components/Header";
import About from "../components/About";
import Whyus from "../components/Whyus";
import Benefits from "../components/Benefits";
import Service from "../components/Service";

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
        </div>
    )
}

export default Home;