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

function SignUpPage() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be minimum 2")
      .max(100, "Name must not be more than 100 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      setSubmitting(true);
      console.log("formData: ", values);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-4 items-center">
      <PageTitle title="Sign Up" />
      <Description text="We will get you up running so you can focus on playing board games with your friends" />
      <form onSubmit={formik.handleSubmit}>
        <div className="relative">
          <InputField
            label="Create an Username"
            placeholder="Your username"
            value={formik.values.name}
            name="name"
            onValueChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <div className=" absolute bottom-0 text-error text-base">
              {formik.errors.name}
            </div>
          )}
        </div>
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
            label="Create a Password"
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
        <div className="relative">
          <InputField
            label="Confirm the Password"
            placeholder="Confirm the password"
            password
            value={formik.values.confirmPassword}
            name="confirmPassword"
            onValueChange={formik.handleChange}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className=" absolute bottom-0 text-error text-base">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>
        <div className="flex justify-between w-full gap-8 items-center">
          <p className=" flex-1 text-white4 font-normal font-poppins text-[14px] text-left">
            By creating an account you agree to our Terms of Use and Privacy
            Policy
          </p>
          <Button type="submit" text="Sign Up" disabled={submitting} />
        </div>
      </form>
      <div className="flex w-full justify-between items-center mt-4">
        <div className=" flex-1 h-[0.5px] w-full bg-border"></div>
        <div className=" font-poppins text-white3 font-normal text-base mx-4">
          Or sign up with
        </div>
        <div className=" flex-1 h-[0.5px] w-full bg-border"></div>
      </div>
      <SocialLinks />
      <div className="flex items-center gap-2 py-6">
        <p className=" font-poppins font-normal text-base text-white3">
          Already have an account?
        </p>
        <p
          className=" uppercase font-bold font-poppins text-lg text-button cursor-pointer"
          onClick={() => navigate("/", { replace: true })}
        >
          Login
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
