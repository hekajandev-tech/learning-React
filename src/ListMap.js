// import React, { useState, useEffect } from "react";
//importing external stylesheet
import './mystyles.css';
//importing module.css
import mystyles from './modules/mystyle.module.css';

export default function ReactList() {
    // const lst =['App' , 'Mobile','web','mern'];

    const users = [
        { id: 1, name: 'Geeks', age: 30 },
        { id: 2, name: 'for', age: 25 },
        { id: 3, name: 'Geeks', age: 20 },
    ]

    //internal styles of React
    const mystyle = {
        color: 'red ',
        fontFamily: 'serif',
        textAlign: 'center',
        fontSize: '20px'
    }

    const lables = {
        color: 'green',
        fontFamily: 'serif',
        textAlign: 'center',
        fontSize: '15px'
    }


    return (
        <div>
            <h1 style={{ color: 'blue' }}>Table</h1>
            <h1 style={mystyle}>Table</h1>

            {/* Name */}
            <lable style={lables}>Enter your Name: </lable>
            <input type="text" name="username" />
            <br /><br />

            <div className={mystyles.mycls}>
                <table border='1' cellSpacing={1} cellPadding={10}>

                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>

                    {users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}


                </table>
            </div>

            <ul>
                {users.map((user) => (
                    user.age > 25 ? (
                        <li key={user.id}>{user.name} is a senior developer</li>
                    ) : (
                        <li key={user.id}>{user.name} is a unior developer </li>
                    )
                ))}
            </ul>
        </div>
    );

}