import Image from 'next/image'
import { FC } from 'react'
import styles from './Orders.module.scss'
const Orders: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<Image
					className={styles.image}
					src={'/images/shopping.svg'}
					alt='shopping'
					width={240}
					height={240}
				/>
				<h3 className={styles.text}>Пока что нет заказов</h3>
			</div>
		</div>
	)
}

export default Orders
