import * as yup from 'yup';

export const defaultLoginValues = {
    user: '',
    password: ''
}

export const LoginSchema = yup.object().shape({
    user: yup.string().required(),
    password: yup.string().required(),
}).required();
  