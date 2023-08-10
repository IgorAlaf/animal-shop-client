'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, MouseEventHandler, useEffect, useState } from 'react'
import { navigation, navigationAuth, navigationProfile } from './navigation'
import Image from 'next/image'
import styles from './Header.module.scss'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import cn from 'classnames'
import useResize from '@/app/hooks/useResize'
const Header: FC = () => {
	const pathname = usePathname()
	const { user } = useAppSelector(store => store.userReducer)
	const [open, setOpen] = useState<boolean>(false)
	const { isScreenLg } = useResize()
	const handleClick: MouseEventHandler<HTMLDivElement> = e => {
		setOpen(prev => !prev)
	}
	useEffect(() => {
		if (!open || isScreenLg) {
			document.body.style.overflow = 'auto'
			return
		}
		if (!isScreenLg && open) {
			document.body.style.overflow = 'hidden'
		}
	}, [isScreenLg, open])
	const pathName = usePathname()
	useEffect(() => {
		setOpen(false)
	}, [pathName])
	return (
		<div>
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
					<div onClick={handleClick} className={styles.burger}>
						{open ? (
							<Image
								alt='close'
								src='/images/close.svg'
								width={25}
								height={25}
							/>
						) : (
							<>
								<span></span>
								<span></span>
								<span></span>
							</>
						)}
					</div>
				</div>
			</header>
			<div className={styles.rela}>
				<div
					className={cn(
						styles['modal-menu'],
						{ flex: open },
						{ hidden: !open }
					)}
				>
					<ul className={styles['modal-list']}>
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
				</div>
			</div>
		</div>
	)
}

export default Header
