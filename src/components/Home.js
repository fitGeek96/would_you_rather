import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BriefQstList from './BriefQstList';

class Home extends Component {
    render() {
        const {answeredQstIDs, unansweredQstIDs} = this.props;

        return (
            <Fragment>
                <Tabs>
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                        <BriefQstList
                            idsList={unansweredQstIDs}
                            emptyListNote="Create New Questions ..."/>
                    </Tab>
                    <Tab eventKey="answered" title="Answered Questions">
                        <BriefQstList
                            idsList={answeredQstIDs}
                            emptyListNote="No answered Questions yet ..."/>
                    </Tab>
                </Tabs>
            </Fragment>
        );
    }
}

function mapStateToProps({authedUser, questions, users}) {
    const answeredQstIDs = Object
        .keys(questions)
        .filter((id) => users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    const unansweredQstIDs = Object
        .keys(questions)
        .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {answeredQstIDs, unansweredQstIDs};
}

export default connect(mapStateToProps)(Home);