import { Types } from "mongoose";
import joi from "joi";

const methodeData = ["body", "params", "headers", "query", "file"];

const customValidID = (value, helper) => {
  return Types.ObjectId.isValid(value) ? true : helper.message("in-valid ID");
};
export const validationFields = {
  firstName: joi.string().min(3).max(15).alphanum(),
  lastName: joi.string().min(3).max(15).alphanum(),
  id: joi.string().custom(customValidID).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  password: joi
    .string()
    .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
    .required(),
  confirmPassword: joi.string().required(),
  newPassword: joi
    .string()
    .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
    .required(),
  age: joi.number().integer().min(15).max(100),
  gender: joi.string().valid("male", "MALE", "female", "FEMALE"),
};
export const validation = (schema) => {
  return (req, res, next) => {
    const validationArr = [];

    methodeData.forEach((key) => {
      if (schema[key]) {
        const validation = schema[key].validate(req[key], {
          abortEarly: false,
        });

        if (validation.error) validationArr.push(validation.error.details);
      }
    });

    if (validationArr.length)
      return res.json({ message: "Validator error", validationArr });
    else return next();
  };
};
