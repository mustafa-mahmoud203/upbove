import bcrypt from "bcryptjs";
export const hash = (password) => {
  return bcrypt.hashSync(password, parseInt(process.env.SULT_ROUND));
};

export const compare = ({ password = "", hashPassword = "" } = {}) => {
  return bcrypt.compareSync(password, hashPassword);
};
