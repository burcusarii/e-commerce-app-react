import React from "react";
import { fetchOrders } from "../../../api";
import { useQuery } from "react-query";
import {
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  TableCaption,
  Center,
  TableContainer,
} from "@chakra-ui/react";

function Orders() {
  const { isLoading, isError, error, data } = useQuery(
    "admin:order",
    fetchOrders
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  console.log(data);
  return (
    <div>
      <Center h="100px">
        <Text fontSize="2xl">Orders</Text>
      </Center>
      <Table>
        <TableCaption>You can see all orders in here</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th isNumeric>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item._id}>
              <Td>{item.user.email}</Td>
              <Td>{item.adress}</Td>
              <Td isNumeric>{item.items.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
