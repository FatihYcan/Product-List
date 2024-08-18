// const ProductCard = ({ item }) => {
//   const { price, title, image } = item;
//   return (
//     <div>
//       <div>
//         <h3>{price}</h3>
//       </div>
//       <img src={image} alt={title} width="150px" />
//       <div>
//         <h2>{title}</h2>
//       </div>
//     </div>
//   );
// };
// export default ProductCard;

// ProductCard.jsx

const ProductCard = ({ price, image, title }) => {
  return (
    <div className="card">
      <div className="price">
        <h3>{price} $</h3>
      </div>
      <img src={image} alt={title} />
      <div className="card__over">
        <h2>{title}</h2>
      </div>
    </div>
  );
};
export default ProductCard;
