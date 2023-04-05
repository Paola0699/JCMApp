import * as yup from 'yup';

export const resetPasswordValidationSchema = yup.object({
  USER: yup.string().email().required('El email es un campo obligatorio')
});
