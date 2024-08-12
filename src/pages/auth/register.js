import { postRequestSend, REGISTER_API } from "@/data/ApiMethod";
import AuthLayout from "@/utils/AuthLayout";
import InputBox from "@/utils/InputBox";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validate = () => {
    const errors = {};
    if (!user.name) {
      errors.name = "Name is required.";
    }
    if (!user.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!user.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{11}$/.test(user.phone)) {
      errors.phone = "Phone number must be 11 digits.";
    }
    if (!user.password) {
      errors.password = "Password is required.";
    } else if (user.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    return errors;
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await postRequestSend(REGISTER_API, {}, user);
      if (res.status === 200) {
        toast.success(res.message);
        router.push("/auth/login");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form
        className="p-6 sm:p-8 pt-6 bg-white mx-auto shadow-4xl rounded-3xl w-full sm:w-96 flex flex-col justify-center items-center gap-7"
        onSubmit={submitHandler}
      >
        <h1 className="text-5xl font-bold text-defult">Registration</h1>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <InputBox
            title="Name"
            name="name"
            placeholder="Name"
            type="text"
            action={changeHandler}
            value={user.name}
            error={errors.name}
          />
          <InputBox
            title="E-mail"
            name="email"
            placeholder="E-mail"
            type="text"
            action={changeHandler}
            value={user.email}
            error={errors.email}
          />
          <InputBox
            title="Phone Number"
            name="phone"
            placeholder="Phone Number"
            type="text"
            action={changeHandler}
            value={user.phone}
            error={errors.phone}
          />
          <InputBox
            title="Password"
            name="password"
            placeholder="Password"
            type="password"
            action={changeHandler}
            value={user.password}
            error={errors.password}
          />

          <span className="w-full text-sm text-right -mt-2">
            {"Already have an account?"}
            <Link href="/auth/login" className="text-defult-button">
              Login Now
            </Link>
          </span>
        </div>

        <button
          type="submit"
          className={`w-full p-[6px] px-2 border-[2px] border-defult-button bg-defult-button rounded-lg text-white shadow-3xl text-base focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Now'}
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;