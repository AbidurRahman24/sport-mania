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

            <div class="hero-image">
                <div class="hero-text">
                    <h1>I am John Doe</h1>
                    <p>And I'm a Photographer</p>
                    <button>Hire me</button>
                </div>
            </div>
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