import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <Box width="20%" minW="270px" height="500px" m="40px 20px" boxShadow="2xl">
      <Link href={`/${data.id}`}>
        <a>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            height="500px"
          >
            <Box position="relative">
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
                  height="170px"
                  alt={data.title}
                />
              </Box>
            </Box>
            {/* bottom seciton */}
            <Box>
              <Box
                bg="disecto.primary"
                p="15px"
                color="white"
                borderRadius="4px"
                height="200px"
              >
                <Text fontSize="16px" fontWeight="600" mt="5px" mb="10px">
                  {data.title.length > 50
                    ? data.title.slice(0, 50) + "..."
                    : data.title}
                </Text>
                <Text fontSize="14px" fontWeight="400" mb="10px">
                  {data.description.length > 150
                    ? data.description.slice(0, 150) + "..."
                    : data.description}
                </Text>
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
            </Box>
          </Flex>
        </a>
      </Link>
    </Box>
  );
};

export default ProductCard;
