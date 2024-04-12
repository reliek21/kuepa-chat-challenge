import { Separator } from '@/components/ui/shadcn';
import { ISeparatorText } from './interface/SeparatorText.interface';

export default function SeparatorText({ text, className }: ISeparatorText) {
	return (
		<div className={`flex items-center justify-between ${className}`}>
			<Separator className='w-2/12 bg-gray-500' />
			<p className='text-sm text-gray-500'>{text}</p>
			<Separator className='w-2/12 bg-gray-500' />
		</div>
	);
}
