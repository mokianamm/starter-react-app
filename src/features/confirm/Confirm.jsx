import React, { useEffect, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import { history } from '../../utils/history'

const Confirm = () => {
  const [isActiveBtn, setActiveBtn] = useState(false)

  const onSubmitReCAPTCHA = async () => {
    setActiveBtn(!isActiveBtn);
  }

  const onBtnClick = async () => {
    localStorage.setItem("isValid", true)
    history.push('/verify')
  }

  useEffect(() => {
    localStorage.setItem('isValid', false)
  }, [])

  return (
    <div className='w-full min-h-screen flex justify-center' style={{
      backgroundColor: '#f0f2f5'
    }}>
      {/* Modal */}
      <div className='w-[640px] mt-16 bg-white h-full p-4 rounded-md sm: m-4 sm: mt-4'>
        <h2 className='font-bold text-3xl'>Help us confirm it's you</h2>
        {/* GCaptcha */}
        <div className='mt-4'>
          <ReCAPTCHA
            sitekey="6LeGGyQmAAAAAFRSkUUXu3QzJw5BZGlc4NbHbCdn"
            onChange={onSubmitReCAPTCHA}
          />
        </div>
        {/* GCaptcha */}
        <p className='mt-2'>
          This help us to combat harmful conduct, detect and prevent spam and maintain the integrity of our Products.
        </p>
        <p className='mt-2'>We've used Google's reCAPTCHA Enterprise product to provide this security check. You use of reCAPTCHA Enterprised is subject to Google's Privacy Policy and Terms of Use</p>
        <p className='mt-2'>reCAPTCHA Enterprise collects hardware and software information such as device and application data and sends it to Google to provide, maintain and improve reCAPTCHA Enterprise and for general security purpposes. This information is not used by Google for personalized advertising.</p>
        <button 
          className='w-full font-bold text-white rounded-lg p-2 mt-6' 
          disabled={!isActiveBtn} 
          onClick={onBtnClick}
          style={{
            backgroundColor: '#1877f2',
            opacity: isActiveBtn ? 1 : 0.6
          }}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default Confirm