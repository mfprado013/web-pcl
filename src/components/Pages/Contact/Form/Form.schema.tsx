import * as y from 'yup';

export const validationSchema = y.object().shape({
  name: y.string().required('!ops, precisamos desta informação').trim(),
  last_name: y.string().required('!ops, precisamos desta informação').trim(),
  email: y
    .string()
    .email('e-mail inválido')
    .required('!ops, precisamos desta informação')
    .trim(),
  subject: y.string().required('!ops, esta informação é importante').trim(),
  message: y.string().required('so falta a mensagem para concluir').trim()
});
