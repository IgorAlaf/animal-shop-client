'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { navigation, navigationAuth, navigationProfile } from './navigation'
import Image from 'next/image'
import styles from './Header.module.scss'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import { navItem } from './header.interface'

const Header: FC = () => {
	const pathname = usePathname()
	const { user } = useAppSelector(store => store.userReducer)

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<Link className={styles.logo} href='/'>
					Лого
				</Link>{' '}
				<nav className={styles.nav}>
					<ul className={styles.list}>
						{user
							? navigationProfile.map((item, key) => {
									return (
										<li className={styles.item} key={key}>
											<Link className={styles.link} href={item.path}>
												<Image
													className={styles['link-img']}
													src={item.img}
													alt='ic'
													width={20}
													height={20}
												/>{' '}
												<span className={styles['link-text']}>
													{item.title}
												</span>
											</Link>
										</li>
									)
							  })
							: pathname === '/auth/signin' || pathname === '/auth/signup'
							? navigationAuth.map((item, key) => {
									return (
										<li className={styles.item} key={key}>
											<Link className={styles.link} href={item.path}>
												<Image
													className={styles['link-img']}
													src={item.img}
													alt='ic'
													width={20}
													height={20}
												/>{' '}
												<span className={styles['link-text']}>
													{item.title}
												</span>
											</Link>
										</li>
									)
							  })
							: navigation.map((item, key) => {
									return (
										<li className={styles.item} key={key}>
											<Link className={styles.link} href={item.path}>
												<Image
													className={styles['link-img']}
													src={item.img}
													alt='ic'
													width={20}
													height={20}
												/>{' '}
												<span className={styles['link-text']}>
													{item.title}
												</span>
											</Link>
										</li>
									)
							  })}
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
