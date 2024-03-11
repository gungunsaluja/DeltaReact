function handleFormSubmit()
{
    // event.preventDefault();
    console.log("Form was submitted");
}


export default function Form()
{
    return (
        <form onSubmit = {handleFormSubmit}>
            <input placeholder = "write something"/>
            <button onClick = {handleFormSubmit}>Submit</button>
        </form>
    );
}