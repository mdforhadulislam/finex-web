import { useRouter } from 'next/router'
import React from 'react'

const Single = () => {
    const router = useRouter()
    const {from,to} = router.query



  return (
    <div>Single</div>
  )
}

export default Single