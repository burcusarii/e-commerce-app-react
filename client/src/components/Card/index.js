import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
import { useBasket } from "../../contexts/BasketContext";
function Card({ product }) {
  const { addToBasket, items } = useBasket();

  //ürünün id'si basket'ta olup olmadığı kontrol ediliyor. (bu id'li item varsa true dönecek)
  const findBasketItem = items.find((item) => item._id === product._id);

  return (
    <Box borderWidth="3px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${product._id}`}>
        <Image src={product.photos[0]} alt="product" loading="lazy"></Image>

        <Box p="3">
          <Box d="plex" alignItems="baseline">
            {moment(product.createdAt).format("DD/MM/YYYY")}{" "}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {product.title}
          </Box>
          <Box>{product.price} TL</Box>
        </Box>
      </Link>
      <Button
        colorScheme={findBasketItem ? "red" : "green"}
        onClick={() => addToBasket(product, findBasketItem)}
      >
        {findBasketItem ? "Remove from Basket" : "Add to Basket"}{" "}
      </Button>
    </Box>
  );
}

export default Card;
