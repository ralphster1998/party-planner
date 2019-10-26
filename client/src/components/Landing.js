import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <div style={{ textAlign: 'center'}}>
                <h1>
                    Make The Best Plan for Your Party
                </h1>
                You Will Be Satisfied
            </div>
            <div style={linkStyle}>
                <Link to="/parties/new" className="btn-floating btn-large red" >
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

const linkStyle = {
    width: 50
}

export default Landing;