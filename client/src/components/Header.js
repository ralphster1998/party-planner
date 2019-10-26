// MAKE THE HEADER AND MAKE THE LOGIN FORM
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li style={{ margin: '0 20px' }}>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                )
            default:
                return [
                    <li key="1">Hello</li>,
                    <li key="3" style={{ margin: '0 20px' }}>
                        {/* Notifications: {} this is where you put friend notificatoins */}
                    </li>,
                    <li key="2" style={{ margin: '0 20px' }}><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo darken-3">
                    <Link 
                        to={this.props.auth ? '/surveys' : '/'} 
                        className="left brand-logo"
                        style={{ marginLeft: 20 }}>
                        Party Planner
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>

        );
    }
}



function mapStateToProps({ auth }) {
    return { auth: auth };
}

export default connect(mapStateToProps)(Header);