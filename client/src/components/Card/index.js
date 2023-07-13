import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import moment from "moment";
function Card({ product }) {
  return (
    <Box borderWidth="3px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={"#/"}>
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
      <Button colorScheme="pink">Add to Basket</Button>
    </Box>
  );
}

export default Card;
