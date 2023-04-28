import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import omit from "lodash/omit";
import { Button } from "@mui/material";

import { signUpValidationsScheme } from "../../validations";
import { useFetching } from "../../../../commonComponents/hooks";
import { signUp } from "../../api";
import { ROUTE_NAMES } from "../../../../routes/routeNames";

import styles from "./styles.module.scss";

const FormSignUp = () => {
  const navigate = useNavigate();
  const { data, errors, handleDataLoad } = useFetching(signUp);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      password: "",
      confirmPassword: "",
      phone: "",
      email: "",
    },
    validationSchema: signUpValidationsScheme,
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(omit(values, "confirmPassword"));
      resetForm();
    },
  });

  return (
    <div>
      {data?.data ? (
        <div className={styles.success}>
          {data.data.message}
          <div>
            <Button
              onClick={() => navigate(ROUTE_NAMES.SIGN_IN)}
              variant="contained"
            >
              Sign In!
            </Button>
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
            <h1>Введите ваши данные</h1>
            <label htmlFor="firstName">First Name</label>
            <input
              className={styles.wrapper__input}
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className={styles.wrapper__input__error}>
                {formik.errors.firstName}
              </div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input
              className={styles.wrapper__input}
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className={styles.wrapper__input__error}>
                {formik.errors.lastName}
              </div>
            ) : null}

            <label htmlFor="gender">Gender</label>
            <input
              className={styles.wrapper__input}
              id="gender"
              name="gender"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            />
            {formik.touched.gender && formik.errors.gender ? (
              <div className={styles.wrapper__input__error}>
                {formik.errors.gender}
              </div>
            ) : null}

            <label htmlFor="email">Email</label>
            <input
              className={styles.wrapper__input}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              autoComplete="username"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.wrapper__input__error}>
                {formik.errors.email}
              </div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
              className={styles.wrapper__input}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              autoComplete="current-password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={styles.wrapper__input__error}>
                {formik.errors.password}
              </div>
            ) : null}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={styles.wrapper__input}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              autoComplete="current-password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className={styles.wrapper__input__error}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}

            <label htmlFor="phone">Phone</label>
            <input
              className={styles.wrapper__input}
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className={styles.wrapper__input__error}>
                {formik.errors.phone}
              </div>
            ) : null}

            <Button
              type="submit"
              variant="contained"
              disabled={
                formik.values.firstName &&
                formik.values.lastName &&
                formik.values.gender &&
                formik.values.password &&
                formik.values.confirmPassword &&
                formik.values.email &&
                formik.values.phone
                  ? false
                  : true
              }
            >
              SUBMIT
            </Button>
            {errors && <div className={styles.error}>{errors.message}</div>}
          </form>
        </>
      )}
    </div>
  );
};

export default FormSignUp;
