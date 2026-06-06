//question : #299
const isArrayOfString = (arr) => {
  for (const element of arr) {
    if (typeof element !== "string") return false;
  }
  return true;
};
const isValidSchema = (obj) => {
  const roles = ["user", "creator", "moderator", "staff", "admin"];
  const { username, posts, verified, role, supporter, badges } = obj;
  return (
    typeof username === "string" &&
    typeof posts === "number" &&
    typeof verified === "boolean" &&
    roles.includes(role) &&
    (typeof supporter === "undefined" || typeof supporter === "boolean") &&
    Array.isArray(badges) &&
    isArrayOfString(badges)
  );
};
