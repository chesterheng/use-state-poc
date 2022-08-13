import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "black sneakers",
      quantity: 1,
    },
    { id: 2, title: "red t-shirt", quantity: 1 },
    { id: 3, title: "blue jeans", quantity: 1 },
  ]);

  // if one state affect another one, just store its id
  // do not create a new object
  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = products.find((p) => p.id === selectedId);

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    });
  };

  const handleChoose = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <h4>All products</h4>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)}>Choose</button>
          </span>
          <div className="quantity">
            <button>-</button>
            <span>Quantity ({product.quantity})</span>
            <button onClick={() => increment(product.id)}>+</button>
          </div>
        </div>
      ))}
      <h4>Selected Product</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  );
}

export default App;
