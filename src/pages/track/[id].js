import HomeHeroTrackBoxSection from '@/components/Home/HomeHeroTrackBoxSection';
import HomeTrackDetailsShowSection from '@/components/Home/HomeTrackDetailsShowSection';
import { useRouter } from 'next/router';
import React from 'react'

const SingleTrack = () => {
  const router = useRouter();

  return (
    <>
    <div className='w-full h-auto p-6 py-8 mt-5'>
    <HomeHeroTrackBoxSection />
    </div>

      <HomeTrackDetailsShowSection trackId={router.query.id} />
    </>
  );
};


export default SingleTrack