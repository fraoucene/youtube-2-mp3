import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem, FormGroup, FormControl, Button, DropdownButton } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import  *  as CONSTANTS from "../api/constants";

var NavBar = React.createClass({
    
    render() {  
        return (<div className = "nav-bar">
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Youtube 2 mp3</Link>
                    </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={(e) => this.props.setKind(e)} activeKey={ this.props.kind }>
                        <LinkContainer to="/video">
                            <NavItem  value="video" eventKey={CONSTANTS.API_VIDEO_TYPE}>Videos</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/playlist">
                            <NavItem  value="playlist" eventKey={CONSTANTS.API_PLAYLIST_TYPE}>Playlists</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/channel">
                            <NavItem eventKey={CONSTANTS.API_CHANNEL_TYPE} >Channels</NavItem>
                        </LinkContainer>
                        {/*<LinkContainer to="/url">
                            <NavItem eventKey={4}>From urls</NavItem>
                        </LinkContainer>*/}
                        <LinkContainer to="/contact">
                            <NavItem eventKey={5}>Contact</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>);
    }
});


export default NavBar;