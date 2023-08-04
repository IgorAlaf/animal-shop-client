import DeliveryAddress from '@/app/components/delivery/DeliveryAddress'
import { getProfileUrl } from '@/app/config/url.config'
import TemplateProfile from '@/app/ui/template-profile/TemplateProfile'
import { FC } from 'react'

export default function page() {
	return (
		<div className='ml-[25px]'>
			<TemplateProfile
				title='Адреса доставки'
				list={[
					{ title: 'Главная', path: '/' },
					{ title: 'Профиль', path: '/profile' },
					{ title: 'Адреса доставки', path: getProfileUrl('/delivery-address') }
				]}
			/>
			<DeliveryAddress />
		</div>
	)
}
