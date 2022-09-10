import {createContext, useEffect, useState} from 'react';
  import { v4 as uuidv4 } from 'uuid';

export const UserContext = createContext()

const UserContextProvider  = (props) => {

    const [users, setUsers] = useState([])

useEffect(()=> {

    setUsers(JSON.parse(localStorage.getItem('users')))
},[])

useEffect(() => {

    localStorage.setItem('users', JSON.stringify(users));

})

const sortedUsers = users;

const addUser = (fname, lname, gender, hobbies) => {
    setUsers([...users , {id:uuidv4(), fname, lname, gender, hobbies}])
}

const deleteUser = (id) => {

    setUsers(users.filter(user => user.id !== id))
}

const updateUser = (id, updatedUser) => {

    setUsers(users.map((user) => user.id === id ? updatedUser : user))
}

    return (
        <UserContext.Provider value={{sortedUsers, addUser, deleteUser, updateUser}}>

            {props.children}
            
        </UserContext.Provider>
    )
}

export default UserContextProvider;