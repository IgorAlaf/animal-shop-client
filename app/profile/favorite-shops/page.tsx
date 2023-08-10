import FavoriteShops from '@/app/components/favorite-shops/FavoriteShops'
import { getProfileUrl } from '@/app/config/url.config'
import TemplateProfile from '@/app/ui/template-profile/TemplateProfile'
import { FC } from 'react'

const page = () => {
	return (
		<div className='ml-[25px] lg:ml-[0px]'>
			<TemplateProfile
				title='Любимые магазины'
				list={[
					{ title: 'Главная', path: '/' },
					{ title: 'Профиль', path: '/profile' },
					{ title: 'Любимые магазины', path: getProfileUrl('/favorite-shops') }
				]}
			/>
			<FavoriteShops />
		</div>
	)
}

export default page
