//question : #295

const isValidSchema = (obj) => {
  const { username } = obj;
  return typeof username === "string";
};

