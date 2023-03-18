import React from 'react'
import './todo.css';
import { RxCrossCircled } from 'react-icons/rx';

const ToDoList = (props) => {
    return (
        <div className="contents" >
            <RxCrossCircled className='icon' onClick={() => {
                props.onSelect(props.id);
            }}/>
            <li > {props.text}</li>
        </div>
    ) 
}

export default ToDoList;