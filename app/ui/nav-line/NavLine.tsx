'use client'
import { FC } from 'react'
import { INavLineItem } from './navLine.interface'
import Link from 'next/link'
import styles from './NavLine.module.scss'
import Image from 'next/image'
import useResize from '@/app/hooks/useResize'
interface IProps {
	list: INavLineItem[]
}

const NavLine: FC<IProps> = ({ list }) => {
	const { isScreenLg } = useResize()
	return (
		<ul className={styles.list}>
			{isScreenLg ? (
				list.map((item, key) => (
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
				))
			) : (
				<li className={styles.item}>
					<Image src={'/images/arrow-left.svg'} width={5} height={5} alt='' />
					<Link className={styles.link} href={list[list.length - 2].path}>
						{list[list.length - 2].title}
					</Link>
				</li>
			)}
		</ul>
	)
}

export default NavLine
