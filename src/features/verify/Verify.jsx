import React, { useEffect } from 'react'
import { history } from '../../utils/history'

const Verify = () => {
	const onBtnClick = async () => {
		history.push("/login")
	}

	useEffect(() => {
		const a = localStorage.getItem('isValid')
		if (!a) {
			history.push('/')
		}
	}, [])

  return (
	<div className='w-full min-h-screen flex justify-center' style={{
		backgroundColor: '#f0f2f5'
	  }}>
		{/* Modal */}
		<div className='w-[640px] mt-16 bg-white h-full p-4 rounded-md sm: m-4 sm: mt-4 flex flex-col items-center'>
	  	<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="Meta Logo" className='w-[128px]' />
			<img src="https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/386894033_864292488539640_8758190054425971914_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=MrSGWdvjP3YAX-W7K5x&_nc_ht=scontent.fhan5-11.fna&_nc_e2o=s&oh=03_AdRH6fszfRQ-kwq_pOw6W6iqiscYYVz_wVXZCddBNBwHmA&oe=654787E3" alt="Security Image" className='w-full rounded-md'/>
			<h2 className='font-bold text-3xl text-center'>Your account has been restricted</h2>
			<p className='text-center p-6'>Someone reported your account and and unfortunately your accout violeated our community standards.</p>
			<div className='flex p-2 rounded-lg' style={{
					backgroundColor: '#f3f3f3'
				}}>
				<img src="https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/275670475_3032859780311165_8411360244554331040_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=HaVrePA_Uq4AX8P3R_c&_nc_ht=scontent.fhan5-10.fna&_nc_e2o=s&oh=03_AdTnbLMO-dF58iCnHLDWf-KLBf3cr3Zlng78aHfNB67syQ&oe=654758A4" alt="Locked image" className='w-[64px] h-[64px] flex-1'/>
				<div className='ml-2'>
					<h3 className='font-bold text-lg'>Account will be lock after 48 hours if you not verify</h3>
					<p>To continue using, please verify account by click the button below and follow the instructions.</p>
				</div>
			</div>
			<button 
				className='w-full font-bold text-white rounded-md p-2 mt-6' 
				onClick={onBtnClick}
				style={{
					backgroundColor: '#1877f2'
				}}>
				Verify Account
			</button>
		</div>
	  </div>
  )
}

export default Verify