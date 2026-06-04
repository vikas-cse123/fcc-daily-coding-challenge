//question : #297

const isValidSchema = (obj) => {
  const roles = ["user", "creator", "moderator", "staff", "admin"];
  const { username, posts, verified, role } = obj;
  return (
    typeof username === "string" &&
    typeof posts === "number" &&
    typeof verified === "boolean" &&
    roles.includes(role)
  );
};
