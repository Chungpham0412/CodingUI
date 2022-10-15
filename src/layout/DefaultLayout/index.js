import React from 'react';
import Header from '@components/Share/Header';
import Footer from '@components/Share/Footer';
import Banner from '@components/Share/Banner';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <main className="container">
                <Banner />
                <div id="content">{children}</div>
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
