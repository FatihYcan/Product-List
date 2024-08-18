import ProductCard from "./ProductCard";
import "./Products.scss";

// ProductList.jsx

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}
      {products.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
};
export default ProductsList;

// const ProductsList = ({ products }) => {
//   return (
//     <div className="products-list">
{
  /* //! destructuring yapmadan kullanma
      {products.map((i) => (
        <div key={i.id}>
          <div>
            <h3>{i.price}</h3>
          </div>
          <img src={i.image} alt={i.title} width="150px" />
          <div>
            <h2>{i.title}</h2>
          </div>
        </div>
      ))} */
}
{
  /* //! map in içinde destructuring etme
      {products.map((i) => {
        const { id, price, image, title } = i;
        return (
          <div key={id}>
            <div>
              <h3>{price}</h3>
            </div>
            <img src={image} alt={title} width="150px" />
            <div>
              <h2>{title}</h2>
            </div>
          </div>
        );
      })} */
}
{
  /* //! map e ait olan callback parametresinde destructuring
      {products.map(({ id, price, image, title }) => (
        <div key={id}>
          <div>
            <h3>{price}</h3>
          </div>
          <img src={image} alt={title} width="150px" />
          <div>
            <h2>{title}</h2>
          </div>
        </div>
      ))} */
}

{
  /* //! Buradan açmadan gönderip alt componentte karşılayıp içini açma
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))} */
}
