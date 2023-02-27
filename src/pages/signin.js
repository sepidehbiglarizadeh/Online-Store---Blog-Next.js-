import InputComponent from "@/components/FormInput";
import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

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

  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/user/signin", values, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success("با موفقیت وارد شدید");
        router.push("/");
      })
      .catch((err) => toast.error(err?.response?.data?.message, {}));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

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
