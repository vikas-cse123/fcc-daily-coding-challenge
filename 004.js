//question : #298

const isValidSchema = (obj) => {
  const roles = ["user", "creator", "moderator", "staff", "admin"];
  const { username, posts, verified, role, supporter } = obj;
  return (
    typeof username === "string" &&
    typeof posts === "number" &&
    typeof verified === "boolean" &&
    roles.includes(role) &&
    (typeof supporter === "undefined" || typeof supporter === "boolean")
  );
};
