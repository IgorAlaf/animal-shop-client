'use client'
import Image from 'next/image'
import { FC } from 'react'
import Slider, { Settings } from 'react-slick'
import cn from 'classnames'

function SampleNextArrow(props: any) {
	const { onClick } = props
	return (
		<div
			className='cursor-pointer absolute right-[2%]  bottom-[-85px] z-[1]  pr-[12px] pl-[16px] py-[9px] bg-purple-bg rounded-full '
			onClick={onClick}
		>
			<Image
				src={'/images/slider/slide-next.svg'}
				width={14}
				height={14}
				alt='arr'
			/>
		</div>
	)
}
function SamplePrevArrow(props: any) {
	const { onClick } = props
	return (
		<div
			className='cursor-pointer absolute left-[1%] bottom-[-85px]  z-[1] bg-purple-bg rounded-full pl-[12px] pr-[16px] py-[9px]'
			onClick={onClick}
		>
			<Image
				src={'/images/slider/slide-prev.svg'}
				width={14}
				height={14}
				alt='arr'
			/>
		</div>
	)
}
const SliderPage: FC = () => {
	let settings: Settings = {
		customPaging: function (i) {
			return (
				<div className='dots-div mt-[60px] h-[15px] w-[15px] bg-white rounded-[50%]'></div>
			)
		},
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />
	}
	return (
		<Slider {...settings}>
			<div>
				<Image
					alt='slide'
					src='/images/slider/slider-1.svg'
					width={588}
					height={211}
					className='mx-[5px]'
				/>
			</div>
			<div>
				<Image
					alt='slide'
					src='/images/slider/slider-2.svg'
					width={588}
					height={211}
					className='mx-[5px]'
				/>
			</div>
			<div>
				<Image
					alt='slide'
					src='/images/slider/slider-1.svg'
					width={588}
					height={211}
					className='mx-[5px]'
				/>
			</div>
			<div>
				<Image
					alt='slide'
					src='/images/slider/slider-2.svg'
					width={588}
					height={211}
					className='mx-[5px]'
				/>
			</div>
			<div>
				<Image
					alt='slide'
					src='/images/slider/slider-1.svg'
					width={588}
					height={211}
					className='mx-[5px]'
				/>
			</div>
			<div>
				<Image
					alt='slide'
					src='/images/slider/slider-2.svg'
					width={588}
					height={211}
					className='mx-[5px]'
				/>
			</div>
		</Slider>
	)
}

export default SliderPage
