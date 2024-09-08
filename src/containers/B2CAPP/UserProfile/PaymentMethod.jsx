import React from 'react'

const PaymentMethod = ({children}) => {
  return (
    <div class="w-full justify-between items-start inline-flex">
      <div class="justify-start items-start gap-20 flex">
        <div class="flex-col justify-start items-start gap-4 inline-flex">
          <div class="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Payment Method</div>
          <div class="justify-start items-start gap-3 inline-flex">
            <img class="w-9 h-6" src="/icons/mastercard_icon.png" />
            <div class="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">**** 1234</div>
          </div>
        </div>
        <div class="flex-col justify-start items-start gap-4 inline-flex">
          <div class="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">Expiry Date</div>
          <div class="text-[#404453] text-base font-medium font-['Plus Jakarta Sans'] leading-normal">09/2024</div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default PaymentMethod