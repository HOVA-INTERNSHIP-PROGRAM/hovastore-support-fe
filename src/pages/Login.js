import React from "react";
import { Link } from "react-router-dom";
import HSInput from "../components/UI/HSInput";
import HSButton from "../components/UI/HSButton";
import { FaUser, FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux"
import { getLoginStatus, makeLogin } from "../features/login/loginSlice";

function Login() {

  const dispatch = useDispatch();
  const loading = useSelector(getLoginStatus)

  const login = async () => {
    try {
      if (formik.isValid) {
        const formData = {
          email: formik.values.email,
          password: formik.values.password,
        };
        dispatch(makeLogin(formData));
        formik.resetForm();

      }
    } catch (error) {
      console.log("Failed To Login", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "Password Required";
    }

    if (!values.email) {
      errors.email = "Email Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    validate,
    initialValues,
    onSubmit: login,
  });
  return (
    <div className="bg-secondary w-full h-dvh flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-white w-[90%] md:w-486 h-620 rounded-sm flex justify-center items-center py-10 shadow-md">

          <form className="w-[95%] md:w-[85%] h-full flex flex-col justify-center items-center"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="text-2xl lx:text-4xl font-extrabold text-primary">HAVASTORE SUPPORT</h2>
            <div className="mt-6 mdl:mt-[34px] w-full">
              <HSInput type="input" placeholder="Email" id="email" icon={<FaUser />}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className=" text-sm text-red-800 font-normal ">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="mt-6 mdl:mt-[34px] w-full">
              <HSInput
                type="input"
                placeholder="Password"
                text="password"
                id="password"
                icon={<FaLock />}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className=" text-sm text-red-800 font-normal ">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>
            <HSButton
              click={() => formik.submitForm()}
              title={loading ? "Logging in..." : "Login"}
              styles={`w-full !scale-100 mt-6 mdl:mt-12 bg-primary text-white`}
            />
            <div className="mt-6 mdl:mt-[44px] flex flex-col md:flex-row items-center md:items-center md:justify-center w-full text-[20px] md:text-[24px]">
              <Link
                to="/forgot-password"
                className="hover:underline text-[#3558D4]"
              >
                Forgot password ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
