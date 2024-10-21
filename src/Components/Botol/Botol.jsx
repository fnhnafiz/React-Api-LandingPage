import "./Botol.css";
const Botol = ({ botol, addToShopingCart }) => {
  // console.log(addToShopingCart);
  const { name, price, img } = botol;
  return (
    <div className="border">
      <h3>{name}</h3>
      <img src={img} alt="" />
      <p>
        <small className="bold">${price}</small>
      </p>
      <button onClick={() => addToShopingCart(botol)}>Buy Now</button>
    </div>
  );
};

export default Botol;
