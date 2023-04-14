export const typeOf = (value) =>
  Object.prototype.toString.call(value).slice(8, -1);

export const appendFormData = (objectData) => {
  const formData = new FormData();
  Object.entries(objectData).forEach(([key, value]) => {
    if (value === true) value = 1;
    if (value === false) value = 0;
    if (value === null) value = "";
    if (typeOf(value) === "Array") {
      value = JSON.stringify(value);
    }
    formData.append(key, value);
  });

  return formData;
};
