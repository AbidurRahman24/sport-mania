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
        <div className="">
            <div className="row">
                <div className="col-md-12">
                    <div style={header}>
                        <div className="row">
                            <div className="main-header " >
                                <h2>Sport mania</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;