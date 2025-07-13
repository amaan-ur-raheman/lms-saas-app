import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Subscription = () => {
  return (
    <div className='flex items-center justify-center h-full mt-10 mx-auto min-h-full px-10 my-auto'>
      <PricingTable />
    </div>
  )
}

export default Subscription