export default function MsgBox({UserName,TextColor})
{
    let styles = {color:TextColor};
    return (
<h1 style = {{color:TextColor}}>Hello,{UserName}</h1>
        
    );
}