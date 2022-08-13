import { useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: 0,
    category: "",
    tags: [],
    images: {
      sm: "",
      md: "",
      lg: "",
    },
    quantity: 0,
  });

  // useReducer for complex data shape

  return (
    <div>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Price" />
        <input type="number" placeholder="Price" />
        <p>Category</p>
        <select name="cars" id="cars">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">Sneakers</option>
          <option value="jeans">Sneakers</option>
        </select>
        <p>Tags</p>
        <textarea placeholder="Seperate tags with commas..."></textarea>
        <div className="quantity">
          <button>-</button>
          <span>Quantity ({product.quantity})</span>
          <button>+</button>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
