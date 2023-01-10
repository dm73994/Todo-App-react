import * as yup from 'yup';

export const defaultTaskValues = {
    title: '',
    description: '',
    category: undefined,
    privacy: false,  //false = publico, true = privado
}

export const TaskSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    category: yup.string(),
    privacy: yup.bool(),
}).required();
  