import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { resetAuthedUser } from '../actions/authedUser';
import Avatar from './Avatar';
import { BsPuzzleFill } from 'react-icons/bs';

function NavigationBar(props) {
    const { user, dispatch } = props;

    const handleLogout = () => {
        dispatch(resetAuthedUser());
    };

    return (
        <Fragment>
            <Navbar expand="lg" bg="light" variant="light" className="my-3 border">
                <Navbar.Brand as={Link} to="/">
                    <h2>
                        <small>
                            <BsPuzzleFill />
                        </small>
                    </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/" exact>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/add">
                            Add New Qst
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/leaderboard">
                            LeaderBoard
                        </Nav.Link>
                    </Nav>
                    <Nav className="align-items-start">
                        <Navbar.Text>{user.name}</Navbar.Text>
                        <Avatar avatarURL={user.avatarURL} className="mx-3" />
                        <Button 
                            variant="outline-dark"
                            onClick={handleLogout}
                            className="mt-3 mt-lg-0"
                            >
                        Logout
                        </Button>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

function mapStateToProps({ users, authedUser }) {
    return {
        user: users[authedUser]
    };
}

export default connect(mapStateToProps)(NavigationBar);