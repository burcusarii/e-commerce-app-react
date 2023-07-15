import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import moment from "moment";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["products", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const images = data.photos.map((url) => ({ original: url, thumbnail: url }));

  console.log("images", images);
  console.log("data", data);
  return (
    <div>
      <Button colorScheme="blue">Add to baset</Button>
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
