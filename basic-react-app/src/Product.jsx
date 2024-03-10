import "./Product.css";

function Product({title,price,features,features2}){
    
     
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>price:{price}</h5>
            <p>{features.a}</p>
            {/* <p>{features2.b}</p> */}
             
        </div>
    );
}
export default Product;
