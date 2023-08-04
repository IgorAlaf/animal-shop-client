import { FC } from 'react'
import { INavLineItem } from './navLine.interface'
import Link from 'next/link'
import styles from './NavLine.module.scss'
import Image from 'next/image'
interface IProps {
	list: INavLineItem[]
}

const NavLine: FC<IProps> = ({ list }) => {
	return (
		<ul className={styles.list}>
			{list.map((item, key) => (
				<li className={styles.item} key={key}>
					<Link className={styles.link} href={item.path}>
						{item.title}
					</Link>

					{key !== list.length - 1 ? (
						<Image
							className='mt-[1px]'
							src={'/images/arrow.svg'}
							width={5}
							height={5}
							alt=''
						/>
					) : (
						''
					)}
				</li>
			))}
		</ul>
	)
}

export default NavLine
