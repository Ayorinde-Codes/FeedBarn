import React from 'react';
import ErrorBreadcrumb from '../components/Banner/ErrorBreadcrumb';
import Error404 from '../components/Error404';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div>
            <Header />
            <ErrorBreadcrumb />
            <Error404 />
            <Footer />
        </div>
    )
}

export default NotFound;