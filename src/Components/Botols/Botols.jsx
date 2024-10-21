import { useEffect } from "react";
import { useState } from "react";
import Botol from "../Botol/Botol";
import "./botols.css";
import {
  addToLocalStorage,
  getStoreCartItem,
} from "../../utilities/localstorage";

const Botols = () => {
  const [botols, setBotols] = useState([]);
  const [shoping, setShoping] = useState([]);

  useEffect(() => {
    fetch("botols.json")
      .then((res) => res.json())
      .then((data) => setBotols(data));
    // .then((data) => console.log(data.length));
  }, []);

  useEffect(() => {
    // console.log(botols.length);
    if (botols.length > 0) {
      const storeCart = getStoreCartItem();

      const storeBotolId = [];
      // console.log(storeCart, botols);
      for (const botolId of storeCart) {
        console.log(botolId);
        const botol = botols.find((botol) => botol.id === botolId);
        // console.log(botol);
        if (botol) {
          // botol.push(storeBotolId);
          storeBotolId.push(botol);
        }
      }
      setShoping(storeBotolId);
    }
  }, [botols]);

  const addToShopingCart = (botol) => {
    // setShoping("add to cart");
    const newShoping = [...shoping, botol];
    console.log(newShoping);
    setShoping(newShoping);
    addToLocalStorage(botol.id);
  };

  return (
    <div>
      <h1>Amar Pani Khawar Botols :{botols.length}</h1>
      <h2>My All Available Botols Here</h2>
      <span>Shoping Cart: {shoping.length}</span>
      <div className="botol-container">
        {botols.map((botol) => (
          <Botol
            addToShopingCart={addToShopingCart}
            key={botol.id}
            botol={botol}
          ></Botol>
        ))}
      </div>
    </div>
  );
};

export default Botols;
