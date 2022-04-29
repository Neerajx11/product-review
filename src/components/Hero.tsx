import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";

import bg from "./bg.png";

const Hero = () => {
  return (
    <Flex
      py="40px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      height="400px"
    >
      <Box
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="-1"
        overflow="hidden"
        bg="disecto.primary"
      >
        <Image
          src={bg}
          layout="fill"
          alt="background"
          objectFit="cover"
          priority
        />
      </Box>
      <Box
        fontSize={{ base: "35px", lg: "45px" }}
        fontWeight="700"
        textAlign="center"
        width={{ base: "90%", md: "75%", lg: "50%" }}
        color="white"
        mb="40px"
      >
        Review product and make them better.
      </Box>
      <Box>
        <Button
          bg="disceto.primary"
          color="white"
          border="1px solid white"
          _hover={{ bg: "initial" }}
        >
          Explore
        </Button>
      </Box>
    </Flex>
  );
};

export default Hero;
