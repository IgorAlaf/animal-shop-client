import { FC } from 'react'
import styles from './Cart.module.scss'
import Image from 'next/image'
import Link from 'next/link'
const Cart: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<Image
					className={styles.image}
					alt='cart'
					src='/images/food-cart.png'
					width={240}
					height={240}
				/>
				<h3 className={styles.title}>Корзина ждёт товаров</h3>
				<Link href='/' className={styles.button}>
					За покупками
				</Link>
			</div>
		</div>
	)
}

export default Cart
