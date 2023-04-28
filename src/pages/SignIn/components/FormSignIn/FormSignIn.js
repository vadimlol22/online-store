import { useDispatch } from "react-redux";

import { useForm } from "../../../../commonComponents/hooks";
import { signInThunk } from "../../api";

import styles from "./styles.module.scss";
import CustomInput from "../../../../commonComponents/CustomInput";
import CustomButton from "../../../../commonComponents/CustomButton";
import Loading from "../Loading/Loading";
import LinkToUp from "../LinkToUp/LinkToUp";
import { Link } from "react-router-dom";
const FormSignIn = () => {
  const dispatch = useDispatch();

  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    dispatch(signInThunk(form));
    handleReset();
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__login}>Login</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <CustomInput
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            label="email"
          />
          <CustomInput
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            label="password"
            autocomplete="off"
          />

          <CustomButton
            disabled={form.password && form.email ? false : true}
            text="Login"
            color="success"
            onClick={() => handleSubmit()}
          />
        </form>
        <Loading />
      </div>
      <LinkToUp />
    </div>
  );
};

export default FormSignIn;
