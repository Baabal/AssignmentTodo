import { Modal, Button, Alert } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import User from './User';
import AddForm from './AddForm';

const UserList = () => {

    const { sortedUsers } = useContext(UserContext);


    const [show, setShow] = useState(false);
    const [allShow, setAllShow] = useState(false);


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleAllShow = () => setAllShow(true);
    const handleAllClose = () => setAllShow(false);



    useEffect(() => {
        handleClose();
        handleAllClose();
    }, [sortedUsers])


    const logout = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <div className="Heading">
                <Button onClick={handleShow} data-toggle="modal"><span>ADD USER</span></Button>

            </div>

            <div className="Heading">
                <h2>ALL USER</h2>
            </div>


            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedUsers.map(user => (
                            <tr key={user.id}>
                                <User user={user} />
                            </tr>
                        ))
                    }

                </tbody>
            </table>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        ADD USER
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
            </Modal>
            <div className="Heading">
            <Button onClick={logout}  data-toggle="modal"><span>logout</span></Button>					

            </div>
        </>
    )
}

export default UserList;