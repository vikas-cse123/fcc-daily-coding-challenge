//question : #300
const isArrayOfString = (arr) => {
  for (const element of arr) {
    if (typeof element !== "string") return false;
  }
  return true;
};
const isValidObjectSchema = (obj) => {
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

const isValidSchema = (inp) => {
  const { users } = inp;
  if (!Array.isArray(users)) return false;
  for (const user of users) {
    if (!isValidObjectSchema(user)) return false;
  }
  return true;
};
