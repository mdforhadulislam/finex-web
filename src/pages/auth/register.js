import { LoadingContext } from "@/context/LoadingContext";
import { getRequestSend, HEALTH_API, postRequestSend, REGISTER_API } from "@/data/ApiMethod";
import AuthLayout from "@/utils/AuthLayout";
import InputBox from "@/utils/InputBox";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postRequestSend(REGISTER_API, {}, user).then((res) => {
      if (res.status == 200) {
        toast.success(res.message);
        router.push("/auth/login");
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <AuthLayout>
      <form className="p-6 sm:p-8 pt-6 bg-white mx-auto shadow-4xl rounded-3xl w-full sm:w-96 flex flex-col justify-center align-middle items-center gap-7">
        <h1 className="text-5xl font-bold text-defult">Registation</h1>
        <div className="w-full h-auto flex flex-col items-center align-middle justify-center gap-2">
          <InputBox
            title={"Name"}
            name={"name"}
            placeholder={"Name"}
            type={"text"}
            action={changeHandler}
            value={user.name}
          />
          <InputBox
            title={"E-mail"}
            name={"email"}
            placeholder={"E-mail"}
            type={"text"}
            action={changeHandler}
            value={user.email}
          />
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
            {"have an account?"}
            <Link href={"/auth/login"} className="text-defult-button">
              Login Now
            </Link>
          </span>
        </div>

        <button
          onClick={submitHandler}
          className="w-full h-auto p-[6px] px-2 border-[2px] border-defult-button bg-defult-button rounded-lg text-white shadow-3xl text-base focus:outline-none "
          type="submit"
        >
          Submit Now
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;
