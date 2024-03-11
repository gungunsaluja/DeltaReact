import Product from "./Product.jsx";
function ProductTab(){
    // let options = [<li>hi-tech</li>,<li>durable</li>,<li>fast</li>]; This could be a way to represent the list items
    // let options = ["hi-tech" , "durable" , "fast"];
    // let options2 = {a:"hi-tech",b:"durable",c:"fast"};
    let styles = {
    display:"flex",
    flexwrap:"wrap",
    justifyContent :"center",
    alignItems :"center",


    };
    return (

        <div style = {styles}>
            
        <Product title ="Logitech MX Master" idx = {0}/>

         <Product title = "Apple Pencil (2nd gen)" idx = {1} />

        <Product title = "Zebronic Zeb-transformer" idx = {2}/>
        <Product title ="Petronice Toad 23" idx = {3} /> 

        </div>
        );
}
export default ProductTab;