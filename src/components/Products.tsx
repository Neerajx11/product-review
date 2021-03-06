import { Box, Flex, Text } from "@chakra-ui/react";
import { v4 } from "uuid";
import { useAppSelector } from "../store";
import Loader from "./Loader";
import ProductCard from "./ProductCard";

const Products = () => {
  const { isLoading, products } = useAppSelector((state) => state.product);

  if (isLoading) {
    return <Loader />;
  }

  const productList = products?.map((el) => (
    <ProductCard key={v4()} data={el} />
  ));
  return (
    <Box>
      <Text
        color="disecto.secondary"
        fontSize="40px"
        textAlign="center"
        fontWeight="600"
        m="60px auto 40px"
      >
        Our Products
      </Text>
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        {productList}
        {/* dummy for good alignment :) */}
        <Box width="20%" minW="270px" m="40px 20px"></Box>
        <Box width="20%" minW="270px" m="40px 20px"></Box>
        <Box width="20%" minW="270px" m="40px 20px"></Box>
        <Box width="20%" minW="270px" m="40px 20px"></Box>
      </Flex>
    </Box>
  );
};

export default Products;
