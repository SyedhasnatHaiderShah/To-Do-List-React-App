import React, { useState } from 'react';
import './ToDoList.css'; // Optional: Import a CSS file for styling


const ToDoList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleInputChange = (e) => {
        setNewItem(e.target.value);
    };

    const addItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    const deleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newItem}
                onChange={handleInputChange}
                placeholder="Add a new item"
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button className="delete-button" onClick={() => deleteItem(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
