import React from 'react';
import OneNews from './OneNews';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function TopTenNews() {
    const [Data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let {
                data: { results }
            } = await axios.get(
                `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`
            );
            setData(results);
            // // server side calling api
            // let { data } = await axios.get('http://localhost:8080/api');
            // console.log(data);
            // setData(data);
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
