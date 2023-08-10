import { ICart } from './categories.interface'

export const items: ICart[] = [
	{
		title: 'Кошки',
		path: '/cats',
		sublist: [
			{ title: 'Корм для кошек', path: '/' },
			{ title: 'Лакомства для кошек', path: '/' },
			{ title: 'Наполнители для кошек', path: '/' },
			{ title: 'Аксессуары для кормления кошек', path: '/' }
		],
		image: '/images/categories/cats.svg',
		addition: 'Все 10 категорий'
	},
	{
		title: 'Собаки',
		path: '/dogs',
		sublist: [
			{ title: 'Корм для собак', path: '/' },
			{ title: 'Лакомства для собак', path: '/' },
			{ title: 'Товары для перевозки и содержания собак', path: '/' },
			{
				title: 'Инструменты для груминга и косметика для собак',
				path: '/'
			}
		],
		image: '/images/categories/dogs.svg',
		addition: 'Все 11 категорий'
	},
	{
		title: 'Котята',
		path: '/kits',
		sublist: [
			{ title: 'Косметика и гигиена для котят', path: '/' },
			{ title: 'Корм для котят', path: '/' }
		],
		image: '/images/categories/kits.svg'
	},
	{
		title: 'Щенки',
		path: '/puppies',
		sublist: [
			{ title: 'Косметика и гигиена для щенят', path: '/' },
			{ title: 'Корм для щенят', path: '/' }
		],
		image: '/images/categories/puppies.svg'
	}
]
