function handleClick(event){
    console.log("Hello!! ");
    console.log(event);

}
function handleDoubleClick(){
    console.log("Double Click ME!!");
}

function handleMouseOver(){
    console.log("bye!!");

}
export default function Button() {
    return (
    <div>
        <button onClick = {handleClick}>Click Me!!</button>
        <p onMouseOver = {handleMouseOver}>hello fdbfhbsdhsbfjbsdjfdsbhjbsdbjsdh sjd sjfgfyuergffjbjhhguhrhgnjmy nanerjrnh udisiishguerihjnjsdnfsn
        fhfuhdhfus</p>
        <button onDoubleClick={handleDoubleClick}>DOUBLE CLICK  </button>
        </div>
    )
}