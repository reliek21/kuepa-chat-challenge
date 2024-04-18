import { Button } from '@/components/ui/shadcn';
import { IButtonCustom } from './interface/ButtonCustom.interface';

export default function ButtonCustom({
	text,
	disabled = false,
	buttonType = 'button',
	styles
}: IButtonCustom) {
	return (
		<Button
			role='button'
			aria-label={`button for ${text}`}
			type={buttonType}
			className={styles}
			disabled={disabled}>
			{text}
		</Button>
	);
}
