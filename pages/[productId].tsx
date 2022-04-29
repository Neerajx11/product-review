import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";

import { v4 } from "uuid";

import Loader from "../src/components/Loader";
import Navbar from "../src/components/Navbar";
import Review from "../src/components/Review";

import { getProducts } from "../src/features/productSlice";
import { addReview } from "../src/features/reviewSlice";
import { useAppDispatch, useAppSelector } from "../src/store";

const ProductName = () => {
  const router = useRouter();
  const { productId }: any = router.query;

  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filterData = products?.filter((el) => el.id.toString() === productId);
  const data = filterData[0];

  const [inp, setInp] = useState("");
  const [err, setErr] = useState(false);

  const isEmpty = () => inp === "";

  const addReviewHandler = () => {
    if (isEmpty()) {
      setErr(true);
      return;
    }
    const id = v4();
    const payload = { id: data.id, review: { id, content: inp } };
    dispatch(addReview(payload));
    setInp("");
  };

  if (isLoading && products.length === 0) return <Loader />;

  return (
    <>
      <Head>
        <title>{filterData.length ? data.title : "Product page"}</title>
        <meta name="description" content="Something about the product" />
      </Head>
      <Navbar isSearchBar={false} />
      <Box mt={{ base: "40px", md: "90px" }}>
        {/* productDetail */}
        {filterData.length && (
          <Flex
            justifyContent="space-between"
            alignItems={{ base: "center", md: "start" }}
            flexDir={{ base: "column", md: "row" }}
          >
            <Box p="20px 40px" w={{ md: "40%" }} textAlign="center">
              <Image
                src={data.image}
                width="220px"
                height="250px"
                alt={data.title}
              />
            </Box>
            <Box p="20px 40px" w={{ md: "60%" }}>
              <Text
                fontSize={{ base: "18px", md: "28px" }}
                color="disecto.secondary"
                fontWeight="600"
                mb="30px"
              >
                {data.title}
              </Text>
              <Text
                fontSize={{ base: "18px", md: "25px" }}
                color="disecto.primary"
                fontWeight="600"
                mb="30px"
              >
                ${data.price}
              </Text>
              <Text fontSize="16px" mb="30px">
                {data.description}
              </Text>
            </Box>
          </Flex>
        )}
        {/* review */}
        <Box p="20px">
          <Text
            color="disecto.secondary"
            fontWeight="600"
            fontSize="25px"
            my="20px"
          >
            Enter Review
          </Text>
          <Textarea
            placeholder="Enter review"
            value={inp}
            onChange={(e) => {
              setErr(false);
              setInp(e.target.value);
            }}
          />
          {err && <Text color="red">This field cannot be empty.</Text>}
          <Flex justifyContent="flex-end">
            <Button
              bg="disecto.secondary"
              color="white"
              _hover={{ bg: "disecto.primary" }}
              my="20px"
              onClick={addReviewHandler}
            >
              Add Review
            </Button>
          </Flex>
          <Text
            color="disecto.secondary"
            fontWeight="600"
            fontSize="25px"
            my="20px"
          >
            Reviews
          </Text>
          <Review id={productId} />
        </Box>
      </Box>
    </>
  );
};

export default ProductName;
