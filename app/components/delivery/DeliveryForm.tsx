import { FC } from 'react'
import styles from './Delivery.module.scss'
import cn from 'classnames'
import Image from 'next/image'

interface IProps {
	setShowModal: Function
}

const DeliveryForm: FC<IProps> = ({ setShowModal }) => {
	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<button
					onClick={() => {
						setShowModal(false)
					}}
					className={styles.close}
				>
					<Image src='/images/close.svg' alt='close' width={20} height={20} />
				</button>
				<div className={styles.form}>
					<Image
						src='/images/address-geo-icon.png'
						alt='address'
						width={240}
						height={240}
					/>
					<h2 className={styles.title}>Адрес доставки</h2>
					<form>
						<label>
							<h4>Название</h4>
							<input type='text' />
						</label>
						<label>
							<h4>Город</h4>
							<input placeholder='Населённый пункт получения' type='text' />
						</label>
						<label>
							<h4>Улица и дом</h4>
							<input type='text' />
						</label>
						<div className={styles.house}>
							<label>
								<h4>Кв. или офис</h4>
								<input type='text' />
							</label>
							<label>
								<h4>Подъезд</h4>
								<input type='text' />
							</label>
							<label>
								<h4>Этаж</h4>
								<input type='text' />
							</label>
						</div>
						<label>
							<h4>Дополнительно</h4>
							<textarea placeholder='Код домофона и другая полезная информация для курьера' />
						</label>
						<button className={styles.send}>Добавить</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default DeliveryForm
