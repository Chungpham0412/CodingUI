import React, { useEffect, useState } from 'react';
import * as FilterService from 'src/services/FilterService';
import './Filter.scss';
import { globalStore } from 'src/store/global-store';
import shallow from 'zustand/shallow';

function Filter() {
    const [isActive, setIsActive] = useState(0);
    const [filterResult, setFilterResult] = useState([]);

    const { setFilterId } = globalStore(
        (state) => ({
            setFilterId: state.setFilterId,
        }),
        shallow,
    );

    useEffect(() => {
        const fetchData = async () => {
            const result = await FilterService.getFilters();
            setFilterResult(result);
        };
        fetchData();
    }, []);

    const handleClick = (id) => {
        setIsActive(id);
        setFilterId(id);
    };

    return (
        <div className="filter d-flex align-items-center">
            <div className={isActive === 0 ? 'filter--item active' : 'filter--item'} onClick={() => handleClick(0)}>
                All
            </div>
            {filterResult &&
                filterResult.map((item, index) => {
                    return (
                        <div
                            className={isActive === index + 1 ? 'filter--item active' : 'filter--item'}
                            onClick={() => handleClick(item.id)}
                            key={item.name}
                        >
                            {item.name}
                        </div>
                    );
                })}
        </div>
    );
}

export default Filter;
