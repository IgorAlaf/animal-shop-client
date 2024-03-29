'use client'
import { useState, useEffect } from 'react'
const SCREEN_SM = 569
const SCREEN_TR = 425
const SCREEN_MD = 834
const SCREEN_LG = 870
const SCREEN_XL = 1200
const SCREEN_XXL = 1400
const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return {
		width,
		isScreenSm: width >= SCREEN_SM,
		isScreenMd: width >= SCREEN_MD,
		isScreenLg: width >= SCREEN_LG,
		isScreenXl: width >= SCREEN_XL,
		isScreenXxl: width >= SCREEN_XXL,
		isScreenTr: width > SCREEN_TR
	}
}
export default useResize
