import { FC } from 'react'
import styles from './Personal.module.scss'
const Personal: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main}>
				<h3 className={styles.title}>Профиль</h3>
				<form className={styles.form}>
					<label className={styles.label}>
						<h4>Телефон</h4>
						<input type='tel' />
					</label>
					<label className={styles.label}>
						<h4>Электронная почта</h4>
						<input type='email' />
					</label>
					<label className={styles.label}>
						<h4>Имя</h4>
						<input type='text' />
					</label>
					<label className={styles.label}>
						<h4>Фамилия</h4>
						<input type='text' />
					</label>
					<label className={styles.label}>
						<h4>Город</h4>
						<input type='text' />
					</label>
					<div className={styles['wrapper-bottom']}>
						<label>
							<h4>День рождения</h4>
							<input type='text' placeholder='дд.мм.гггг' />
						</label>
						<label>
							<h4>Пол</h4>
							<div className={styles.sex}>
								<button type='button'>Мужской</button>
								<button type='button'>Женский</button>
							</div>
						</label>
					</div>
					<button className={styles.button}>Сохранить</button>
				</form>
			</div>
		</div>
	)
}

export default Personal
