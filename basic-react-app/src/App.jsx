import "./App.css"
//import

import {Title} from "./title.jsx";
import ProductTab from "./ProductTab.jsx";

import MsgBox from "./MsgBox";
function App(){
  return (
  <>
  <MsgBox UserName= "Gungun" TextColor= "orange"/>
  <MsgBox UserName= "Virat" TextColor= "brown"/>
  <MsgBox UserName= "Vamika" TextColor= "red"/>
  <ProductTab/>
  {/* // structure components */}
  </>
  );
}



export default App
// node modules me hmari sari node dependies hai
// filhal public me sirf image store hai
// 