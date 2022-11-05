import React, { useEffect, useState } from 'react';
import * as FilterService from 'src/services/FilterService';
import './Filter.scss';

function Filter() {
    const [isActive, setIsActive] = useState(0);
    const [filterResult, setFilterResult] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await FilterService.getFilters();
            setFilterResult(result);
        };
        return () => {
            fetchApi();
        };
    }, []);
    const handleClick = (index) => {
        setIsActive(index);
    };
    return (
        <div className="filter d-flex align-items-center">
            {filterResult.map((item, index) => {
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
