import { FC } from 'react'
import TemplateProfile from '../ui/template-profile/TemplateProfile'
import Cart from '../components/cart/Cart'

const page: FC = () => {
	return (
		<div>
			<TemplateProfile
				list={[
					{ title: 'Главная', path: '/' },
					{ title: 'Карзина', path: '/cart' }
				]}
				title='Корзина'
			/>
			<Cart />
		</div>
	)
}

export default page
