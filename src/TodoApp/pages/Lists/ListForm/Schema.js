import * as yup from 'yup';

export const defaultListValues = {
    title: '',
    description: '',
    category: undefined,
    privacy: false,  //false = publico, true = privado
}

export const ListSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    category: yup.string(),
    privacy: yup.bool(),
}).required();
  