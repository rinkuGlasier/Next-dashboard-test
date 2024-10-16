"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsEye, BsEyeSlash } from "react-icons/bs";

function Login() {
  const [inputVisibility, setInputVisibility] = useState(false);
  const router = useRouter();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await AxiosPost(`${API_URLS.AUTH.ADMIN_LOGIN}`, values);
      if (response) {
        doLogin(response.data[0]); // Perform login
        setCookie(response.data[0]);
        setTimeout(() => {
          router.push("/admin/products");
          toast.success(`${response.message}`, { autoClose: 2000 });
        }, 200);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      setSubmitting(false);
      toast.error("Something Went Wrong", {
        toastId: "nodata",
        autoClose: 1000,
      });
    }
  };

  const renderIcon = () => {
    if (inputVisibility === false) {
      return <BsEyeSlash color="black" className="text-white" />;
    } else {
      return <BsEye color="black" className="text-white" />;
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md m-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={inputVisibility}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6" action="#">
              <div className="flex items-center justify-center mx-auto w-2/6 h-full overflow-hidden">
                {/* <Image src={Logo} alt="logo" width={100} height={100} /> */}
              </div>
              <h5 className="text-xl text-center font-medium text-primary-100 ">
                Welcome to Glasier Wellness
              </h5>
              <p className="text-sm text-center text-primary-100 !mt-[5px]">
                SignIn to your account
              </p>

              <div>
                <label htmlFor="login-email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="login-email"
                  className="form-control info_font py-2  text-sm"
                  placeholder="Enter Your Email"
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="text-sm text-red-500 normal-case"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>

                <div className="relative">
                  <Field
                    id="hs-toggle-password-multi-toggle-np"
                    type={inputVisibility === false ? "password" : "text"}
                    className="form-control p-2 info_font  text-sm"
                    placeholder="Enter new password"
                    name="password"
                  />
                  <button
                    type="button"
                    className="absolute right-0  -top-1 p-3.5 rounded-e-md"
                    onClick={() => setInputVisibility(!inputVisibility)}
                  >
                    {renderIcon()}
                  </button>
                </div>
              </div>
              <ErrorMessage
                component="span"
                name="password"
                className="text-sm text-red-500"
              />

              <button
                type="submit"
                className="btn-primary w-full !mt-16"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
