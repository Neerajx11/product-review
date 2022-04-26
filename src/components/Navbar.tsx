import Image from "next/image";
import Link from "next/link";

import { Box, HStack } from "@chakra-ui/react";
import logo from "../../public/static/images/disectologo.svg";
import SearchBar from "./SearchBar";

interface propsType {
  isSearchBar: boolean;
}

const Navbar = ({ isSearchBar = true }: propsType) => {
  return (
    <HStack
      m="35px 20px"
      display={{ md: "flex" }}
      justifyContent="space-between"
    >
      <Box marginRight={{ base: "0px", lg: "40px" }} textAlign="center">
        <Link href="/">
          <a>
            <Image src={logo} alt="disecto logo" />
          </a>
        </Link>
      </Box>
      {isSearchBar && <SearchBar />}
    </HStack>
  );
};

export default Navbar;
