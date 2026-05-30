import React,{useState,useEffect} from "react";

export default function UpdateTime(){
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const timer = setInterval(() =>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return() => clearInterval(timer);
    }, []);

    return(
        <>
            <h1>Welcome to the React Timezone</h1>
            <p>Current Time: {time}</p>
        </>
    )
}