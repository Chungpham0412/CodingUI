import React from 'react';
import './Filter.scss';
function Filter() {
    return (
        <div className="filter d-flex align-items-center">
            <div className="filter--item active">all</div>
            <div className="filter--item">animation</div>
            <div className="filter--item">form</div>
            <div className="filter--item">button</div>
            <div className="filter--item active">dropdown</div>
            <div className="filter--item">other</div>
            <div className="filter--item">loading</div>
            <div className="filter--item">tab</div>
        </div>
    );
}

export default Filter;
