import Personal from '@/app/components/personal/Personal'
import { getProfileUrl } from '@/app/config/url.config'
import TemplateProfile from '@/app/ui/template-profile/TemplateProfile'
import { FC } from 'react'

const PersonalPage: FC = () => {
	return (
		<div className='ml-[25px] flex-auto'>
			<TemplateProfile
				title='Личные данные'
				list={[
					{ title: 'Главная', path: '/' },
					{ title: 'Профиль', path: '/profile' },
					{ title: 'Персональные данные', path: getProfileUrl('/personal') }
				]}
			/>
			<Personal />
		</div>
	)
}

export default PersonalPage
