import React,{useState,useEffect} from "react";


export default function Timer(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const countTimer = setInterval(()=>{
            setCount(count => count + 1);
        }, 1000);
        return() => clearInterval(countTimer);
    }, []);

    return(
        <>
            <h4>Timer: {count} </h4>
        </>
    )
}