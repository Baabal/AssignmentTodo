import {useContext, useState, useEffect} from 'react';
import {UserContext} from '../contexts/UserContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm'



const User = ({user}) => {

    const {deleteUser} = useContext(UserContext)

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [user])

    return (
        <>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.gender}</td>
            <td>{user.hobbies.join(",")}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Edit
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Delete
                        </Tooltip>
                    }>
                    <button onClick={() => deleteUser(user.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>
                
                
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                EDIT USER
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theUser={user} />
        </Modal.Body>        
    </Modal>
        </>
    )
}

export default User;