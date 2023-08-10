'use client'

import { FC, useEffect } from 'react'
import styles from './Signin.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ISigninAuth } from './signin.interface'
import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import { useAppDispatch } from '@/app/hooks/useAppDispatch'
import { login } from '@/app/store/user/user.actions'
import { IAuthLogin } from '@/app/services/auth/auth.interface'
import { redirect } from 'next/navigation'
import { useAppSelector } from '@/app/hooks/useAppSelector'
import useResize from '@/app/hooks/useResize'
const page: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ISigninAuth>({ mode: 'onChange' })
	const dispatch = useAppDispatch()
	const { user } = useAppSelector(store => store.userReducer)
	const { isScreenMd, isScreenSm } = useResize()
	const onSubmit: SubmitHandler<ISigninAuth> = async data => {
		const cred: IAuthLogin = {
			email: data.email,
			password: data.password
		}
		const response = await dispatch(login(cred))
	}
	useEffect(() => {
		if (user) {
			redirect('/')
		}
	}, [user])
	return (
		<div className={styles.main}>
			<div className={styles.wrapper}>
				<div className={styles.graduation}>
					<Image
						draggable={false}
						className={styles.image}
						src='/images/dog.png'
						alt='Dog'
						width={isScreenMd ? 101 : 61}
						height={isScreenMd ? 101 : 61}
					/>
					<h1 className={styles.title}>
						Войти,<br></br>чтобы получить бонусы
					</h1>
				</div>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div>
						<input
							type='text'
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.email
							})}
							{...register('email', {
								required: 'Email обязательное поле',
								maxLength: 100,
								pattern: {
									value:
										/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Пожалуйста введите правильный email'
								}
							})}
							placeholder='Email'
						/>
						{errors.email?.type === 'required' && (
							<div className='text-red-500 text-sm tr:text-xs absolute top-[54%] left-[31%] md:top-[49.8%] md:left-[12%] hr:left-[15%] '>
								{errors.email?.message}
							</div>
						)}
						{errors.email?.type === 'pattern' && isScreenSm && (
							<div className='text-red-500 text-sm tr:text-xs absolute top-[54%] left-[31%] md:top-[49.8%] md:left-[12%]'>
								{errors.email?.message}
							</div>
						)}
						<input
							type='password'
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.password
							})}
							{...register('password', {
								required: 'Пароль обязательное поле',
								maxLength: 50,
								minLength: {
									value: 6,
									message: 'Минимум 6 символов'
								}
							})}
							placeholder='Пароль'
						/>
						{errors.password?.type === 'required' && (
							<div className='text-red-500 text-sm tr:text-xs absolute top-[64%] left-[31%] md:top-[60.5%] md:left-[12%] hr:left-[15%]'>
								{errors.password?.message}
							</div>
						)}
						{errors.password?.type === 'minLength' && (
							<div className='text-red-500 text-sm tr:text-xs absolute top-[64%] left-[31%] md:top-[60.5%] md:left-[12%] hr:left-[15%]'>
								{errors.password?.message}
							</div>
						)}
					</div>
					<div className={styles.send}>
						<button>Войти</button>
						<h3>
							<Link href='/auth/signup'>Ещё нет аккаунта ?</Link>
						</h3>
					</div>
				</form>
				<p className={styles.deal}>
					Продолжая, Вы даете согласие на<br></br>
					<span>сбор, обработку и хранение персональных данных</span>
				</p>
			</div>
		</div>
	)
}

export default page
