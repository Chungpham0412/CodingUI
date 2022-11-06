import React from 'react';
import { ToastContainer } from 'react-toastify';
import Card from '@components/Card';
import Filter from '@components/Filter';
import ModalViewCode from '@components/Modal/ModalViewCode';
import Modal from 'react-modal';
Modal.setAppElement('#root');
function Home() {
    return (
        <div className="home-page">
            <Filter />
            <Card />
            <ToastContainer bodyClassName="toast-container" autoClose={1000}></ToastContainer>
            <ModalViewCode></ModalViewCode>
        </div>
    );
}

export default Home;
