import * as yup from 'yup';

export const alertValidationSchema = yup.object({
  TITLE: yup.string().required(),
  DESCRIPTION: yup.string().required()
});
