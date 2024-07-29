import IsBangla from '@/utils/IsBangla'
import IsEnglish from '@/utils/IsEnglish'
import React from 'react'

const HomeHeddingSection = () => {
  return (
    <div className="w-full h-auto bg-defult text-white">
    <IsEnglish className="lg:container h-auto m-auto p-4 py-8 text-center flex justify-center align-middle items-center flex-col">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold p-4">
        Delivering what truly matters is our utmost priority
      </h1>
      <p className="w-full h-auto text-base p-2 py-4">
        At AICS, we don’t simply deliver from A to B; we deliver from person
        to person. When we gaze upon the boxes, we don’t merely see parcels;
        we perceive the individuals behind them.
      </p>
      <p className="w-full h-auto text-base p-2 py-3">
        These parcels contain the hopes, dreams, and aspirations of our
        esteemed customers. There are stories in these boxes. Stories about
        things people care about. And since these things are important to our
        customers, they are also important to us.
      </p>
    </IsEnglish>
    <IsBangla className="lg:container h-auto m-auto p-4 py-8 text-center flex justify-center align-middle items-center flex-col">
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold p-4 bfont">
      সত্যিকার অর্থে যা গুরুত্বপূর্ণ তা সরবরাহ করা আমাদের সর্বোচ্চ অগ্রাধিকার
      </h1>
      <p className="w-full h-auto text-xl p-2 py-4 bfont">
      ফিনেক্স-এ, আমরা কেবল A থেকে B পর্যন্ত বিতরণ করি না; আমরা ব্যক্তি থেকে ব্যক্তি বিতরণ. যখন আমরা বাক্সগুলির দিকে তাকাই, আমরা কেবল পার্সেলগুলি দেখতে পাই না; আমরা তাদের পিছনে ব্যক্তি উপলব্ধি.
      </p>
      <p className="w-full h-auto text-xl p-2 py-3 bfont">
      এই পার্সেলগুলিতে আমাদের সম্মানিত গ্রাহকদের আশা, স্বপ্ন এবং আকাঙ্ক্ষা রয়েছে। এসব বাক্সে গল্প আছে। লোকেদের যত্ন নেওয়া জিনিসগুলির গল্প। এবং যেহেতু এই জিনিসগুলি আমাদের গ্রাহকদের জন্য গুরুত্বপূর্ণ, সেগুলি আমাদের কাছেও গুরুত্বপূর্ণ।
      </p>
    </IsBangla>
  </div>
  )
}

export default HomeHeddingSection