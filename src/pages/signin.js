import InputComponent from "@/components/FormInput";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignin } from "@/redux/user/userActions";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کارکتر باشد"),
});

const SigninForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSignin);
  const { user ,loading} = userInfo;

  const onSubmit = (values) => {
    dispatch(userSignin(values));
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
          <h1 className="font-bold text-2xl text-violet-700 mb-4">ورود</h1>
          <InputComponent label="ایمیل" name="email" formik={formik} />
          <InputComponent
            label="رمز عبور"
            name="password"
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
          <Link href="/signup" className="mt-4 py-4 cursor-pointer">
            هنوز ثبت نام نکردی؟
          </Link>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
