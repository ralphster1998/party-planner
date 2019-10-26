import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import PartyNew from './PartyNew';

// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/parties/new" component={PartyNew} />
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);