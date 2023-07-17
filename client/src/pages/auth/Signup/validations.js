import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("please enter an e-mail address."),
  password: yup
    .string()
    .min(5, "password must be min 5 char.")
    .required("please enter your password."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match.")
    .required("please re-enter your password."),
});

export default validations;
