import Orders from '@/app/components/orders/Orders'
import { getProfileUrl } from '@/app/config/url.config'
import TemplateProfile from '@/app/ui/template-profile/TemplateProfile'
import { FC } from 'react'

const page: FC = () => {
	return (
		<div className='ml-[25px] flex-auto lg:ml-[0px]'>
			<TemplateProfile
				title='Мои заказы'
				list={[
					{ title: 'Главная', path: '/' },
					{ title: 'Профиль', path: '/profile' },
					{ title: 'Мои заказы', path: getProfileUrl('/orders') }
				]}
			/>
			<Orders />
		</div>
	)
}

export default page
