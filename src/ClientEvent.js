import React, { useState, useEffect } from "react";

export default function ClientEvent() {
    const Company = ["Geeks", "For", "Geeks"];
    const [name , setName] = useState("");
    const handleClick = (Company) => {
        //Method 01
        // document.getElementById("heading").innerHTML = `This is ${Company}`;

        //Method02
        setName(`This is ${Company}`);
    };

    return (
        <>
            <div>
                <ul>
                    {Company.map((Company, index) => (
                        <button key={index} onClick={() =>
                            handleClick(Company)
                        }>
                            {Company}
                        </button>
                    ))}
                </ul>
            </div>
            <div>
                {/* Method01 */}
                {/* <p id="heading"></p> */}

                {/* Method02 */}
                <p>{name}</p>
            </div>
        </>
    )
}