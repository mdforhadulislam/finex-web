import { AuthContext } from "@/context/AuthContext";
import { LoadingContext } from "@/context/LoadingContext";
import { getRequestSend, HEALTH_API, LOGIN_API, postRequestSend } from "@/data/ApiMethod";
import AuthLayout from "@/utils/AuthLayout";
import InputBox from "@/utils/InputBox";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({ phone: "", password: "" });

  const auth = useContext(AuthContext);

  const router = useRouter();

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postRequestSend(LOGIN_API, {}, user).then((res) => {
      if (res.status == 200) {
        toast.success(res.message);
        auth.loginHandler(res.data.token, res.data.user);
        router.push("/user");
      } else {
        toast.error(res.message);
      }
    });
  };


  return (
    <AuthLayout>
      <form className="p-6 sm:p-8 pt-6  bg-white mx-auto shadow-4xl rounded-3xl w-full sm:w-96  flex flex-col justify-center align-middle items-center gap-7">
        <h1 className="text-5xl font-bold text-defult">LogIn</h1>
        <div className="w-full h-auto flex flex-col items-center align-middle justify-center gap-2">
          <InputBox
            title={"Phone Number"}
            name={"phone"}
            placeholder={"Phone Number"}
            type={"text"}
            action={changeHandler}
            value={user.phone}
          />
          <InputBox
            title={"Password"}
            name={"password"}
            placeholder={"Password"}
            type={"password"}
            action={changeHandler}
            value={user.password}
          />

          <span className="w-full h-auto text-sm text-right -mt-2">
            {"Don't have an account?"}
            <Link href={"/auth/register"} className="text-defult-button">
              Registation Now
            </Link>
          </span>
        </div>

        <button
          onClick={submitHandler}
          className="w-full h-auto p-[6px] px-2 border-[2px] border-defult-button bg-defult-button rounded-lg text-white shadow-3xl text-base focus:outline-none "
          type="submit"
        >
          Submit
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;
