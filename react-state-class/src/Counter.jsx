import { useState } from "react";


function init()
{
    console.log("init was executed")
    return Math.random();
}
export default function Counter()
{
//   let [stateVariable, setStateVaribale] = useState(10);
  let [count ,setCount] = useState(init()); //initailization code me bs yahi ek bar run hogii varna sari har bar event hone par fir load hogii yani sarriii lines dobara see load hongi function ki value call karne par nhi render karne par final hoti hai
  console.log("Component is renderes")
//   console.log(arr);
// rerender sirf tabhi hoga jab hum har bar new value denge rerender tab nhi hoga jab hum value ko fix kar deteee hai
let inCount = () => {
    // count = count +1;

    // setCount((currval)=>{
    //    return currval+1}
    // );
    // setCount((currval)=>{
    //     return currval+1}
    // );
    // console.log(count);
    setCount(25);


};

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick ={inCount}>Increase Count</button>
        </div>
    )
}