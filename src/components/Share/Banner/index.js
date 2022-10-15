import './Banner.scss';
import React from 'react';
import { IconChat, IconFacebook, IconGithub, IconPointer, IconYoutube, IconTiktok, IconWebsite } from '../Icons';

function Banner() {
    return (
        <div className="section-banner">
            <div className="section-banner__icon">
                <span className="pointer-effect">
                    <IconPointer />
                </span>
            </div>
            <h1 className="section-banner__title text-center">Get your free UI components with just few click</h1>
            <div className="section-banner__button">
                <a
                    href="https://github.com/chungpham0412"
                    rel="noopener noreferrer"
                    className="btn btn-effect btn-github"
                    target="_blank"
                >
                    <IconGithub />
                    <span>View on Github</span>
                </a>
                <a
                    href="https://www.facebook.com/chungpq.2000"
                    rel="noopener noreferrer"
                    className="btn btn-effect bg-gradient-primary"
                    target="_blank"
                >
                    <IconChat />
                    <span>Contact me</span>
                </a>
            </div>
            <div className="section-banner__social d-flex justify-content-center">
                <a
                    href="https://www.facebook.com/chungpq.2000"
                    rel="noopener noreferrer"
                    className="btn btn-effect btn-github"
                    target="_blank"
                >
                    <IconFacebook />
                </a>
                <a
                    href="https://www.facebook.com/chungpq.2000"
                    rel="noopener noreferrer"
                    className="btn btn-effect btn-github"
                    target="_blank"
                >
                    <IconYoutube />
                </a>
                <a
                    href="https://www.facebook.com/chungpq.2000"
                    rel="noopener noreferrer"
                    className="btn btn-effect btn-github"
                    target="_blank"
                >
                    <IconTiktok />
                </a>
                <a
                    href="https://www.facebook.com/chungpq.2000"
                    rel="noopener noreferrer"
                    className="btn btn-effect btn-github"
                    target="_blank"
                >
                    <IconWebsite />
                </a>
            </div>
        </div>
    );
}

export default Banner;
