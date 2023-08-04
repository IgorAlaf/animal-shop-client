'use client'
import { FC, useState } from 'react'
import styles from './Delivery.module.scss'
import Image from 'next/image'
import DeliveryForm from './DeliveryForm'
const DeliveryAddress: FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false)
	return (
		<div className={styles.wrapper}>
			<div className={styles.add}>
				<Image alt='truck' src='/images/truck.png' width={96} height={96} />
				<p className={styles.text}>
					Добавьте адрес чтобы быстрее
					<br /> оформлять заказы
				</p>
				<button onClick={e => setShowModal(true)} className={styles.button}>
					Добавьте адрес
				</button>
			</div>
			{showModal && <DeliveryForm setShowModal={setShowModal} />}
		</div>
	)
}

export default DeliveryAddress
