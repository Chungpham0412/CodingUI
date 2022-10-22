import React, { useState } from 'react';
import './Filter.scss';
function Filter() {
    const [isActive, setIsActive] = useState(0);
    const items = [
        {
            name: 'All',
            description: '',
            image: 'none',
        },
        {
            name: 'Form',
            description: '',
            image: 'none',
        },
        {
            name: 'Button',
            description: '',
            image: 'none',
        },
        {
            name: 'dropdown',
            description: '',
            image: 'none',
        },
        {
            name: 'other',
            description: '',
            image: 'none',
        },
        {
            name: 'loading',
            description: '',
            image: 'none',
        },
        {
            name: 'tab',
            description: '',
            image: 'none',
        },
    ];
    const handleClick = (index) => {
        setIsActive(index);
    };
    return (
        <div className="filter d-flex align-items-center">
            {items.map((item, index) => {
                return (
                    <div
                        className={isActive === index ? 'filter--item active' : 'filter--item'}
                        onClick={() => handleClick(index)}
                        key={index}
                    >
                        {item.name}
                    </div>
                );
            })}
        </div>
    );
}

export default Filter;
