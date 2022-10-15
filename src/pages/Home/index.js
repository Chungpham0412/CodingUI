import React from 'react';
import Card from '@components/Card';
import Filter from '@components/Filter';

function Home() {
    return (
        <div className="home-page">
            <Filter />
            <Card />
        </div>
    );
}

export default Home;
