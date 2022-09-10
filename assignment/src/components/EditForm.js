import { Form, Button } from "react-bootstrap"

import {UserContext} from '../contexts/UserContext';
import {useContext, useState} from 'react';


const EditForm = ({theUser}) =>{

    const id = theUser.id;
    const checkList = [" Singing", " Cricket", " Guitar", " Dancing"]; 

    const [fname, setFName] = useState(theUser.fname);
    const [lname, setLName] = useState(theUser.lname);
    const [gender, setGender] = useState(theUser.gender);
    const [hobbies, setHobbies] = useState(theUser.hobbies);

    const {updateUser} = useContext(UserContext);

    const updatedUser = {id, fname, lname, gender, hobbies}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, updatedUser)
    }

    //  const hobbiesarray = [];
    //    if (hobbies.e.target.checked != null) {
    //    hobbiesarray.push(hobbies.e.target.checked.split(','));
    //  }
    
     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <div>First Name</div>

                <Form.Control
                    type="text"
                    placeholder="FName"
                    name="fname"
                    value={fname}
                    onChange={(e)=> setFName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
            <div>Last Name</div>

                <Form.Control
                    type="text"
                    placeholder="LName"
                    name="lname"
                    value={lname}
                    onChange={(e)=> setLName(e.target.value)}
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
                    onChange={(e)=> setGender(e.target.value)}
                />
                 <label class="form-check-label">
                    Male
                </label>
                 <input
                    type="radio"
                    name="gender"
                    id ="radio1"
                    value="Female"
                    onChange={(e)=> setGender(e.target.value)}
                />
                <label class="form-check-label" >
                    Female
                </label>
            </Form.Group>
            <Form.Group>
            <div>Hobbies</div>

            {checkList.map((item, index) => (
                        <div key={index}>
                            <input name="hobbies" value={item} type="checkbox"
                            // onChange = {onChangeHobby}
                            />
                            <span>{item}</span>
                            
                        </div>
                        ))}
                

            </Form.Group>
            <Button variant="success" type="submit" block>
                EDIT USER
            </Button>
        </Form>

     )
}

export default EditForm;