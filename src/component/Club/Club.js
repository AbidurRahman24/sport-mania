import React from 'react';

const Club = (props) => {
    const {idLeague, strLeague, strSport} = props.club
    return (
        <div>
            <h3>Club Name: {idLeague}</h3>
            <h5>League Name: {strLeague}</h5>
            <p>Sport Name: {strSport}</p>
        </div>
    );
};

export default Club;