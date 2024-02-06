import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Description from "../../components/Description";
import InputField from "../../components/InputField/InputField";
import PageTitle from "../../components/PageTitle";
import SocialLinks from "../../components/SocialLinks";
import { FormValues } from "./types";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setSubmitting(true);
      console.log("loginData: ", values);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-4 items-center">
      <PageTitle title="Login" />
      <Description text="Welcome back. Enter your credentials to access your account." />
      <form onSubmit={formik.handleSubmit} className=" w-full">
        <div className="relative">
          <InputField
            label="Your Email"
            placeholder="example@example.com"
            value={formik.values.email}
            name="email"
            onValueChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <div className=" absolute bottom-0 text-error text-base">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="relative">
          <InputField
            label="Your Password"
            placeholder="Enter your password"
            password
            value={formik.values.password}
            name="password"
            onValueChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <div className=" absolute bottom-0 text-error text-base">
              {formik.errors.password}
            </div>
          )}
        </div>
        <div className="flex justify-between w-full gap-8">
          <p
            className=" uppercase text-button font-bold font-poppins text-[15px] text-left cursor-pointer"
            onClick={() => navigate("/forgot-password", { replace: true })}
          >
            forgot password?
          </p>
          <Button type="submit" text="Login" disabled={submitting} />
        </div>
      </form>
      <div className="flex w-full justify-between items-center mt-8">
        <div className=" flex-1 h-[0.5px] w-full bg-border"></div>
        <div className=" font-poppins text-white3 font-normal text-base mx-4">
          Or login with
        </div>
        <div className=" flex-1 h-[0.5px] w-full bg-border"></div>
      </div>
      <SocialLinks />
      <div className="flex items-center gap-2 pt-20">
        <p className=" font-poppins font-normal text-base text-white3">
          Are you new here?
        </p>
        <p
          className=" uppercase font-bold font-poppins text-lg text-button cursor-pointer"
          onClick={() => navigate("/sign-up", { replace: true })}
        >
          Create an account
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
