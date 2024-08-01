import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ServiceBreadcrumb from "../components/Banner/ServiceBreadcrumb";
import Footer from "../components/Footer";
import MyServices from "../components/MyServices";

const Services = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <ServiceBreadcrumb />
            <MyServices />
            <Footer />
        </div>
    )
}

export default Services;