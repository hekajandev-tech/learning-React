import React, { useState, useEffect } from "react";

export default function ReactList() {
    // const lst =['App' , 'Mobile','web','mern'];

    const users = [
        { id: 1, name: 'Geeks', age: 30 },
        { id: 2, name: 'for', age: 25 },
        { id: 3, name: 'Geeks', age: 20 },




    ]
    return (
        <div>
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
            

            <ul>
                {users.map((user)=>(
                    user.age > 25 ? (
                        <li key={user.id}>{user.name} is a senior developer</li>
                    ) : (
                        <li key={user.id}>{user.name} is a unior </li>
                    )
                ))}
            </ul>
        </div>
    );

}