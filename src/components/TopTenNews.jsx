import React from 'react';
import OneNews from './OneNews';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function TopTenNews() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // console.log(process.env.REACT_APP_API_KEY);
            let {
                data: { results }
            } = await axios.get(
                `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`
            );
            setData(results);
        }
        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 1000 * 60 * 5);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div>
            {Data && Data.map(e => <OneNews key={e.id} info={e}></OneNews>)}
        </div>
    );
}
