export const NumberFields = (e, length) => {
  // Remove non-numeric characters
  const numericValue = e.target.value.replace(/[^0-9]/g, "");
  e.target.value = numericValue;
  // Limit the input to 4 characters
  if (e.target.value.length > length) {
    e.target.value = e.target.value.slice(0, length);
  }
};
