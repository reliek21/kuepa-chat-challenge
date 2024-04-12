import { Button } from '@/components/ui/shadcn';
import { IButtonIcon } from './interface/ButtonIcon.interface';

export default function ButtonIcon({ icon, text }: IButtonIcon) {
	return (
		<Button className='w-full flex items-center gap-2 '>
			<i className={`bi bi-${icon}`}></i> {text}
		</Button>
	);
}
