import { Box, Text } from "@chakra-ui/react";
import { useAppSelector } from "../store";

const Review = ({ id }: { id: string }) => {
  const review = useAppSelector((state) => state.review);
  const reviewData = review.filter((el) => el.id.toString() === id);

  let reviewList =
    reviewData?.length > 0
      ? reviewData[0].reviews.map((el, idx) => (
          <Box
            bg={idx % 2 === 0 ? "disecto.primary" : "disecto.secondary"}
            color="white"
            p="20px"
            borderRadius="8px"
            mb="10px"
            key={el.id}
          >
            {el.content}
          </Box>
        ))
      : "";

  return (
    <Box>
      {reviewList ? (
        reviewList
      ) : (
        <Text
          textAlign="center"
          fontWeight="500"
          fontSize="16px"
          color="disecto.secondary"
          borderRadius="4px"
          p="10px"
          mb="20px"
        >
          Nothing to show here...
        </Text>
      )}
    </Box>
  );
};

export default Review;
