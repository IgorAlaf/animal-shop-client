import { FC } from 'react'
import NavLine from '../nav-line/NavLine'
import { INavLineItem } from '../nav-line/navLine.interface'

interface IProps {
	list: INavLineItem[]
	title: string
}

const TemplateProfile: FC<IProps> = ({ list, title }) => {
	return (
		<div className='mt-[15px] tr:mt-[10px] lg:rounded-[30px] lg:bg-[#BBD6FB] lg:py-[11px] lg:px-[20px] lg:mx-[40px]'>
			<NavLine list={list} />
			<h1
				style={{ fontFamily: 'Mulish' }}
				className='text-[40px] font-semibold mt-[5px] lg:text-[20px] lg:mt-0 leading-none pt-[8px]'
			>
				{title}
			</h1>
		</div>
	)
}

export default TemplateProfile
