import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../src/components/Navbar";
import { getProducts } from "../src/features/productSlice";
import { useAppDispatch } from "../src/store";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Product Review</title>
        <meta name="description" content="Disecto fontend internship task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isSearchBar={true} />
    </>
  );
};

export default Home;
