import joi from "joi";
import { validationFields } from "../middleware/validation.js";
export const signUp = {
  body: joi.object({
    firstName: validationFields.firstName.required(),
    lastName: validationFields.lastName.required(),
    email: validationFields.email.required(),
    age: validationFields.age.required(),
    gender: validationFields.gender.required(),

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
