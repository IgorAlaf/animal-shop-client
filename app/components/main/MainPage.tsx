import { FC } from 'react'
import SectionNav from '@/app/components/profile/section-navigate/SectionNav'
import SliderPage from './slider/Slider'
import Categories from './categories/Categories'

const MainPage: FC = () => {
	return (
		<div>
			<SectionNav />
			<main className='max-w-[1200px] mx-auto mt-[60px]'>
				<SliderPage />
				<Categories />
			</main>
		</div>
	)
}

export default MainPage
