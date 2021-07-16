import React, { useEffect, useState } from 'react';

const Club = () => {
    const [club, setClub] = useState([]);
   const first10 = club.find(0,10)
   console.log(first10);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setClub(data.leagues)
        //    console.log(data.leagues);
        })
    },[])
    return (
        <div>
            <h1>This is Club component: {club.length}</h1>
            {/* {
                club.map(player => <p>{player}</p>)
            } */}
        </div>
    );
};

export default Club;