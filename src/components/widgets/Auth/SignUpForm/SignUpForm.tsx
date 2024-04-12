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
				label='Nombre completo'
				placeholder='John Doe'
				value={name}
				onChange={handleChangeInput(setName)}
				required
			/>

			<InputLabel
				id='email'
				inputType='email'
				label='Ingresa tu correo'
				placeholder='name@email.com'
				value={email}
				onChange={handleChangeInput(setEmail)}
				required
				styles='mt-3'
			/>

			<InputLabel
				id='password'
				inputType='password'
				label='Ingresa tu contraseña'
				placeholder='**********'
				value={password}
				onChange={handleChangeInput(setPassword)}
				required
				styles='mt-3'
			/>

			<InputLabel
				id='password-repeat'
				inputType='password'
				label='Repite tu contraseña'
				placeholder='**********'
				value={passwordConfirm}
				onChange={handleChangeInput(setPasswordConfirm)}
				required
				styles='mt-3'
			/>

			<div className='flex flex-col gap-1 my-5'>
				<ValidatedText text='Corre valido' isValid={isValidEmail} />
				<ValidatedText
					text='Mayúsculas y minúsculas'
					isValid={hasUpperAndLowerLetters}
				/>
				<ValidatedText
					text='8 caracteres como mínimo'
					isValid={passwordLength}
				/>
				<ValidatedText
					text='Contienen al menos 1 número'
					isValid={passwordHasNumbers}
				/>
				<ValidatedText
					text='Contienen al menos un carácter especial'
					isValid={specialChars}
				/>
				<ValidatedText
					text='Coincidencia de contraseñas'
					isValid={confirmPassword}
				/>
			</div>

			<div className='grid w-full max-w-sm items-center gap-1.5'>
				<ButtonCustom
					buttonType='submit'
					text='Continuar'
					styles='mt-3'
					disabled={
						isSubmitted ||
						!isFormIncomplete ||
						!isValidEmail ||
						!confirmPassword
					}
				/>
			</div>
		</form>
	);
}
