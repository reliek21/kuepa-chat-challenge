import { UnderlineLink } from '@/components/ui/custom';
import { LEGAL_ROUTES } from '@/routes';

export default function LegalLoginText() {
	return (
		<span className='text-sm'>
			By signing in, you agree to the{' '}
			<UnderlineLink text='Terms of Service ' link={LEGAL_ROUTES.term} />
			and <UnderlineLink text='Privacy Policy' link={LEGAL_ROUTES.privacy} />
		</span>
	);
}
