import { Box, Flex, Text } from "@chakra-ui/react";
import { v4 } from "uuid";
import { useAppSelector } from "../store";
import ProductCard from "./ProductCard";

const Products = () => {
  const { isLoading, products } = useAppSelector((state) => state.product);

  if (isLoading) {
    return (
      <Text
        fontSize="30px"
        textAlign="center"
        fontWeight="600"
        mt="40px"
        color="disecto.secondary"
      >
        Loading...
      </Text>
    );
  }

  const productList = products.map((el) => (
    <ProductCard key={v4()} data={el} />
  ));
  return (
    <Box>
      <Text
        color="disecto.secondary"
        fontSize="40px"
        textAlign="center"
        fontWeight="600"
        m="40px auto 20px"
      >
        Our Products
      </Text>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {productList}
        {/* dummy for good alignment :) */}
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default Products;
