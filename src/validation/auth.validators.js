import joi from "joi";
import { validationFields } from "../middleware/validation.js";
export const signUp = {
  body: joi.object({
    firstName: validationFields.firstName,
    lastName: validationFields.lastName,
    email: validationFields.email,
    age: validationFields.age,
    gender: validationFields.gender,

    password: validationFields.password,
    confirmPassword: validationFields.confirmPassword.valid(
      joi.ref("password")
    ),
  }),
};
export const login = {
  body: joi.object({
    email: validationFields.email,
    password: validationFields.password,
  }),
};
