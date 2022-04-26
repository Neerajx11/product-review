import {
  clearLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageManger";

export const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === "review/add") {
    const arrToStore = store.getState().review;
    console.log(arrToStore);
    let reviewIdx = arrToStore.findIndex((el) => el.id === action.payload.id);
    if (reviewIdx === -1) {
      const finalPayload = {
        id: action.payload.id,
        reviews: [action.payload.review],
      };
      saveToLocalStorage(
        "review",
        JSON.stringify([...arrToStore, finalPayload])
      );
    } else {
      let reviewToUpdate = arrToStore[reviewIdx];
      reviewToUpdate = {
        ...reviewToUpdate,
        reviews: [action.payload.review, ...reviewToUpdate.reviews],
      };
      const arr = arrToStore.filter((el) =>
        el.id === action.payload.id ? reviewToUpdate : el
      );
      saveToLocalStorage("review", arr);
    }
  }
  return next(action);
};

let arr = { id: 19, reviews: [{ id: "asdfasd", content: "asdfasdfas" }] };
