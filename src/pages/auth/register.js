import { AuthContext } from '@/context/AuthContext';
import { LoadingContext } from '@/context/LoadingContext';
import AuthLayout from '@/utils/AuthLayout'
import InputBox from '@/utils/InputBox';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });
  
  const router = useRouter();

  const authContext = useContext(AuthContext);
  const loading = useContext(LoadingContext);



  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout>
      
      <form className="p-4 sm:p-8 pt-6 bg-white mx-auto shadow-4xl rounded-3xl w-full sm:w-96 flex flex-col justify-center align-middle items-center gap-7">
              <h1 className="text-5xl font-bold text-defult">Registation</h1>
              <div className="w-full h-auto flex flex-col items-center align-middle justify-center gap-2">
                <InputBox
                  title={"Name"}
                  name={"name"}
                  placeholder={"Name"}
                  type={"text"}
                  action={changeHandler}
                  
                />
                <InputBox
                  title={"E-mail"}
                  name={"email"}
                  placeholder={"E-mail"}
                  type={"text"}
                  action={changeHandler}
                />
                <InputBox
                  title={"Phone Number"}
                  name={"phone"}
                  placeholder={"Phone Number"}
                  type={"text"}
                  action={changeHandler}
                />
                <InputBox
                  title={"Password"}
                  name={"password"}
                  placeholder={"Password"}
                  type={"password"}
                  action={changeHandler}
                />

                <span className="w-full h-auto text-sm text-right -mt-2">
                  {"have an account?"}{" "}
                  <Link href={"/auth/login"} className="text-defult-button">
                    Login Now
                  </Link>
                </span>
              </div>

              <button
                // onClick={submitHandler}
                className="w-full h-auto p-[6px] px-2 border-[2px] border-defult-button bg-defult-button rounded-lg text-white shadow-3xl text-base focus:outline-none "
                type="submit"
              >
                Submit Now
              </button>
            </form>



    </AuthLayout>
  )
}

export default Register