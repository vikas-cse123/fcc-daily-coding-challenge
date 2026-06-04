//question : #296

const isValidSchema = (obj) => {
  const { username, posts, verified } = obj;
  return (
    typeof username === "string" &&
    typeof posts === "number" &&
    typeof verified === "boolean"
  );
};
