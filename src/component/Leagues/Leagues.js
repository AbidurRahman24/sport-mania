import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';

const Leagues = () => {
    const [club, setClub] = useState([]);
    const first10 = club.slice(0, 10);
    console.log(first10);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setClub(data.leagues)
                //    console.log(data.leagues);
            })
    }, [])
    return (
        <div>
            <h1>This is Club component: {first10.length}</h1>
            {
                first10.map(club => <Club
                     club={club}
                     key={club.idLeague}
                     ></Club>)
            }
        </div>
    );
};

export default Leagues;