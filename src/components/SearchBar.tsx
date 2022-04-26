import { useEffect, useState } from "react";
import Link from "next/link";

import { useAppSelector } from "../store";
import { checkName } from "../utils/searchRegex";
import { Product } from "../types";

import { v4 } from "uuid";

import { Box, Input } from "@chakra-ui/react";

const SearchBar = () => {
  const { isLoading, products } = useAppSelector((state) => state.product);
  const [filtItem, setFiltItem] = useState<Product[]>([]);
  const [inp, setInp] = useState("");

  useEffect(() => {
    if (inp == "") {
      setFiltItem([]);
    } else {
      let searchTerm = inp.toLowerCase().substring(0, 10);

      let data = products.filter((el) => {
        let curr = el.title.substring(0, 10).toLowerCase();
        return (
          el.title.toLowerCase().includes(searchTerm) ||
          checkName(curr, searchTerm)
        );
      });

      setFiltItem(data.slice(0, 5));
    }
  }, [inp, products]);

  const navListItem = filtItem.map((el) => (
    <Link href={`/${el.id}`} key={v4()}>
      <a>
        <Box
          height="auto"
          fontSize="14px"
          p="10px 20px"
          borderBottom="1px solid lightgray"
          cursor="pointer"
          _hover={{ bg: "disecto.primary", color: "white" }}
        >
          {el.title.length > 50 ? el.title.slice(0, 60) + "..." : el.title}
        </Box>
      </a>
    </Link>
  ));

  return (
    <Box w={{ base: "100%", md: "85%", lg: "65%" }}>
      <Box>
        <Input
          mt={{ base: "20px", md: "10px", lg: "0px" }}
          placeholder="Search product"
          borderColor="disecto.primary"
          borderRadius="0"
          borderWidth="2px"
          mx="auto"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          position="relative"
        />
        <Box
          position="absolute"
          boxShadow="lg"
          width="100%"
          borderX="1px solid lightgray"
        >
          {!isLoading && navListItem}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
