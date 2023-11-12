import bcrypt from "bcryptjs";
export const hahs = (password) => {
  return bcrypt.hashSync(password, parseInt(process.env.SULT_ROUND));
};
