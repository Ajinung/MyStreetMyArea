import Joi from "joi";

export const userSchema = {
  register: Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNum: Joi.string().required(),
    password: Joi.string().required(),
  }),
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

