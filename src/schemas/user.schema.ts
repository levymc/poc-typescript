import Joi from 'joi';

const userSchema = Joi.object({
  nome: Joi.string()
    .min(3)
    .pattern(new RegExp("^[a-zA-Z]+$"))
    .required(),
  email: Joi.string()
    .email()
    .required(),
});

export default userSchema;
