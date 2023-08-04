import Favorites from '@/app/components/favorites/Favorites'
import { getProfileUrl } from '@/app/config/url.config'
import TemplateProfile from '@/app/ui/template-profile/TemplateProfile'
import { FC } from 'react'

const page: FC = () => {
	return (
		<div className='flex-auto ml-[25px]'>
			<TemplateProfile
				title='Избранное'
				list={[
					{ title: 'Главная', path: '/' },
					{ title: 'Профиль', path: '/profile' },
					{ title: 'Избранное', path: getProfileUrl('/favorites') }
				]}
			/>
			<Favorites />
		</div>
	)
}

export default page
