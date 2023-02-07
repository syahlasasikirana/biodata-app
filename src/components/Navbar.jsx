import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import "./Style.css"


class Navbarr extends React.Component{

    // goToNextPage = () => {
    //     this.props.navigate('/create-biodata');
    // }

    render(){
        // const navigate = useNavigate();
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Biodata-App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/create-biodata" className="nav-custom">Add Your</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Navbarr