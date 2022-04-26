import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <Box width="20%" minW="270px" m="40px 20px" boxShadow="2xl">
      <Link href={`/${data.id}`}>
        <a>
          <Box position="relative" height="max-content">
            <Box
              position="absolute"
              width="max-content"
              top="10px"
              right="10px"
              bg="disecto.primary"
              borderRadius="4px"
              zIndex="2"
            >
              <Text color="white" fontSize="12px" p="5px 7px">
                {data.category}
              </Text>
            </Box>
            <Box textAlign="center" pt="40px" pb="20px">
              <Image
                src={data.image}
                width="150px"
                height="200px"
                alt={data.title}
              />
            </Box>
          </Box>
          {/* bottom seciton */}
          <Box
            bg="disecto.primary"
            p="5px"
            color="white"
            borderRadius="4px"
            minH="150px"
          >
            <Box>
              <Text fontSize="14px" fontWeight="600" mt="5px" mb="10px">
                {data.title}
              </Text>
              <Text fontSize="12px" fontWeight="400" mb="10px">
                {data.description.length > 100
                  ? data.description.slice(0, 100) + "..."
                  : data.description}
              </Text>
            </Box>
          </Box>
          <Text
            mt="-1"
            bg="disecto.secondary"
            borderRadius="4px"
            p="10px"
            fontSize="15px"
            fontWeight="500"
            color="white"
            textAlign="right"
          >
            ${data.price}
          </Text>
        </a>
      </Link>
    </Box>
  );
};

export default ProductCard;
