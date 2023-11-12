import bcrypt from "bcryptjs";
export const hahs = (password) => {
  return bcrypt.hashSync(password, parseInt(process.env.SULT_ROUND));
};

export const compare = ({ loginpassword = "", hashPassword = "" } = {}) => {
  return bcrypt.compareSync(loginpassword, hashPassword);
};
