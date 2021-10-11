import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house,ornaments}=props;
    return (
        <div>
            <h2>Father</h2>
            <h5>House: {house}</h5>
            <div className="" style={{display:"flex"}}>
                <MySelf house={house} ornaments={ornaments}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;