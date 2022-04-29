export const removeUnsafeKeyword = (str: string) => {
  str.replace("/", "");
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};
