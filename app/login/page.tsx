"use client"
import FacebookIcon from "../../assets/icons/fb-icon.png";
import GoogleIcon from "../../assets/icons/google-icon.png";
import LoginBanner from "../../assets/icons/login-banner.jpg";
import BrandLogo from "../../assets/icons/brand-logo.png";
import NextImage from "../../components/NextImage";
import {Form, Formik,} from "formik";
import * as yup from "yup";
import axois from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getToken, token } from "../GlobalRedux/Slices/login";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export interface ILogin{
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(state => state.user)
  const handleSubmit = async(values: ILogin) =>{
    dispatch(getToken(values))
  }

  const LoginValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email()
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Please enter your password")
  });

  useEffect(() =>{
    console.log(user.token,"user.token")
      if(user.token) router.push("/home")
  },[user.token])

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="mx-32 my-4">
      <NextImage src={BrandLogo} alt='brand-logo' className="w-28 h-28" />
        <h1 className="text-2xl font-bold my-4">Sign in to your account</h1>
        <div className="text-md text-gray-600 font-medium my-4">
          Sign in with
        </div>
        <div className="flex space-x-2">
          <button className="w-full h-12 bg-transparent text-gray-600 transition-colors duration-150 hover:bg-blue-200 font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            <NextImage src={FacebookIcon} className="inline" alt={""} />
          </button>
          <button className="w-full h-12 bg-transparent text-gray-600 transition-colors duration-150 hover:bg-blue-200 font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
            <NextImage src={GoogleIcon} className="inline-grid" alt={""} />
          </button>
        </div>
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <Formik
        initialValues={{email: '',password: ''}}
        onSubmit={handleSubmit}
        validationSchema={LoginValidationSchema}
        >
          {({ handleSubmit,values, handleBlur, handleChange, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="xxx@gmail.com"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password*
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="********"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-start mb-6 mt-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                // required 
              />
            </div>
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          </Form>
          )} 
          </Formik>
      </div>
      <div>
        <NextImage src={LoginBanner} alt='banner-img' />
      </div>
    </div>
  );
}
