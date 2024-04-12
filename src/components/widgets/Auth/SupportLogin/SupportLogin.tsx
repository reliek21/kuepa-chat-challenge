import { TextLink } from '@/components/ui/custom';
import { MAIN_ROUTES } from '@/routes';

export default function SupportLogin() {
	return (
		<p
			role='contentinfo'
			aria-label='description'
			className='flex items-center gap-1 text-sm text-gray-500 mt-10'>
			Need help?
			<TextLink text='Contact support' link={MAIN_ROUTES.support} />
		</p>
	);
}
