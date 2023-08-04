import SectionNav from '../components/profile/section-navigate/SectionNav'
import Sidebar from '../components/profile/sidebar/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-blue-superlight flex-1'>
			<SectionNav />
			<main className='flex max-w-[1200px] mx-auto mt-[32px]'>
				<Sidebar />
				{children}
			</main>
		</div>
	)
}
