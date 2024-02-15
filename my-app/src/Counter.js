import {useState} from 'react';
import Hello from './Hello'
export default function Counter(){
    const [show,setShow] = useState(true);
    return(
        <>
        {show? <h1>hello world</h1>:<Hello/>}
        <button onClick={()=>{setShow(!show)}}> Toggle</button>
        </>
    )
}