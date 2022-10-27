import React from 'react';
import { useState } from 'react';
import axios from 'axios';




const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [ability, setAbility] = useState('')
    const [fact, setFact] = useState('')

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:4101/char/add", {    
                name,
                age,
                ability,
                fact
            });
            setName("");
            setAge("");
            setAbility("");
            setFact("");
            console.log("res", res)
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <div>
            <form onSubmit={handleAdd}>
                <label>Name:</label>
                <input
                    type="text"
                    onChange={e => setName(e.target.value)} />
                <br />
                <label>Age:</label>
                <input type="text"
                    onChange={e => setAge(e.target.value)} />
                <br />
                <label>Ability:</label>
                <input type="text"
                    onChange={e => setAbility(e.target.value)} />
                <br />
                <label>Fact:</label>
                <input type="text"
                    onChange={e => setFact(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )

}

export default Form