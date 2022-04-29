import { saveToLocalStorage } from "../utils/localStorageManger";

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
      saveToLocalStorage("review", [...arrToStore, finalPayload]);
    } else {
      let reviewToUpdate = arrToStore[reviewIdx];
      let newData = {
        ...reviewToUpdate,
        reviews: [action.payload.review, ...reviewToUpdate.reviews],
      };
      let arr = arrToStore.map((el) =>
        el.id === action.payload.id ? newData : el
      );
      saveToLocalStorage("review", arr);
    }
  }
  return next(action);
};
