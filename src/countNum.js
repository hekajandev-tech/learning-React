import React,{useState,useEffect} from "react";


export default function Count(){
    var [num,setNum] = useState(0);
    
    const cbtn = React.createElement(
        "button",
        {
            className:'cbtn',
            onClick:() => setNum(num + 1)
        },
        "Click here to count!"
    )

    return(
        <>
            {cbtn}
            <h5>The Count is: {num} </h5>
        </>
    );
}