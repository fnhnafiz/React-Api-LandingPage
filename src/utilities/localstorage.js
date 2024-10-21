const getStoreCartItem = () => {
  const savedShopingCartInLocalStorage = localStorage.getItem("Shoping");
  if (savedShopingCartInLocalStorage) {
    return JSON.parse(savedShopingCartInLocalStorage);
  }
  return [];
};

const savedShopingCart = (cart) => {
  const str = JSON.stringify(cart);
  localStorage.setItem("Shoping", str);
};

const addToLocalStorage = (id) => {
  const shopingCart = getStoreCartItem();
  shopingCart.push(id);

  //   Store to Local Storage
  savedShopingCart(shopingCart);
};

export { addToLocalStorage, getStoreCartItem };
