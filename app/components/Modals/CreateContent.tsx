"use client"

import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function CreateContent() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false); 

    const handleChange = (name: string) => (e: any) => {
        switch (name) {
            case "title":
                setTitle(e.target.value);
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "date":
                setDate(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "important":
                setImportant(e.target.checked);
                break;
            default: 
            break;
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date: new Date(date).toISOString(), 
            completed,
            important,
        };

        try {
            const res = await axios.post("/api/tasks", task)
            if (res.data.error) {
                toast.error(res.data.error);
            }
            toast.success("Task got creted successfully");
        } catch (error) {
            toast.error("Something went wrong.");
            console.log("Error:", error);
        }
    }

    return <form onSubmit={handleSubmit}>
        <h1>Create a Task</h1>
        <div className="input-control">	
            <label htmlFor="title">Title</label>
            <input type='text' 
                    id='title' 
                    value={title} 
                    name='title' 
                    onChange={handleChange("title")}
                    placeholder='Make a coffee'
                />
        </div>

        <div className="input-control">	
            <label htmlFor="description">Description</label>
            <textarea
                    id='description' 
                    value={description} 
                    name='description' 
                    onChange={handleChange("description")}
                    placeholder='Brew water and mix'
            ></textarea>
        </div>

        <div className="input-control">	
            <label htmlFor="date">Date</label>
            <input  type='date'
                    id='date' 
                    value={date} 
                    name='date' 
                    onChange={handleChange("date")}
            />
        </div>

        <div className="input-control">	
            <label htmlFor="completed">Completed</label>
            <input  type='checkbox'
                    id='completed' 
                    checked={completed}
                    
                    name='completed'
                    onChange={handleChange("completed")}
            />
        </div>

        <div className="input-control">	
            <label htmlFor="important">Important</label>
            <input  type='checkbox'
                    id='important' 
                    checked={important}
                    name='important' 
                    onChange={handleChange("important")}
            />
        </div>

        <div className="submit-btn">
            <button type="submit">Add Task</button>
        </div>
    </form>

}

export default CreateContent