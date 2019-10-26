import React from 'react';
import { Link } from 'react-router-dom';

const PartyNew = () => {
    return (
        <div>
            <p>New Party</p>
        </div>
    );
};

export default PartyNew;

// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class PartyNew extends Component {

    state = { showFormReview: false }; 

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview 
                onCancel={() => this.setState({ showFormReview: false })}
            />;
        }

        return <SurveyForm 
            onSurveySubmit={() => this.setState({ showFormReview: true })}
        />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);