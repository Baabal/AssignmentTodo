import { Form, Button } from "react-bootstrap"
import {UserContext} from '../contexts/UserContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addUser} = useContext(UserContext);

    const [newUser, setNewUser] = useState({
        fname:"", lname:"", gender:"", hobbies:""
    });

    const onInputChange = (e) => {
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }

    const {fname, lname, gender, hobbies} = newUser;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(fname, lname, gender, hobbies);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div>First Name</div>

                <Form.Control
                    type="text"
                    name="fname"
                    value={fname}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
            <div>Last Name</div>

                <Form.Control
                    type="text"
                    name="lname"
                    value={lname}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <div>Gender</div>
                <input
                    type="radio"
                    name="gender"
                    id ="radio1"
                    value="Male"
                    onChange = { (e) => onInputChange(e)}
                />
                 <label class="form-check-label">
                    Male
                </label>
                 <input
                    type="radio"
                    name="gender"
                    id ="radio1"
                    value="Female"
                    onChange = { (e) => onInputChange(e)}
                />
                <label class="form-check-label" >
                    Female
                </label>
            </Form.Group>
            <Form.Group>
            <div>Hobbies</div>

                <Form.Control
                    type="hobbies"
                    name="hobbies"
                    value={hobbies}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                ADD USER
            </Button>
        </Form>

     )
}

export default AddForm;