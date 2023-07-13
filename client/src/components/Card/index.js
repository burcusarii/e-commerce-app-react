import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Box borderWidth="3px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={"#/"}>
        <Image src="https://picsum.photos/400/200" alt="product"></Image>

        <Box p="3">
          <Box d="plex" alignItems="baseline">
            13/07/2023
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Macbook Pro
          </Box>
          <Box>100TL</Box>
        </Box>
      </Link>
      <Button colorScheme="pink">Add to Basket</Button>
    </Box>
  );
}

export default Card;
