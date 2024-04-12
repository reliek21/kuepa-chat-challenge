import { UnderlineLink } from '@/components/ui/custom';

export default function LegalLoginText() {
	return (
		<span className='text-sm'>
			By signing in, you agree to the{' '}
			<UnderlineLink text='Terms of Service ' link='' />
			and <UnderlineLink text='Privacy Policy' link='' />
		</span>
	);
}
