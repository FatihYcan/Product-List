// const Header = (props) => {
//   const { categories, text } = props;
//   return <h1>Header</h1>;
// };
// export default Header;


// Header.jsx

import HeaderStyle from "./Header.module.scss";

const Header = ({ categories, text }) => {
  return (
    <div className={HeaderStyle.header}>
      <h1>{text}</h1>
      <div className={HeaderStyle.btns}>
        {categories.map((i) => (
          <button key={i}>{i}</button>
        ))}
      </div>
    </div>
  );
};
export default Header;
