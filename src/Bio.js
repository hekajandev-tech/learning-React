import React from "react";

export default function BioData(){
    const fname = "Kanagarajah";
    const lname = "Karthik";
    //creating a button
    const welbtn = React.createElement(
            "button",
            {
                class: 'welbtn',
                onClick: () => alert(`Welcome ${fname} ${lname} `)
            },

            "Click Here"
        )
    return(
        <div>
            {welbtn}
        </div>
    );
}