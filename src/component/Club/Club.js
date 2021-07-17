import React from 'react';
import './Club.css'
import { Button, Card}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../image/image 1.png'

const Club = (props) => {
    const { idLeague, strLeague, strSport } = props.club
    const cardStyle = {
        width: '18rem',
        margin: '5px',
        padding: '10px',
    }
    return (
        <div className="flex-fill">
            <div className="container">
                 <Card className="text-center h-100" style={cardStyle}>
                <Card.Img variant="top" src={image1} />
                 <Card.Body className='text-muted'>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>Sport Type: {strSport} <br />
                        <Link to={`/club/${idLeague}`}>
                            <Button>More Details</Button>
                        </Link>
                    </Card.Text>
                 </Card.Body>
                </Card>
             </div>
            </div>
    );
};

export default Club;