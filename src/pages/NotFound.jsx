import React from 'react';
import ErrorBreadcrumb from '../components/Banner/ErrorBreadcrumb';
import Error404 from '../components/Error404';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopBar from '../components/TopBar';

const NotFound = () => {
    return (
        <div>
            <TopBar />
            <Header />
            <ErrorBreadcrumb />
            <Error404 />
            <Footer />
        </div>
    )
}

export default NotFound;