import React, { useState } from 'react';

export function useValidateFormLogin(): any {
	const [email, setEmail]: [
		string,
		(value: ((prevState: string) => string) | string) => void
	] = useState('');

	const [password, setPassword]: [
		string,
		(value: ((prevState: string) => string) | string) => void
	] = useState('');

	const [isSubmitted, setIsSubmitted]: [
		boolean,
		(value: ((prevState: boolean) => boolean) | boolean) => void
	] = useState<boolean>(false);

	const isFormIncomplete: boolean = !email || !password;

	const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
		e: React.FormEvent<HTMLFormElement>
	): void => {
		e.preventDefault();
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		isSubmitted,
		setIsSubmitted,
		handleSubmit,
		isFormIncomplete
	};
}
