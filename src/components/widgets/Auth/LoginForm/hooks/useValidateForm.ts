import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';

import { toast } from '@/components/ui/shadcn';

import { FormDataValidatorHelper } from '@/helpers/auth';
import { MAIN_ROUTES } from '@/routes';

export function useValidateFormLogin() {
	const router: any = useRouter();

	const dataValidator = new FormDataValidatorHelper();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	const isFormIncomplete: boolean = !email || !password;

	const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();

		if (!dataValidator.validateEmail(email)) {
			toast({
				title: 'Invalid Email',
				description: 'Please enter a valid email address.',
				variant: 'destructive'
			});
			return;
		}

		const response: SignInResponse | undefined = await signIn('credentials', {
			redirect: false,
			email: email,
			password: password
		});

		if (response?.status === 404) {
			toast({
				title: 'User not found',
				description: 'Please check your email address.',
				variant: 'destructive'
			});
			return;
		}

		if (response?.status === 400) {
			toast({
				title: 'Incorrect email or password',
				description: 'Please try again',
				variant: 'destructive'
			});

			return;
		}

		if (response?.error) {
			toast({
				title: 'Error signing in',
				description: 'An error occurred.'
			});
		} else {
			router.push(MAIN_ROUTES.dashboard);
		}
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
