import "./CartWidget.css"
import { BsFillCartCheckFill } from "react-icons/bs";
export const CartWidget = () => {
  return (
    <div className="container-cart">
      <BsFillCartCheckFill size={50}/>
      <h4>15</h4>
    </div>
  );
};