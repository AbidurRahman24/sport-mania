import React, { useEffect, useState } from 'react';
import './ClubDetail.css'
import { useParams } from 'react-router-dom';
import male from '../../image/male.png';
import female from '../../image/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'

const ClubDetails = () => {
    let { clubId } = useParams()
    const [clubDetails, setClubDetails] = useState({})
    const { dateFirstEvent, strCountry, strSport, strDescriptionEN, strLogo, strGender } = clubDetails;
    useEffect(() => {
        const URL = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${clubId}`
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setClubDetails(data.leagues[0])
                console.log(data.leagues[0])
            })
    }, [clubId])
    const header = {
        backgroundImage: `url(${strLogo})`,
        backgroundColor:'salmon',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '300px',
    }

    return (
        <div>
            <div className="cardDetailsHeader" style={header}>
            </div>
            <div className="detailsContainer" style={{ backgroundColor: '#0E0A2A' }}>
                <div className="container " >
                    <div className="row  card-head">
                        <div class="col ">
                            <h3>Premier League</h3>
                            <p>Founder: {dateFirstEvent} </p>
                            <p>Country: {strCountry}</p>
                            <p>Sport Type: {strSport}</p>
                            <p>Gender: {strGender}</p>
                        </div>
                        <div class="col card-head" >
                            {
                                strGender ? <img className='conditional-ima' src={male} alt="" /> : <img className='conditional-ima' src={female} alt="" />
                            }
                        </div>
                    </div>
                    <p style={{ marginTop: '20px', color: 'white' }}>{strDescriptionEN}</p>
                    <div style={{color:'white'}} className="icon">
                    <FontAwesomeIcon icon={faCoffee} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClubDetails;


