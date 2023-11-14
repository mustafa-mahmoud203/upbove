import joi from "joi";
import { validationFields } from "../middleware/validation.js";

export const shareProfile = {
  params: joi.object({
    id: validationFields.id,
  }),
};

export const userData = {
  body: joi.object({
    firstName: validationFields.firstName,
    lastName: validationFields.lastName,
    email: validationFields.email,
    age: validationFields.age,
    gender: validationFields.gender,
  }),
};

export const userPassword = {
  body: joi.object({
    oldPassword: validationFields.password,
    newPassword: validationFields.newPassword.invalid(joi.ref("oldPassword")),
    confirmPassword: validationFields.confirmPassword.valid(
      joi.ref("newPassword")
    ),
  }),
};
