import { TextLink } from '@/components/ui/custom';
import { ILoginDescription } from './interface/LoginDescription.interface';

export default function LoginDescription({
	description,
	buttonText,
	buttonUrl
}: ILoginDescription) {
	return (
		<p
			role='contentinfo'
			aria-label='description'
			className='flex items-center gap-1 text-sm text-gray-500'>
			{description} <TextLink text={buttonText} link={buttonUrl} />
		</p>
	);
}
