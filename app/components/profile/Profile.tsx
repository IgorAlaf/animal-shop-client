import { FC } from 'react'
import { profileItems } from './profile.items'
import { link } from 'fs'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Profile.module.scss'
const Profile: FC = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				{profileItems.map((item, key) => (
					<li className={styles.item} key={key}>
						<Link className={styles.link} href={item.path}>
							<Image src={item.icon} alt='icon' width={40} height={40} />
							<span>{item.title}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Profile
