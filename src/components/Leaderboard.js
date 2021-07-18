import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import UserState from './UserStats';

class Leaderboard extends Component {
    render() {
        return (
            <Fragment>
                <h2 className="text-center my-3">
                    <small>Leaderboard</small>
                </h2>
                {this
                    .props
                    .userIDs
                    .map((id) => (<UserState key={id} id={id}/>))}
            </Fragment>
        );
    }
}

function mapStateToProps({users}) {
    const sortedIds = Object
        .keys(users)
        .sort((id_a, id_b) => {
            const score_A = Object
                .keys(users[id_a].answers)
                .length + users[id_a].question.length;
            const score_B = Object
                .keys(users[id_b].answers)
                .length + users[id_b].question.length;

            return score_B - score_A;

        });

    return {userIDs: sortedIds};
}

export default connect(mapStateToProps)(Leaderboard);