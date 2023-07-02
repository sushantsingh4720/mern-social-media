import Joi from "joi";

const registerSchemavalidation = (body) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(3)
      .max(50)
      .pattern(/^[A-Za-z ]*$/, "Please enter valid firstName")
      .required("Please enter your firstName")
      .label("firstName"),

    email: Joi.string()
      .email()
      .pattern(
        /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/,
        "Please enter valid email"
      )
      .required("Please enter your email"),
    password: Joi.string()
      .min(6)
      .pattern(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+]{6,20}$/,
        "Please enter valid password"
      )
      .required("Please enter your password"),
  });
  return schema.validate(body);
};
const loginSchemaValidation = (body) => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .matches(
        /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/,
        "Please enter valid email"
      )
      .required("Please enter your email"),
    password: Joi.string()
      .min(6)
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+]{6,20}$/,
        "Please enter valid password"
      )
      .required("Please enter your password"),
  });
  return schema.validate(body);
};
export { registerSchemavalidation, loginSchemaValidation };
