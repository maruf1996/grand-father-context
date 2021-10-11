import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
    const {house,ornaments}=props;
    return (
        <div>
            <h2>MySelf</h2>
            <h5>House: {house}</h5>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default MySelf;