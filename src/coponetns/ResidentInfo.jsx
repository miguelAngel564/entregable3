import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({ count }) => {

    const [left, setLeft] = useState({});

    useEffect(() => {
        axios.get(count)
            .then(res => setLeft(res.data));
    }, [])

    console.log(left)

    return (
        <div>

            {
                <div className='item-2'>

                    <div className="iamgenes">
                        <img src={left.image} alt="" />
                    </div>
                    <div className="dinamic">

                        <li> Name:  <br />   {left.name} </li>
                        <li> {left.status}</li>
                        <li> <b>Origin</b> <br /> {left.origin?.name}</li>
                        <li><b>Episode where <br /> appear</b> <br /> {left.episode?.length}</li>
                    </div>
                    <br />
                </div>
            }

        </div>
    );
};

export default ResidentInfo;