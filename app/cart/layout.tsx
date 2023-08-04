import SectionNav from '@/app/components/profile/section-navigate/SectionNav'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='bg-blue-superlight flex-1'>
			<SectionNav />
			<main className='max-w-[1200px] mx-auto mt-[32px]'>{children}</main>
		</div>
	)
}
