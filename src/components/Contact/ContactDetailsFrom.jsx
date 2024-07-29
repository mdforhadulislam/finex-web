import InputBox from '@/utils/InputBox'
import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import React from 'react'

const ContactDetailsFrom = () => {
  return (
    <form className=' w-full h-auto flex flex-col gap-3'>
    <InputBox title={"Name"} placeholder={"Name"} type={"text"} />
    <InputBox title={"Phone"} placeholder={"Phone"} type={"text"} />
    <InputBox title={"E-mail"} placeholder={"E-mail"} type={"text"} />
    <InputBox title={"Message"} placeholder={"Message"} type={"text"} isTextArea={true} />

    <IsEnglish>
    <button className='px-4 py-2 text-center text-[16.6px] shadow  hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full'>Send Message</button>
    </IsEnglish>

    <IsBangla>
    <button className='px-4 py-[4px] bfont text-2xl text-center  shadow  hover:bg-defult-button bg-defult-button text-white transition duration-300 block rounded-md w-full'>সেন্ড ম্যাসেজ</button>
    </IsBangla>
</form>
  )
}

export default ContactDetailsFrom