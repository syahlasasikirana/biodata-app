import React from "react";
import Card from 'react-bootstrap/Card';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Navbarr from "../components/Navbar";


class BiodataList extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          biodatas: 0
        };
    }

    biodatas = () => {
        this.setState({
          biodatas: this.state.biodatas + 1,
        });
    }

    render(){
        return(
            <div>
                <Navbarr />
                <h1>Biodata List</h1>         
                {
                    this.biodatas.length > 0 ? (
                        <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Name : </Card.Title>
                            <Card.Title>Nickname : </Card.Title>
                            <Card.Title>Address : </Card.Title><br />
                            <div>
                                <Button variant="primary" style={{ marginRight: "10px" }}>Edit</Button>
                                <Button variant="secondary">Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    ) : (
                        <h3>No Data</h3>
                    )
                }
            </div>            
        )
    }
}

export default BiodataList