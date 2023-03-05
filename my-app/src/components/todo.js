// eslint-disable-next-line
import React, {useState} from "react";

const Todo = () => {
    const [name,setName] = useState('Rushanika');
    return (
        <>
           Name:{name}
        </>
    
   )
}

export default Todo;