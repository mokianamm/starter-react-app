import React from 'react'

const Review = () => {
  return (
	<div className='w-full flex justify-center h-screen' style={{
		backgroundColor: '#f0f2f5'
		}}>
		{/* Content */}
		<div className='w-[640px] flex flex-col items-center mt-10 sm:mt-4 pb-20 pt-10 sm: m-4'>
			<div className='flex flex-col items-start w-full bg-white rounded-lg shadow-lg shadow-black-500/50 p-4'>
				<span className='font-bold text-sm text-gray-400'>Submission ID: {Date.now()}</span>
				<h2 className='font-bold text-2xl'>In review</h2>
				<div className='flex flex-col'>
					<div className='flex mt-4'>
						<img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t1.15752-9/370225231_867549801606089_5091083282423588098_n.png?stp=cp0_dst-png&_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=k0P7q1CSmFMAX90m5_S&_nc_ht=scontent.fhan5-8.fna&_nc_e2o=s&oh=03_AdSMjXhNST_J29wTsXC9OE1DSPBGjqhlIn00iZTRzSfSFg&oe=6547D962" alt="" className='w-[24px] h-[24px]'/>
						<div className='ml-4 text-gray-400'>
							<h3 className='font-bold'>Submission received</h3>
							<p>Your submission was received on {(new Date()).toLocaleString('en-US', { month: "short",
																			day: "numeric",})}</p>
						</div>
					</div>
					<div className='flex mt-4'>
						<img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t1.15752-9/387488705_212336278371990_7250828004441336840_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1W2RJzAzu_sAX9M_F_B&_nc_ht=scontent.fhan5-8.fna&_nc_e2o=s&oh=03_AdTmRnj1pZfPuRiZswAO_Z_XhynWztv4zNsVD4NIeI4swQ&oe=6547FB07" alt="" className='w-[24px] h-[24px]'/>
						<div className='ml-4'>
							<h3 className='font-bold'>In review</h3>
							<p>We're reviewing your submission. Review usually takes 48 hours.</p>
						</div>
					</div>
					<div className='flex mt-4'>
						<img src="https://scontent.fhan5-8.fna.fbcdn.net/v/t1.15752-9/387531079_642785794632894_3649486664840446834_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=o-3Ti1e99b0AX-yS8sW&_nc_ht=scontent.fhan5-8.fna&_nc_e2o=s&oh=03_AdS7nBHF-RBFWUTcLSOy2TWnFTERl1QdzE-nUgz51GqIZA&oe=6547CE26" alt="" className='w-[24px] h-[24px]'/>
						<div className='ml-4 text-gray-400'>
							<h3 className='font-bold'>Decision made</h3>
							<p>You'll receive an email once we've made a decision.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* Content */}
	</div>
  )
}

export default Review