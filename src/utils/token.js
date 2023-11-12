import jwt from "jsonwebtoken";
export const signToken = ({ paylod = {} }) => {
  return jwt.sign(paylod, process.env.TOKEN_SIGNTURE, { expiresIn: "24h" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_SIGNTURE);
};
