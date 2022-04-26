import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import Navbar from "../src/components/Navbar";
import Products from "../src/components/Products";
import { getProducts } from "../src/features/productSlice";
import { useAppDispatch } from "../src/store";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  //fetch initally for searchBar and product section

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
      <Hero />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
