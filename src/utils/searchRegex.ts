//check if some of the partMatches the input or not
export const checkName = (findFromThisTerm: String, inpTerm: String) => {
  let pattern = inpTerm
    .split("")
    .map((x) => {
      return `(?=.*${x})`;
    })
    .join("");

  let regex = new RegExp(`${pattern}`, "g");

  return findFromThisTerm.match(regex);
};
