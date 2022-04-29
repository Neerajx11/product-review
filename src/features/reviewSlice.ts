import { createSlice } from "@reduxjs/toolkit";
import { ReviewState } from "../types";

const initialState: ReviewState[] = [];

// paylad parentId, revId, revCon

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    add: (state, action) => {
      let reviewIdx: number = state.findIndex(
        (el) => el.id === action.payload.id
      );
      if (reviewIdx === -1) {
        const finalPayload = {
          id: action.payload.id,
          reviews: [action.payload.review],
        };
        state.push(finalPayload);
      } else {
        let reviewToUpdate = state[reviewIdx];
        reviewToUpdate.reviews.unshift(action.payload.review);
        state.filter((el) =>
          el.id === action.payload.id ? reviewToUpdate : el
        );
      }
    },
  },
});

export default reviewSlice.reducer;
export const { add: addReview } = reviewSlice.actions;
