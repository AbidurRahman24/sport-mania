import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ClubDetails = () => {
    let {clubId} = useParams()
    const [clubDetails, setClubDetails] = useState({})
    const {strCountry, strCurrentSeason, strDescriptionEN, strFanart1, strLogo} = clubDetails
    useEffect(()=>{
        const URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${clubId}`
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            setClubDetails(data.leagues[0])
            console.log(data.leagues[0])
        })
    },[clubId])
    return (
        <div>
            <img src={strFanart1} alt="" />
            <img src={strLogo} alt="" style={{backgroundColor:'salmon'}} />
            <h2>Country Name: {strCountry}</h2>
            <p>Year: {strCurrentSeason}</p>
            <p>{strDescriptionEN}</p>
        </div>
    );
};

export default ClubDetails;