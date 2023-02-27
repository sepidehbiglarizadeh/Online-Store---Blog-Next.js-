import InputComponent from "@/components/FormInput";
import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useAuth, useAuthActions } from "@/context/AuthContext";
import { useEffect } from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confrimPassword: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام و نام خانوادگی را وارد کنید")
    .min(6, "نام و نام خانوادگی باید حداقل شامل 6 کارکتر باشد"),
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
    .nullable(),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کارکتر باشد"),
  confrimPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور را مجددا وارد کنید")
    .required("رمز عبور همخوانی ندارد"),
});

const RegisterForm = () => {
  const router = useRouter();
  const dispatch = useAuthActions();
  const { user } = useAuth();

  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
    dispatch({
      type: "SIGNUP",
      payload: { name, email, phoneNumber, password },
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  return (
    <>
      <Head>
        <title>FrontTech-Signup</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container mx-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="font-bold text-2xl text-violet-700 mb-4">ثبت نام</h1>
          <InputComponent
            label="نام و نام خانوادگی"
            name="name"
            formik={formik}
          />
          <InputComponent label="ایمیل" name="email" formik={formik} />
          <InputComponent
            label="شماره موبایل"
            name="phoneNumber"
            formik={formik}
          />
          <InputComponent
            label="رمز عبور"
            name="password"
            type="password"
            formik={formik}
          />
          <InputComponent
            label="تکرار رمز"
            name="confrimPassword"
            type="password"
            formik={formik}
          />
          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-violet-800 text-white"
          >
            ورود
          </button>
          <Link href="/signin" className="mt-4 py-4 cursor-pointer">
            قبلا ثبت نام کرده اید؟
          </Link>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
