import { LoadingContext } from "@/context/LoadingContext";
import { CONTACT_API, postRequestSend } from "@/data/ApiMethod";
import InputBox from "@/utils/InputBox";
import IsBangla from "@/utils/IsBangla";
import IsEnglish from "@/utils/IsEnglish";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const ContactDetailsFrom = () => {
  const loading=useContext(LoadingContext)
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    date: new Date(),
  });


  const changeHandler = (e)=>{
    setContactData({...contactData,[e.target.name]:e.target.value})
  }


  const submitHandler=(e)=>{
    e.preventDefault()
    loading.loadingStart()
    console.log(contactData);
    
    postRequestSend(CONTACT_API,{},contactData).then(res=>{
    loading.loadingEnd()
    console.log(res);

     if(res.status==200){
      toast.success(res.message)
     }else{
      toast.error(res.message)
     }
    })




  }

  return (
    <form className=" w-full h-auto flex flex-col gap-3" onSubmit={submitHandler}>
      <InputBox
        title={"Name"}
        placeholder={"Name"}
        type={"text"}
        name={"name"}
        value={contactData.name}
        action={changeHandler}
      />
      <InputBox
        title={"Phone"}
        placeholder={"Phone"}
        type={"text"}
        name={"phone"}
        value={contactData.phone}
        action={changeHandler}
      />
      <InputBox
        title={"E-mail"}
        placeholder={"E-mail"}
        type={"text"}
        name={"email"}
        value={contactData.email}
        action={changeHandler}
      />
      <InputBox
        title={"Message"}
        placeholder={"Message"}
        type={"text"}
        isTextArea={true}
        name={"message"}
        value={contactData.message}
        action={changeHandler}
      />

      <IsEnglish>
        <button className="px-4 py-2 text-center text-[16.6px] shadow  hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full">
          Send Message
        </button>
      </IsEnglish>

      <IsBangla>
        <button className="px-4 py-[4px] bfont text-2xl text-center  shadow  hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full">
          সেন্ড ম্যাসেজ
        </button>
      </IsBangla>
    </form>
  );
};

export default ContactDetailsFrom;
