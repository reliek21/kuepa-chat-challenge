import Link from 'next/link';
import { IUnderlineLink } from './interface/UnderlineLink.interface';

export default function UnderlineLink({
	text,
	link,
	hasUnderline = true
}: IUnderlineLink) {
	return (
		<Link
			role='link'
			aria-label={`Link for ${text}`}
			href={link}
			className={`text-gray-500 ${hasUnderline && 'underline'}`}>
			{text}
		</Link>
	);
}
