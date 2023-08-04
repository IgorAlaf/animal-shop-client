import { FC } from 'react'
import styles from './Favorites.module.scss'
import Image from 'next/image'
const Favorites: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.button}>
				<Image
					src='/images/profile-items/brave.svg'
					alt='\/'
					width={20}
					height={20}
				/>
				<span>Избранное (0)</span>
			</button>
			<div className={styles['add-product']}>
				<Image
					src='/images/hand-heart.png'
					alt='image'
					width={96}
					height={96}
				/>
				<p>Добавляйте товары в избранное,чтобы не потерять их</p>
			</div>
		</div>
	)
}

export default Favorites
