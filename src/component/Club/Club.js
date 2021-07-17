import React from 'react';
import { Link } from 'react-router-dom';

const Club = (props) => {
    const {idLeague, strLeague, strSport} = props.club
    return (
        <div>
            <h3>Club Name: {idLeague}</h3>
            <h5>League Name: {strLeague}</h5>
            <p>Sport Name: {strSport}</p>
            <Link to={`/club/${idLeague}`}>
                <button>More Details</button>
            </Link>
        </div>
    );
};

export default Club;