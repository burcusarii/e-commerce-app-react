import React from "react";
import { useQuery } from "react-query";
import { fetchProductList } from "../../../api";
import { Text } from "@chakra-ui/react";
import { Table } from "antd";
import { Link } from "react-router-dom";
function AdminProducts() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdat",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <Link to={`/admin/products/${record._id}`}>Edit</Link>
        </>
      ),
    },
  ];
  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  console.log(data);
  return (
    <div>
      {" "}
      <Text fontSize="2xl" p="5">
        Products
      </Text>{" "}
      <Table dataSource={data} columns={columns} rowKey={"_id"} />;
    </div>
  );
}

export default AdminProducts;
