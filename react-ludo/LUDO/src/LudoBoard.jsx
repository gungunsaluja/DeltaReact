import { useState } from "react";
export default function LudoBoard()
{
    let [moves, setMoves] = useState({blue:0, red:0, yellow:0, green:0});
    // let [count,setCount] = userState(0);
    let updateBlue = () => {
        // moves.blue +=1;
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves)=>
        {
           return {...prevMoves, blue : moves.blue +1}});
    }

    let updateYellow = () => {
        // moves.blue +=1;
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves)=>
        {
           return {...prevMoves, yellow : moves.yellow +1}});
    }
    return(<div>
        <p>Gaming Begins!</p>
        <div className = "board">
            <p>Blue Moves = {moves.blue}</p>
            <button style = {{backgroundColor:"blue "}} onClick={updateBlue}>+1</button>
            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}}onClick = {updateYellow}>+1</button>
            <p>Green Moves = {moves.green}</p>
            <button style = {{backgroundColor:"green "}}>+1</button>
            <p>Red Moves = {moves.red}</p>
            <button style = {{backgroundColor:"red"}}>+1</button>
        </div>
    </div>);
}