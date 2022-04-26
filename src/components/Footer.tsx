import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      color="white"
      fontSize="18px"
      fontWeight="400px"
      bottom="0"
      bgColor="disecto.secondary"
      py="10px"
      mt="40px"
    >
      Made with ♥ by{" "}
      <Link href="https://github.com/Neerajx11">
        <a target="_blank"> Neeraj Maurya</a>
      </Link>
    </Box>
  );
};

export default Footer;
