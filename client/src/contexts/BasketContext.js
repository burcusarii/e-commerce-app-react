import { useState, createContext, useContext } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setItems((prev) => [...prev, data]);
    }

    // tıklanan ürünün id'sine eşit olmayan bütün ürünler.
    const filtered = items.filter((item) => item._id !== findBasketItem._id);
    setItems(filtered);
  };

  const removeFromBasket = (item_id) => {
    const filtered = items.filter((item) => item._id !== item_id);
    setItems(filtered);
  };

  const emptyBasket = () => {
    setItems([]);
  };
  console.log("items", items);

  const values = {
    items,
    setItems,
    addToBasket,
    removeFromBasket,
    emptyBasket,
  };
  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
