import React, { useState, useRef } from "react";
import { useBasket } from "../../contexts/BasketContext";
import {
  Alert,
  Button,
  Link,
  Image,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { postOrder } from "../../api";
function Basket() {
  const [address, setAddress] = useState("");
  const { items, removeFromBasket, emptyBasket } = useBasket();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  // siparişin oluşturulması
  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id);

    const input = {
      address,
      items: JSON.stringify(itemIds),
    };

    await postOrder(input);
    emptyBasket();
    onClose();
    console.log(input);
  };
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

          <Button colorScheme="green" size="sm" onClick={onOpen}>
            Order
          </Button>

          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Basket;
