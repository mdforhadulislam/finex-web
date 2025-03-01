import OurTeamMemberBodySection from '@/components/About/OurTeamMemberBodySection'
import OurTeamMemberSection from '@/components/About/OurTeamMemberSection'
import Head from 'next/head'
import React from 'react'

const OurTeamMember = () => {
  return (
    <>
    <Head>
      <title>Finex - Team Member</title>
    </Head>
      <OurTeamMemberSection />
      <OurTeamMemberBodySection />
    </>
  )
}

export default OurTeamMember