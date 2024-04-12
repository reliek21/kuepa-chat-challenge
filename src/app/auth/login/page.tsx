import { Metadata } from 'next';
import { MarginContainer } from '@/components/ui/custom';
import { LoginSection } from '@/sections';

// TODO: improve SEO here
export const metadata: Metadata = {
	title: 'Login',
	description: 'Login page'
};

export default function LoginPage() {
	return (
		<main className='min-h-screen flex items-center justify-center flex-col bg-gradient-to-br from-orange-100'>
			<MarginContainer>
				<LoginSection />
			</MarginContainer>
		</main>
	);
}
