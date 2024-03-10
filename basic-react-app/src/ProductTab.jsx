import Product from "./Product.jsx";
function ProductTab(){
    let options = ["hi-tech","durable","fast"];
    // let options2 = {a:"hi-tech",b:"durable",c:"fast"};
    return (
        <>
        <Product title = "phone" price = {3000} features ={{a:"hi-tech"}} />
         {/* <Product title = "laptop" price = {45000} />
        <Product title = "Pen" price = {87000}/> */}
        </>
        );
}
export default ProductTab;