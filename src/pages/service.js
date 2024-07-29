import ServiceByAirSection from '@/components/Service/ServiceByAirSection'
import ServiceBySeaSection from '@/components/Service/ServiceBySeaSection'
import ServiceHeaddingSection from '@/components/Service/ServiceHeaddingSection'
import React from 'react'

const service = () => {
  return (
    <>
      <ServiceHeaddingSection />
      <ServiceByAirSection />
      <ServiceBySeaSection/>
    </>
  )
}

export default service