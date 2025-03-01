import WorkProcessBodySection from '@/components/About/WorkProcessBodySection'
import WorkProcessHeaderSection from '@/components/About/WorkProcessHeaderSection'
import HomeCustomerReview from '@/components/Home/HomeCustomerReview'
import Head from 'next/head'
import React from 'react'

const WorkProcess = () => {
  return (
    <>
    <Head>
      <title>Finex - Work Process</title>
    </Head>
      <WorkProcessHeaderSection />
      <WorkProcessBodySection />
      <HomeCustomerReview />
    </>
  )
}

export default WorkProcess