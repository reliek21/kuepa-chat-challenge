import { IValidatedText } from './interface/ValidatedText.interface';

export default function ValidatedText({
	text,
	isValid = false
}: IValidatedText) {
	return (
		<div className='flex items-center gap-2'>
			<div
				className={`w-2 h-2 rounded ${isValid ? 'bg-green-500' : 'bg-red-500'}`}></div>
			<p className='text-sm text-zinc-900'>{text}</p>
		</div>
	);
}
