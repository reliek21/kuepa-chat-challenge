import React, { useState } from 'react';
import { FormDataValidator } from '@/helpers';

export function useValidateForm(): any {
	const [name, setName]: [
		string,
		(value: ((prevState: string) => string) | string) => void
	] = useState<string>('');
	const [email, setEmail]: [
		string,
		(value: ((prevState: string) => string) | string) => void
	] = useState<string>('');
	const [password, setPassword]: [
		string,
		(value: ((prevState: string) => string) | string) => void
	] = useState<string>('');
	const [passwordConfirm, setPasswordConfirm]: [
		string,
		(value: ((prevState: string) => string) | string) => void
	] = useState<string>('');
	const [isSubmitted, setIsSubmitted]: [
		boolean,
		(value: ((prevState: boolean) => boolean) | boolean) => void
	] = useState<boolean>(false);

	const formDataValidator: FormDataValidator = new FormDataValidator();

	const isValidEmail: boolean = formDataValidator.validateEmail(email);
	const passwordLength: boolean = formDataValidator.validatePasswordLength(
		password,
		8
	);
	const confirmPassword: boolean = formDataValidator.matchPassword(
		password,
		passwordConfirm
	);
	const specialChars: boolean = formDataValidator.hasSpecialChars(password);
	const passwordHasNumbers: boolean = formDataValidator.hasNumbers(password);
	const hasUpperAndLowerLetters: boolean =
		formDataValidator.hasUpperAndLowerCaseLetters(password);

	const isFormIncomplete: boolean =
		!name || !email || !password || !passwordConfirm;

	const isFormValid: () => boolean = (): boolean => {
		return (
			isValidEmail &&
			passwordLength &&
			confirmPassword &&
			specialChars &&
			passwordHasNumbers &&
			hasUpperAndLowerLetters
		);
	};

	const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
		e: React.FormEvent<HTMLFormElement>
	): void => {
		e.preventDefault();
		setIsSubmitted(isFormValid());
	};

	return {
		name,
		setName,
		email,
		setEmail,
		password,
		setPassword,
		passwordConfirm,
		setPasswordConfirm,
		isSubmitted,
		handleSubmit,
		isValidEmail,
		passwordLength,
		confirmPassword,
		specialChars,
		passwordHasNumbers,
		hasUpperAndLowerLetters,
		isFormIncomplete,
		isFormValid
	};
}
