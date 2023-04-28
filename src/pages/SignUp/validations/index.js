import * as Yup from "yup";

export const signUpValidationsScheme = Yup.object({
  firstName: Yup.string()
    .required("обязательное поле")
    .min(2, "too short")
    .max(25, "too long"),
  lastName: Yup.string()
    .required("обязательное поле")
    .min(2, "too short")
    .max(25, "too long"),
  email: Yup.string().email("не валидный email").required("обязательное поле"),
  gender: Yup.string().required("обязательное поле"),
  password: Yup.string().required("обязательное поле").min(4, "too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("обязательное поле"),
  phone: Yup.string().required("обязательное поле").max(10, "too long"),
});
