import { FC } from 'react'
import styles from './FavoriteShops.module.scss'
import Image from 'next/image'
const FavoriteShops: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.add}>
				<Image
					alt='truck'
					src='/images/shop.svg'
					className={styles.image}
					width={96}
					height={96}
				/>
				<p className={styles.text}>
					С любимыми магазинами вы сможете быстрее найти товары и проще покупать
				</p>
				<button className={styles.button}>Добавьте адрес</button>
			</div>
		</div>
	)
}

export default FavoriteShops
