// App.js

// import Header from "./components/header/Header";
import ProductsList from "./components/products/ProductsList";
import { products, categories } from "./helper/data";
import "./App.scss";
import HeaderH from "./components/headerHam/HeaderH";

function App() {
  return (
    <div>
      {/* <Header categories={categories} text="Product List" /> */}
      <HeaderH categories={categories} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
