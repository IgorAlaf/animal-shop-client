import { getProfileUrl } from '@/app/config/url.config'
import { ISidebarItem } from './sidebar.interface'

export const sidebarItems: ISidebarItem[] = [
	{
		title: 'Профиль',
		path: '/profile'
	},
	{
		title: 'Корзина',
		path: '/cart'
	},
	{
		title: 'Избранное',
		path: getProfileUrl('/favorites')
	},
	{
		title: 'Адрес доставки',
		path: getProfileUrl('/delivery-address')
	},
	{
		title: 'Любимые магазины',
		path: getProfileUrl('/favorite-shops')
	},
	{
		title: 'Личные данные',
		path: getProfileUrl('/personal')
	}
]
