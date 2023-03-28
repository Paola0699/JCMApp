import * as yup from 'yup';

export const newUsersValidationSchema = yup.object({
  USER_NAME: yup.string().min(4).max(50).required(),
  EMAIL: yup.string().email().required(),
  PASSWORD: yup.string().required(),
  PASSWORD_CONFIRM: yup
    .string()
    .oneOf([yup.ref('PASSWORD'), null], "Passwords don't match!")
    .required(),
  COMPANY: yup.string().required()
});
