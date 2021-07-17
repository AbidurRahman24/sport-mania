import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../image/male.png';
import female from '../../image/female.png';

const ClubDetails = () => {
    let { clubId } = useParams()
    const [clubDetails, setClubDetails] = useState({})
    const {dateFirstEvent, strCountry, strSport, strDescriptionEN,  strLogo,strGender } = clubDetails;
    useEffect(() => {
        const URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${clubId}`
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setClubDetails(data.leagues[0])
                console.log(data.leagues[0])
            })
    }, [clubId])
    const detailsHeader = {
        width: '100%',
        height: ' 250px'
    }

    return (
        <div>
            <div className="cardDetailsHeader">
                <img src={strLogo} alt="" style={detailsHeader} />
            </div>
            <div className="container">
                <div className="row">
                    <div class="col">
                        <h3>Premier League</h3>
                        <p>Founder: {dateFirstEvent} </p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>
                    <div class="col" >
                        {
                            strGender ? male : female
                        }
                    </div>
                </div>
                <p>{strDescriptionEN}</p>
            </div>
        </div>
    );
};

export default ClubDetails;