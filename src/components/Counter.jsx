import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import countapi from 'countapi-js';

const Counter = () => {

    const [visitorCount, setVisitorCount] = useState(0);

    

    useEffect(() => {
        // getVisitorCount();
    }, []);

    return (
        <div>
            {/* {visitorCount} */}
        </div>
    )
}

export default Counter