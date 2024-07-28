import React from "react";
import TopBar from '../components/TopBar'
import HomeBanner from '../components/Banner/HomeBanner'
import Header from "../components/Header";
import About from "../components/About";
const Home = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <HomeBanner />
            <About />
        </div>
    )
}

export default Home;