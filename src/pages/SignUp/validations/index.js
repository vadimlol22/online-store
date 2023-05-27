import * as Yup from "yup";

export const signUpValidationsScheme = Yup.object({
  firstName: Yup.string()
    .required("obligatory field")
    .min(2, "too short")
    .max(25, "too long"),
  lastName: Yup.string()
    .required("obligatory field")
    .min(2, "too short")
    .max(25, "too long"),
  email: Yup.string().email("not valid email").required("obligatory field"),
  gender: Yup.string().required("obligatory field"),
  password: Yup.string().required("obligatory field").min(4, "too short"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("obligatory field"),
  phone: Yup.string().required("obligatory field").max(16, "too long"),
});
