import * as yup from 'yup';

export const loginValidationSchema = yup.object({
    USER: yup
      .string()
      .email()
      .required('El email es un campo obligatorio'),
    PASSWORD: yup
      .string()
      .required()
  })