'use client'

import { FC, useEffect } from 'react'
import styles from './Signup.module.scss'
import Image from 'next/image'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ISignupAuth } from './signup.interface'
import Link from 'next/link'
import cn from 'classnames'
import { useAppDispatch } from '@/app/hooks/useAppDispatch'
import { IAuthRegister } from '@/app/services/auth/auth.interface'
import { register as registration } from '@/app/store/user/user.actions'
import { redirect } from 'next/navigation'
import { useAppSelector } from '@/app/hooks/useAppSelector'
const page: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ISignupAuth>({ mode: 'onChange' })
	const { user } = useAppSelector(store => store.userReducer)
	const dispatch = useAppDispatch()
	const onSubmit: SubmitHandler<ISignupAuth> = async data => {
		const cred: IAuthRegister = {
			name: data.name,
			surname: data.surname,
			email: data.email,
			phone: data.phone,
			city: data.city,
			password: data.password
		}
		const response = await dispatch(registration(cred))
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
						width={101}
						height={101}
					/>
					<h1 className={styles.title}>
						Зарегистрируйтесь,чтобы получить бонусы
					</h1>
				</div>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div>
						<input
							type='text'
							{...register('name', {
								required: 'Имя обязательное поле',
								maxLength: {
									value: 50,
									message: 'Больше 50 символов'
								},
								minLength: 1
							})}
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.name
							})}
							placeholder='Имя'
						/>
						{errors.name?.type === 'required' && (
							<div className='text-red-500 text-sm md:text-[10px] md:top-[40%] tr:text-xs absolute top-[50.5%] left-[14%]'>
								{errors.name?.message}
							</div>
						)}
						{errors.name?.type === 'maxLength' && (
							<div className='text-red-500 text-sm md:text-[10px] md:top-[40%] tr:text-xs absolute top-[50.5%] left-[14%]'>
								{errors.name?.message}
							</div>
						)}
						<input
							type='text'
							{...register('surname', {
								required: 'Фамилия обязательное поле',
								maxLength: {
									value: 50,
									message: 'Больше 50 символов'
								},
								minLength: 1
							})}
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.surname
							})}
							placeholder='Фамилия'
						/>
						{errors.surname?.type === 'required' && (
							<div className='text-red-500 text-sm md:text-[10px] md:top-[46.5%] tr:text-xs absolute top-[50.5%] left-[14%]'>
								{errors.surname?.message}
							</div>
						)}
						{errors.surname?.type === 'maxLength' && (
							<div className='text-red-500 text-sm md:text-[10px] md:top-[46.5%] tr:text-xs absolute top-[50.5%] left-[14%]'>
								{errors.surname?.message}
							</div>
						)}
					</div>
					<div>
						<input
							type='email'
							{...register('email', {
								required: 'Email обязательное поле',
								maxLength: 100,
								pattern: {
									value:
										/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Введите верный email'
								}
							})}
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.email
							})}
							placeholder='Email'
						/>
						{errors.email?.type === 'required' && (
							<div className='text-red-500 text-sm md:text-[10px] tr:text-xs absolute top-[53%] left-[14%]'>
								{errors.email?.message}
							</div>
						)}
						{errors.email?.type === 'pattern' && (
							<div className='text-red-500 text-sm tr:text-xs md:text-[10px] absolute top-[53%] left-[14%]'>
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
							<div className='text-red-500 text-sm tr:text-xs md:text-[10px] absolute top-[59.5%] left-[14%]'>
								{errors.password?.message}
							</div>
						)}
						{errors.password?.type === 'minLength' && (
							<div className='text-red-500 text-sm tr:text-xs md:text-[10px] absolute top-[59.5%] left-[14%]'>
								{errors.password?.message}
							</div>
						)}
					</div>
					<div>
						<input
							type='tel'
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.phone
							})}
							{...register('phone', {
								required: 'Телефон обязательное поле'
							})}
							placeholder='Номер телефона'
						/>
						{errors.phone?.type === 'required' && (
							<div className='text-red-500 text-sm tr:text-xs md:text-[10px] absolute top-[65.8%] left-[14%]'>
								{errors.phone?.message}
							</div>
						)}
						<input
							type='password'
							{...register('recPassword', {
								required: 'Пароль обязательное поле',
								maxLength: 50,
								minLength: {
									value: 6,
									message: 'Минимум 6 символов'
								}
							})}
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.recPassword
							})}
							placeholder='Повторите пароль'
						/>
						{errors.recPassword?.type === 'required' && (
							<div className='text-red-500 text-sm tr:text-xs md:text-[10px] absolute top-[72%] left-[14%]'>
								{errors.recPassword?.message}
							</div>
						)}
						{errors.recPassword?.type === 'minLength' && (
							<div className='text-red-500 text-sm tr:text-xs md:text-[10px] absolute top-[72%] left-[14%]'>
								{errors.recPassword?.message}
							</div>
						)}
					</div>
					<div>
						<input
							type='text'
							{...register('city', {
								required: 'Город обязательное поле'
							})}
							className={cn([styles['input-normal']], {
								[styles['input-error']]: errors.city
							})}
							placeholder='Город'
						/>
						{errors.city?.type === 'required' && (
							<div className='text-red-500 text-sm tr:text-xs md:text-[10px] absolute top-[79%] left-[14%]'>
								{errors.city?.message}
							</div>
						)}
					</div>
					<div className={styles.send}>
						<h3>
							<Link href='/auth/signin'>Уже есть аккаунт ?</Link>
						</h3>
						<button>Зарегистрироваться</button>
					</div>
					<p className={styles.deal}>
						Продолжая, Вы даете согласие на<br></br>
						<span>сбор, обработку и хранение персональных данных</span>
					</p>
				</form>
			</div>
		</div>
	)
}

export default page
