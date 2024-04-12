'use client';

import { ButtonCustom } from '@/components/ui/custom';
import { InputLabel } from '@/components/widgets';

import { handleChangeInput } from '@/helpers';
import { useValidateFormLogin } from './hooks/useValidateForm';

export default function LoginForm() {
	const {
		email,
		setEmail,
		password,
		setPassword,
		isSubmitted,
		handleSubmit,
		isFormIncomplete
	} = useValidateFormLogin();

	return (
		<form
			action='#'
			onSubmit={handleSubmit}
			method='POST'
			className='mt-10 mb-5'>
			<InputLabel
				id='email'
				inputType='email'
				label='Enter your email'
				placeholder='name@email.com'
				value={email}
				onChange={handleChangeInput(setEmail)}
				required
			/>

			<InputLabel
				id='password'
				inputType='password'
				label='Enter your password'
				placeholder='**********'
				hasForgotPassword={true}
				value={password}
				onChange={handleChangeInput(setPassword)}
				required
				styles='mt-3'
			/>

			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<ButtonCustom
					text='Continue'
					styles='mt-3'
					disabled={isSubmitted || isFormIncomplete}
				/>
			</div>
		</form>
	);
}
