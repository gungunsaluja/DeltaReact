import "./Product.css";
import Price from "./Price";

function Product({ title , idx }) {
  // let isDiscount = price > 30000;
  let oldPrices = ["12,496","1190","1,599","599"];
  let newPrices = ["8,999","9,1999","899","278"];
  let Description = [["8000DPI sura","Prgrammable bottons"],
  ["intuitive surface","Designed for ipad "],
  ["designed for ipad Pro","intuitiive surface"],
  ["wirelesschar 67","optical orientation"],];

  // let styles = { backgroundColor: isDiscount ? "pink" : "" };
  return (
    <div className="Product">
      <h4>{title}</h4>
      {/* <h3>{title}</h3>
      <h5>price : {price}</h5>
      {/* <p>Discount of 5%</p> */}
      {/* <p>{isDiscount}</p> */}
      {/* {isDiscount ? <p>"Discount of 5%"</p> : <a href="/">Get Discount</a>} */}
      {/* <p>{list}</p> */}
      {/* <p>{features2.b}</p>  */}
      {/* <p>Title</p> */}
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
      {/* <p>Price</p> */}
      {/* <p>Product</p> */}
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
