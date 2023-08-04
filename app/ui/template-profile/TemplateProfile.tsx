import { FC } from 'react'
import NavLine from '../nav-line/NavLine'
import { INavLineItem } from '../nav-line/navLine.interface'

interface IProps {
	list: INavLineItem[]
	title: string
}

const TemplateProfile: FC<IProps> = ({ list, title }) => {
	return (
		<div className=' mt-[15px]'>
			<NavLine list={list} />
			<h1
				style={{ fontFamily: 'Mulish' }}
				className='text-[40px] font-semibold mt-[5px]'
			>
				{title}
			</h1>
		</div>
	)
}

export default TemplateProfile
