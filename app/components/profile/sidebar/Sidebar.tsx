import { FC } from 'react'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { sidebarItems } from './sidebar.items'
import Link from 'next/link'
const Sidebar: FC = () => {
	return (
		<div className={styles.wrapper}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					{sidebarItems.map((item, key) => {
						return (
							<li className={styles.item} key={key}>
								<Link className={styles.link} href={item.path}>
									{item.title}
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar
