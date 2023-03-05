// eslint-disable-next-line
import React, {useState} from "react";

const Todo = () => {
    const [name,setName] = useState('');

    const changeName =(value) => {
       setName(value);
    }

    return (
        <>
        <input type="text" placeholder="Enter your name" value={name} onChange= {(event) => changeName(event.target.value)}/>
        <br/>
           Name:{name}
        </>
    
   )
}

export default Todo;