import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class QuestionPage extends Component {
    render() {
        return (

        );
    }
}


function mapStateToProps({ authedUser, users }) {
    const authedUserAnswers = users[authedUser].answers;

    return {
        authedUserAnswers
    };
}


export default connect(mapStateToProps)(QuestionPage);