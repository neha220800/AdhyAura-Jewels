import React, {useState} from 'react';
import { useApp } from '../context/AppContext';
export default function Admin() {
   const { products, setProducts } = useApp();
  const [productName, setProductName] = useState("");
  const[price, setPrice]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //handle product submission logic here
    console.log({
      productName,
      price,
    });
    const newProduct = {
  id: Date.now(),
  name: productName,
  price: price,
};

setProducts([...products, newProduct]);

    alert(`product ${productName} added with  price ${price}`);
    setProductName("");
    setPrice("");
  };

  return (
   <div className="max-w-6xl mx-auto p-8 pt-32">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>
       <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">
        <h3>Total Products</h3>
       <p className="text-2xl font-bold">
      {products.length}
        </p>
     </div>

     <div className="bg-white p-4 rounded shadow">
    <h3>Orders</h3>
      <p className="text-2xl font-bold">0</p>
     </div>

      <div className="bg-white p-4 rounded shadow">
           <h3>Revenue</h3>
         <p className="text-2xl font-bold">₹0</p>
      </div>
     </div>
        <form
        onSubmit={handleSubmit}
           className="bg-white shadow-md rounded-lg p-6"
         >
      {/* <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Product Management
        </h2> */}
           <h2 className="text-xl font-semibold mb-4">
          Add Product
        </h2>
         <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 w-full mb-4"
        />
         <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full mb-4"
        />
         
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Save Product
        </button>

        <div className="mt-8">
           <h2 className="text-2xl font-bold mb-4">
              Product List
             </h2>

 {products.map((product) => (
  <div
    key={product.id}
    className="border p-4 mb-2 rounded flex justify-between items-center"
  >
    <div>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
    </div>

    <button
      onClick={() =>
        setProducts(
          products.filter((p) => p.id !== product.id)
        )
      }
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  </div>
   ))}
 </div>
      </form>

      </div>
  );
}