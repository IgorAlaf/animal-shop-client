import Profile from '../components/profile/Profile'
import NavLine from '../ui/nav-line/NavLine'
import TemplateProfile from '../ui/template-profile/TemplateProfile'

export default function ProfilePage() {
	return (
		<div className='ml-[25px] lg:ml-[0px] '>
			<TemplateProfile
				title='Профиль'
				list={[
					{ title: 'Главная', path: '/' },
					{ title: 'Профиль', path: '/profile' }
				]}
			/>
			<Profile />
		</div>
	)
}
