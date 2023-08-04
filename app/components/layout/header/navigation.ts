import { navItem } from './header.interface'

export const navigation: navItem[] = [
	{
		title: 'Вход и регистрация',
		img: '/images/arrow-right.svg',
		path: '/auth/signup'
	},
	{
		title: 'Бонусная карта',
		img: '/images/gift.svg',
		path: '/'
	},
	{
		title: 'Корзина',
		img: '/images/add-shop.svg',
		path: '/cart'
	}
]
export const navigationAuth: navItem[] = [
	{
		title: 'Вход и регистрация',
		img: '/images/arrow-right.svg',
		path: '/auth/signup'
	},
	{
		title: 'Корзина',
		img: '/images/add-shop.svg',
		path: '/cart'
	}
]

export const navigationProfile: navItem[] = [
	{
		title: 'Профиль',
		img: '/images/profile.svg',
		path: '/profile'
	},
	{
		title: 'Бонусная карта',
		img: '/images/gift.svg',
		path: '/'
	},
	{
		title: 'Корзина',
		img: '/images/add-shop.svg',
		path: '/cart'
	}
]
