import axios from "axios";
import React from "react";
import { useState } from "react";
import { create } from "yup/lib/Reference";

const Create = () => {
    const user = {
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
    }
    const [newUser, setNewUser] = useState({ user });


    const handleChange = (e) => {
        setNewUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const BASE_URL = "https://nodejs-express-mongodb-backend-crud.onrender.com"

    const handleClick = async e => {
        e.preventDefault()
        try {
            axios.post(`${BASE_URL}/home/user/register`,
                        
            newUser)
            console.log(newUser);
        } catch (error) {

        }
    }


    return (
        <div style={{ marginTop: "100px" }}>
            <form style={{
                marign: "auto",
                padding: "15px", maxWidth: "400px", alignContent: "center"
            }}>
                <h1>Add Employee</h1>
                <input type="" placeholder="first_name" onChange={handleChange} name="firstname" />
                <input type="" placeholder="last_name" onChange={handleChange} name="lastname" />
                <input type="" placeholder="email_id" onChange={handleChange} name="email" />
                <input type="" placeholder="phone" onChange={handleChange} name="phone" />

                <button onClick={handleClick}>Add</button>


            </form>



        </div>
    );
}
export default Create;