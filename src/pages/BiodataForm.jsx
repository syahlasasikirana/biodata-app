import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

class BiodataForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          biodatas: [],
          name: '',
          nickname: '',
          email: '',
          address: '',
          id: '',
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.addBiodata = this.addBiodata.bind(this);
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name; 

        this.setState ({
            [name] : value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            biodatas: [
                ...this.state.biodatas,
                {
                    id: this.state.biodatas.length+1,
                    name: this.state.nama,
                    nickname: this.state.np,
                    email: this.state.mail,
                    address: this.state.alamat,
                }
            ]
        })
    }

    addBiodata = () => {
        this.setState({
            id: '',
            name: '',
            nickname: '',
            email: '',
            address: ''
        })
    }

    render(){
        console.log(this.state.biodatas);
        return(
            <div>
                <Form style={{ width: "auto"}} onSubmit={this.handleSubmit}>
                    <Button variant="primary" type="submit" style={{ margin: "10px" }}>
                        <Link to="/" style={{ textDecoration: "none", color: "#fff"}}>Back</Link>
                    </Button>
                    <h2 style={{ textAlign: "center" }}>Silahkan isi data diri anda!</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="nama" value={this.state.nama} placeholder="Your Name"  onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control type="text" name="np" value={this.state.np} placeholder="Your Nickname" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="mail" value={this.state.mail} placeholder="Your Email" onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="alamat" value={this.state.alamat} placeholder="Your Address" onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" value="save" style={{ margin: "10px" }} onClick={this.addBiodata}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default BiodataForm