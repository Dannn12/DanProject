import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function CharacterCards() {

    const [characters, setCharacters] = useState([]);



const handleDelete = (id) => {
    axios.delete("http://localhost:4101/char/delete"+ id).then(() => this.setState({ status: 'Delete Successful'}));
}    
    
useEffect(() => {
        axios.get("http://localhost:4101/char/all").then(res => setCharacters(res.data));
    }, []);// [] -> means it only runs once

    return (
        <>
            {
                characters.map(char => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Text>{`name: ${char.name}`}</Card.Text>
                            <Card.Text>{`age: ${char.age}`}</Card.Text>
                            <Card.Text>{`ability: ${char.ability}`}</Card.Text>
                            <Card.Text>{`fact: ${char.fact}`}</Card.Text>
                            <Button style={{}} type="primary">Update</Button><Button type="danger" onClick={handleDelete(char.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </>
    )
}

export default CharacterCards;