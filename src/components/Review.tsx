import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../store";
import { Review } from "../types";

const Review = ({ id }: { id: string }) => {
  const review = useAppSelector((state) => state.review);
  const reviewData = review?.filter((el) => el.id.toString() === id);

  let reviewList =
    reviewData?.length > 0
      ? reviewData[0].reviews.map((el, idx) => (
          <Box
            bg={idx % 2 == 0 ? "disecto.primary" : "disecto.secondary"}
            color="white"
            p="10px"
            borderRadius="8px"
            mb="10px"
            key={el.id}
          >
            {el.content}
          </Box>
        ))
      : "";

  return <Box>{reviewList}</Box>;
};

export default Review;
