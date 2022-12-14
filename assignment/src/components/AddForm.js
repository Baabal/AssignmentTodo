import { Form, Button } from "react-bootstrap"
import {UserContext} from '../contexts/UserContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addUser} = useContext(UserContext);
    const [newUser, setNewUser] = useState({
        fname:"", lname:"", gender:"", hobbies:[]
    });

    const onChangeHobby = (e) =>{

        const { name, value, checked } = e.target;
        const {hobbies} = newUser;
        if (checked)
        {
            hobbies.push(value);
        }
        else{
            const index = hobbies.indexOf(value)
            hobbies.splice(index,1);
        }
        setNewUser({...newUser,[name]: hobbies})
    }

    const onInputChange = (e) => {
        console.log(e.target.name,e.target.value );
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }
    const checkList = [" Singing", " Cricket", " Guitar", " Dancing"]; 
    const {fname, lname, gender, hobbies} = newUser;
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const {fname, lname, gender, hobbies} = newUser;
        console.log("hobbies", hobbies);
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
                </label><br/>
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

               {/* // <Form.Control
                    // type="hobbies"
                    // name="hobbies"
                    // value={hobbies}
                    // onChange = { (e) => onInputChange(e)}
                    
                /> */}
              
                {checkList.map((item, index) => (
                        <div key={index}>
                            <input name="hobbies" value={item} type="checkbox"
                            onChange = {onChangeHobby}/>
                            <span>{item}</span>
                            
                        </div>
                        ))}
               
            </Form.Group>
            <button type="button" class="btn btn-secondary btn-lg btn-block"  block onClick={handleSubmit}>
                ADD USER
            </button>
        </Form>

     )
}

export default AddForm;