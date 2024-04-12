import Link from 'next/link';
import { ITextLink } from './interface/TextLink.interface';

export default function TextLink({
	text,
	link,
	hasArrow = true,
	styles
}: ITextLink) {
	return (
		<Link
			role='link'
			aria-label={`Link for ${text}`}
			href={link}
			className={`flex items-center font-bold text-amber-500 ${styles}`}>
			{text}
			{hasArrow && (
				<i className='bi bi-arrow-right-short text-2xl text-amber-500'></i>
			)}
		</Link>
	);
}
