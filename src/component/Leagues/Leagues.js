import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './League.css'

const Leagues = () => {
    const [club, setClub] = useState([]);
    const first10 = club.slice(0, 9);
    // console.log(first10);
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
            <div className="container">
                <div className="row">
                    <div className="header col-md-12 col-sm-12">
                    {
                first10.map(club => <Club
                    club={club}
                    key={club.idLeague}
                ></Club>)
            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leagues;