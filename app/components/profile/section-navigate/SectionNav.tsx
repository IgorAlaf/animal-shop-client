import { FC } from 'react'
import styles from './SectionNav.module.scss'
import { items } from './sectionNav.items'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'
const SectionNav: FC = () => {
	return (
		<div className={styles.wrapper}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					{items.map((item, key) => {
						if (item.title === 'Поиск') {
							return (
								<li className={cn(styles['item-search'])} key={key}>
									<Link className={styles.link} href={item.path}>
										<Image
											className={styles.image}
											src={item.icon}
											width={20}
											height={20}
											alt='icon'
										/>
										<span>{item.title}</span>
									</Link>
								</li>
							)
						}
						return (
							<li className={styles.item} key={key}>
								<Link className={styles.link} href={item.path}>
									<Image
										className={styles.image}
										src={item.icon}
										width={20}
										height={20}
										alt='icon'
									/>
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
			<ul className={styles['mobile-menu']}>
				<li className={cn(styles['mobile-menu__search'])}>
					<Link className={styles['mobile-menu__link']} href={'/'}>
						<Image
							className={styles.image}
							src={'/images/navigate-section/search.svg'}
							width={12}
							height={12}
							alt='icon'
						/>
						<span>Поиск</span>
					</Link>
				</li>
				<li className={styles['mobile-menu__catalog']}>
					<button type='button' className={styles.button}>
						<Image width={10} height={4} src='/images/menu.svg' alt='menu' />{' '}
						<span>Каталог товаров</span>
					</button>
				</li>
			</ul>
		</div>
	)
}

export default SectionNav
