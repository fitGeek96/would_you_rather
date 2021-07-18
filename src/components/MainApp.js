import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import Leaderboard from './Leaderboard';
import PageNotFound from './PageNotFound';


class MainApp extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <NavigationBar>
                        <main>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/questions/:id" component={QuestionPage}/>
                                <Route path="/add" component={NewQuestion}/>
                                <Route path="/leaderboard" component={Leaderboard}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </main>
                    </NavigationBar>
                </Container>
            </Router>
        );
    }
}

export default MainApp;