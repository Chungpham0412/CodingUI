import React from 'react';
import { IconBack } from '@components/Share/Icons';
import image from '@assets/images/404.png';
import './404.scss';
import { Link } from 'react-router-dom';
function PageNotFound() {
    return (
        <div className="page-error d-flex align-items-center justify-content-center">
            <Link to="/" className="btn d-flex btn-effect align-items-center">
                <IconBack /> Go back
            </Link>
            <img src={image} alt="Not Found" />
        </div>
    );
}

export default PageNotFound;
