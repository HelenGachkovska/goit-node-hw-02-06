import Joi from "joi";

import { emailRegexp, subscriptionList } from "../constants/index.js";

const userSignupSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email(emailRegexp).required(),
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

const userSigninSchema = Joi.object({
  email: Joi.string().email(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const userEmailSchema = Joi.object({
  email: Joi.string().email(emailRegexp).required(),
});

export default {
  userSignupSchema,
  userSigninSchema,
  userEmailSchema,
};
