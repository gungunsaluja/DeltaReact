import "./Product.css";

function Product({ title, price ,features }){
    let isDiscount = price>30000;
    
    let styles = {backgroundColor: isDiscount?"pink":""};
        return(
            <div className = "Product"style ={styles} >
                <h3  >{title}</h3>
                <h5 >price : {price}</h5>
                {/* <p>Discount of 5%</p> */}
                {/* <p>{isDiscount}</p> */}
                {isDiscount? <p>"Discount of 5%"</p> :<a href = "/">Get Discount</a>}
                {/* <p>{list}</p> */}
                {/* <p>{features2.b}</p> */}
                 
            </div>
        );

   
    // else{
    //     return(
    //         <div className = "Product">
    //             <h3>{title}</h3>
    //             <h5>price : {price}</h5>
    //             {/* <p>Discount of 5%</p> */}
    //             {/* <p>{list}</p> */}
    //             {/* <p>{features2.b}</p> */}
                 
    //         </div>
    //     );
    // }
    //  const list = features.map((feature) => <li>{feature}</li>);
   
}
export default Product;
