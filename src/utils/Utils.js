export const validateText = (text, isNumber = false) => {
  return Boolean(isNumber ? Number(text) : text) && text.length > 0;
};
