import SectionNav from '@/app/components/profile/section-navigate/SectionNav'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-blue-superlight flex-1 lg:bg-blue-medium'>
			<SectionNav />
			<main className='max-w-[1200px] mx-auto mt-[32px] lg:mt-0'>
				{children}
			</main>
		</div>
	)
}
