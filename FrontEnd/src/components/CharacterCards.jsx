import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Form } from 'CharacterForm';

function CharacterCards() {

    const [characters, setCharacters] = useState([]);


    const handleDelete = async (id) => {
        await axios.delete("http://localhost:4101/char/delete/" + id)
        getCharacters();
    }
   

const getCharacters = async () => {
    const res = await axios.get("http://localhost:4101/char/all");
    setCharacters(res.data);
}

useEffect(() => { getCharacters() }, []);// [] -> means it only runs once


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
                        <Button type="primary" onClick={() => handleUpdate(char.id)}>Update</Button>
                        <Button type="danger" onClick={() => handleDelete(char._id)}>Delete</Button>
                    </Card.Body>
                </Card>
            ))
        }
    </>
)
}

export default CharacterCards;