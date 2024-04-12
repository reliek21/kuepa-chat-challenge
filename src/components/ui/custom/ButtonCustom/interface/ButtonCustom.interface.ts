type ButtonType = 'button' | 'submit';

export interface IButtonCustom {
	text: string;
	disabled?: boolean;
	buttonType?: ButtonType | undefined;
	styles?: string;
}
