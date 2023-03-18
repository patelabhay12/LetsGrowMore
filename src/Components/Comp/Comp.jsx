import React, { useState } from 'react';
import './comp.css';
// import { BsFillPlusCircleFill } from 'react-icons/bs';
import ToDoList from '../ToDolist/ToDoList';


const Comp = () => {

    const [item, setitem] = useState('');
    const [Items, setItems] = useState([]);
    // const [select, setSelect] = useState();
    const getItem = (e) => {
        setitem(e.target.value);
    }

    const ListOfItem = () => {
        setItems((olditem) => {
            return [...olditem, item];
        });
        setitem("");
    }

    const deleteItems = (id) => {
        console.log("Item Deleted")
        setItems((olditem) => {
            return olditem.filter((arrElem, index) => {
                return index !== id;
            });
        });

    }


    return (
        <div className='body'>
            <div className="header">
                <div className="heading">
                    <h1>My To Do List</h1>
                </div>
                <div className="input_part">
                    <div className='input'>
                        <input type="text" placeholder='Add a items'
                            value={item} onChange={getItem} />
                    </div>
                    <button className='icon' onClick={ListOfItem}>Add</button>
                    {/* <BsFillPlusCircleFill className='icon' onClick={ListOfItem} /> */}
                </div>
            </div>
            <div className="content">

                <div className="items_list">
                    <ol>
                        {
                            Items.map((aritem, index) => {
                                return (
                                    <ToDoList onSelect={deleteItems} id={index} text={aritem} />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Comp;