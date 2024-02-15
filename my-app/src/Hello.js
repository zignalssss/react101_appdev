import './Hello.css';
import React ,{ useState } from 'react';
const Hello = () =>{
    const [count , setCount ] = useState(0);
    // const name = "Wiritipon Thapkhan"
    return(
        <>
            
            <h1>Hello World,</h1>
            <button onClick={() =>{setCount(count + 1)}}>Click</button>
            <button onClick={() =>{setCount(0)}}>Reset</button>
            <p>Click {count} times</p>
        </>
    );
}
export default Hello;