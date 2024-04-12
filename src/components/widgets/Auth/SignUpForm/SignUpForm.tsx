'use client';

import { ButtonCustom, ValidatedText } from '@/components/ui/custom';
import { InputLabel } from '@/components/widgets';

import { useValidateForm } from './hooks/useValidateForm';
import { handleChangeInput } from '@/helpers';

export default function SignUpForm() {
	const {
		handleSubmit,
		name,
		setName,
		email,
		setEmail,
		password,
		setPassword,
		passwordConfirm,
		setPasswordConfirm,
		isValidEmail,
		hasUpperAndLowerLetters,
		passwordLength,
		passwordHasNumbers,
		specialChars,
		confirmPassword,
		isSubmitted,
		isFormIncomplete
	} = useValidateForm();

	return (
		<form
			action='#'
			onSubmit={handleSubmit}
			method='POST'
			className='mt-10 mb-5'>
			<InputLabel
				id='name'
				label='Full Name'
				placeholder='John Doe'
				value={name}
				onChange={handleChangeInput(setName)}
				required
			/>

			<InputLabel
				id='email'
				inputType='email'
				label='Enter your email'
				placeholder='name@email.com'
				value={email}
				onChange={handleChangeInput(setEmail)}
				required
				styles='mt-3'
			/>

			<InputLabel
				id='password'
				inputType='password'
				label='Enter your password'
				placeholder='**********'
				value={password}
				onChange={handleChangeInput(setPassword)}
				required
				styles='mt-3'
			/>

			<InputLabel
				id='password-repeat'
				inputType='password'
				label='Repeat your password'
				placeholder='**********'
				value={passwordConfirm}
				onChange={handleChangeInput(setPasswordConfirm)}
				required
				styles='mt-3'
			/>

			<div className='flex flex-col gap-1 my-5'>
				<ValidatedText text='Valid email address' isValid={isValidEmail} />
				<ValidatedText
					text='Mix of uppercase and lowercase'
					isValid={hasUpperAndLowerLetters}
				/>
				<ValidatedText
					text='Minimum 8 characters long'
					isValid={passwordLength}
				/>
				<ValidatedText
					text='Contain at least 1 number'
					isValid={passwordHasNumbers}
				/>
				<ValidatedText
					text='Contain at least one special character'
					isValid={specialChars}
				/>
				<ValidatedText text='Passwords match' isValid={confirmPassword} />
			</div>

			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<ButtonCustom
					text='Continue'
					styles='mt-3'
					disabled={
						isSubmitted || isFormIncomplete || !isValidEmail || !confirmPassword
					}
				/>
			</div>
		</form>
	);
}
