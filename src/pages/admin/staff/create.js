import { LoadingContext } from "@/context/LoadingContext";
import { postRequestSend, REGISTER_API } from "@/data/ApiMethod";
import InputBox from "@/utils/InputBox";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const AddNewStaff = () => {
  const loading = useContext(LoadingContext)
  const [staffData, setStaffData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const changeHandler = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    loading.loadingStart()
    postRequestSend(REGISTER_API,{},{...staffData,role:"staff"}).then(res=>{
        loading.loadingEnd()
        if(res.status==200){
            console.log(res);
            
            toast.success(res.message)
        }
    })


  };

  return (
    <div className="w-full h-auto py-2" id="createrequest">
      <div className=" w-full h-auto p-2 shadow-3xl rounded-md pb-5">
        <div className="w-full h-auto py-2 pb-4">
          <h1 className="text-center text-lg font-semibold">Add New Staff</h1>
        </div>

        <div className="w-full h-auto flex flex-col gap-3">
          <InputBox
            title={"Name"}
            placeholder={"Name"}
            type={"text"}
            name={"name"}
            action={changeHandler}
          />
          <InputBox
            title={"Phone"}
            placeholder={"Phone"}
            type={"text"}
            name={"phone"}
            action={changeHandler}
          />
          <InputBox
            title={"Email"}
            placeholder={"Email"}
            type={"text"}
            name={"email"}
            action={changeHandler}
          />
          <InputBox
            title={"Password"}
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            action={changeHandler}
          />

          <button className="bg-defult-button text-base rounded-md text-white py-2 px-12 text-center w-full sm:w-auto" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewStaff;
