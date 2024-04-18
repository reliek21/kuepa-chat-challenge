import {
	emailRegex,
	numbersRegex,
	specialCharactersRegex,
	upperAndLowerCaseRegex
} from '@/constants';

export class FormDataValidatorHelper {
	public validatePasswordLength(password: string, minLength: number): boolean {
		return password.length >= minLength;
	}

	public matchPassword(password: string, confirmPassword: string): boolean {
		const passwordsNotEmpty: boolean =
			password.trim() !== '' && confirmPassword.trim() !== '';

		return (
			this.match(password) && this.match(confirmPassword) && passwordsNotEmpty
		);
	}

	public hasSpecialCharacters(password: string): boolean {
		return specialCharactersRegex.test(password);
	}

	public hasNumbers(password: string): boolean {
		return numbersRegex.test(password);
	}

	public hasUpperAndLowerCaseLetters(password: string): boolean {
		return upperAndLowerCaseRegex.test(password);
	}

	public validateEmail(email: string): boolean {
		return emailRegex.test(email);
	}

	private match(password: string): boolean {
		return (
			this.validatePasswordLength(password, 1) &&
			this.hasSpecialCharacters(password) &&
			this.hasNumbers(password) &&
			this.hasUpperAndLowerCaseLetters(password)
		);
	}
}
