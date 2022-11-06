import React, { useEffect, useState } from 'react';
import * as FilterService from 'src/services/FilterService';
import './Filter.scss';
import { useStore, actions } from 'src/store';

function Filter() {
    const [isActive, setIsActive] = useState(0);
    const [filterResult, setFilterResult] = useState([]);
    const [state, dispatch] = useStore();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await FilterService.getFilters();
            setFilterResult(result);
        };
        return () => {
            fetchApi();
        };
    }, []);

    const handleClick = (id) => {
        setIsActive(id);
        dispatch(actions.setFilter(id));
        console.log('SetFilter => State(Filter-id)', state);
        console.log('Click => Filter-id', id);
    };

    return (
        <div className="filter d-flex align-items-center">
            <div className={isActive === 0 ? 'filter--item active' : 'filter--item'} onClick={() => handleClick(0)}>
                All
            </div>
            {filterResult.map((item, index) => {
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
