import React from 'react';
import './Header.css'
import Background from '../../image/banner.jpg'

const Header = () => {
    const header = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '300px'
    }

    return (
        <div className="row"  style={header}>
            <div className="col-md-12 ">
               <div className="d-flex justify-content-center lign-items-center" style={{height:'300px'}}>
               <h2 style={{color:'#ffffff'}}>Sport Mania</h2>
               </div>
            </div>
        </div>
    );
};

export default Header;