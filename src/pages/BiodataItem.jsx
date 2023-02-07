import React from "react";

class BiodataItem extends React.Component{
    render(){
        return(
            <Card.Body>
                <Card.Title>Name : </Card.Title>
                <Card.Title>Nickname : </Card.Title>
                <Card.Title>Address : </Card.Title><br />
                <div>
                    <Button variant="primary" style={{ marginRight: "10px" }}>Edit</Button>
                    <Button variant="secondary">Delete</Button>
                </div>
            </Card.Body>
        )
    }
}

export default BiodataItem