'use client';

import React from 'react';
import { Button, Input, Label } from '@/components/ui/shadcn';
import { TextLink } from '@/components/ui/custom';

import { useShowPassword } from './hooks/useShowPassword';
import { IInputLabel } from './interface/InputLabel.interface';

export default function InputLabel({
	id,
	label,
	placeholder,
	value,
	onChange,
	inputType = 'text',
	hasForgotPassword = false,
	required = false,
	styles
}: IInputLabel) {
	const {
		showPassword,
		handleClick
	}: { handleClick: () => void; showPassword: boolean } = useShowPassword();

	return (
		<div className={`grid w-full max-w-sm items-center gap-1.5 ${styles}`}>
			<Label aria-label={`Label of ${label}`} htmlFor={id}>
				{label}
			</Label>

			<div className='flex items-center relative'>
				<Input
					id={id}
					role='textbox'
					value={value}
					onChange={onChange}
					aria-label={`Input of ${label}`}
					type={inputType === 'password' && !showPassword ? 'password' : 'text'}
					placeholder={placeholder}
					required={required}
				/>

				{inputType === 'password' ? (
					<Button
						onClick={handleClick}
						type='button'
						variant='ghost'
						size='icon'
						className='absolute right-2 hover:bg-transparent'>
						<i
							className={`bi bi-${showPassword ? 'eye-slash' : 'eye'} text-zinc-900 text-base`}></i>
					</Button>
				) : null}
			</div>

			{hasForgotPassword && (
				<TextLink
					link='#'
					text='Forgot password?'
					hasArrow={false}
					styles='pr-0 justify-end text-gray-500 text-sm font-medium hover:underline'
				/>
			)}
		</div>
	);
}
