import { FC } from 'react'
import { items } from './categories.items'
import styles from './Categories.module.scss'
import Link from 'next/link'
import Image from 'next/image'
const Categories: FC = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{items.map((item, key) => {
					return (
						<li className={styles.item} key={key}>
							<div className={styles.content}>
								<h4 className={styles.title}>
									<Link href={item.path} className={styles.link}>
										{item.title}
									</Link>
								</h4>
								<ul className={styles.sublist}>
									{item.sublist.map((item, key) => {
										return (
											<li className={styles.subitem} key={key + '123'}>
												<Link className={styles.sublink} href={item.path}>
													{item.title}
												</Link>
											</li>
										)
									})}
								</ul>
								<div className={styles.add}>{item.addition}</div>
							</div>
							<div className={styles.image}>
								<img src={item.image} />
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Categories
