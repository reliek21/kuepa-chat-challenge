import React from 'react';

type InputLabelType = 'text' | 'email' | 'password';

export interface IInputLabel {
	id: string;
	label: string;
	value?: string | number | undefined;
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
	placeholder?: string | undefined;
	inputType?: InputLabelType | undefined;
	hasForgotPassword?: boolean | undefined;
	styles?: string | undefined;
	required?: boolean | undefined;
}
