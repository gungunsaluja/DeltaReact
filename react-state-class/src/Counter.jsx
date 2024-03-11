import { useState } from "react";
export default function Counter()
{
//   let [stateVariable, setStateVaribale] = useState(10);
  let [count ,setCount] = useState(0);
//   console.log(arr);
let inCount = () => {
    // count = count +1;
    setCount(count+1);
    // console.log(count);
};

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick ={inCount}>Increase Count</button>
        </div>
    )
}