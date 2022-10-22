import React from 'react';
import { ToastContainer } from 'react-toastify';
import Card from '@components/Card';
import Filter from '@components/Filter';
// import ModalViewCode from '@components/Modal/ModalViewCode';

function Home() {
    return (
        <div className="home-page">
            <Filter />
            <Card />
            <ToastContainer bodyClassName="font-primary text-sm text-slate-500" autoClose={1000}></ToastContainer>
            {/* <ModalViewCode></ModalViewCode> */}
        </div>
    );
}

export default Home;
