import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import moment from "moment";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../contexts/BasketContext";

function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, items } = useBasket();
  const { isLoading, isError, data } = useQuery(["products", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const findBasketItem = items.find((item) => item._id === product_id);
  console.log("finbasketıtem", findBasketItem);
  const images = data.photos.map((url) => ({ original: url, thumbnail: url }));

  return (
    <div>
      <Button
        colorScheme={findBasketItem ? "red" : "green"}
        onClick={() => addToBasket(data, findBasketItem)}
      >
        {findBasketItem ? "Remove from Basket" : "Add to Basket"}{" "}
      </Button>
      <Box>
        <Image src={data.photos[0]} width={"25%"}></Image>
        <Text>{data.description}</Text>
        <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
        <ImageGallery items={images} width={"50%"} />
      </Box>
    </div>
  );
}

export default ProductDetail;
