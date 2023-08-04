import { getProfileUrl } from '@/app/config/url.config'
import { IProfileItem } from './profile.interface'

export const profileItems: IProfileItem[] = [
	{
		icon: '/images/profile-items/cart.svg',
		title: 'Мои заказы',
		path: getProfileUrl('orders')
	},
	{
		icon: '/images/profile-items/basket.svg',
		title: 'Корзина',
		path: '/cart'
	},
	{
		icon: '/images/profile-items/brave.svg',
		title: 'Избранное',
		path: getProfileUrl('favorites')
	},
	{
		icon: '/images/profile-items/truck.svg',
		title: 'Адреса доставки',
		path: getProfileUrl('delivery-address')
	},
	{
		icon: '/images/profile-items/shop.svg',
		title: 'Любимые магазины',
		path: getProfileUrl('favorite-shops')
	},
	{
		icon: '/images/profile-items/encrypt.svg',
		title: 'Личные данные',
		path: getProfileUrl('personal')
	}
]
