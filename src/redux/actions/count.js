// const add = {};

export const countAdd = addBy => {
  return {
    type: "COUNT_ADD", // string yang mendiskripsikan perintah
    payload: addBy //variabel yang dibawa ke reducer
  };
};

export const countSubstract = substractBy => {
  return {
    type: "COUNT_SUBSTRACT", // string yang mendiskripsikan perintah
    payload: substractBy //variabel yang dibawa ke reducer
  };
};
