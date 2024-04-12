import { useState } from 'react';

export function useShowPassword(): {
	handleClick: () => void;
	showPassword: boolean;
} {
	const [showPassword, setShowPassword]: [
		boolean,
		(value: ((prevState: boolean) => boolean) | boolean) => void
	] = useState<boolean>(false);
	const handleClick: () => void = (): void => setShowPassword(!showPassword);

	return { showPassword, handleClick };
}
