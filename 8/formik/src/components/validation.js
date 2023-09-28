import * as Yup from 'yup';

const validations = Yup.object().shape({
    email: Yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta gereklidir'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre gereklidir'),
    passwordConfirm: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır')
    .oneOf([Yup.ref('password')], 'Parolalar aynı olmalıdır').required('Şifre gereklidir'),
  });



  export default validations