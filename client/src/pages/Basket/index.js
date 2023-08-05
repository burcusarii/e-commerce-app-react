import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import { Alert, Button, Link, Image, Box, Text } from "@chakra-ui/react";
function Basket() {
  const { items, removeFromBasket } = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <div>
      {items.length < 1 && (
        <Alert status="warning"> You have not any items in your basket</Alert>
      )}

      {items.length > 0 && (
        <>
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                <Link to={`/product/${item._id}`}>
                  {item.title} - {item.price} TL
                  <Image
                    htmlWidth={200}
                    src={item.photos[0]}
                    alt="basket item"
                  ></Image>
                </Link>

                <Button
                  colorScheme="red"
                  mt="2"
                  mb="4"
                  onClick={() => removeFromBasket(item._id)}
                >
                  Remove from Basket
                </Button>
              </li>
            ))}
          </ul>
          <Box>
            <Text> Total Price: {total} TL</Text>
          </Box>
        </>
      )}
    </div>
  );
}

export default Basket;
