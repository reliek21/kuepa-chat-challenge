export class FormDataValidator {
	public validatePasswordLength(password: string, minLength: number): boolean {
		return password.length >= minLength;
	}

	public matchPassword(password: string, confirmPassword: string): boolean {
		const passwordsMatch: boolean = password === confirmPassword;
		const passwordsNotEmpty: boolean =
			password.trim() !== '' && confirmPassword.trim() !== '';

		return passwordsMatch && passwordsNotEmpty;
	}

	public hasSpecialChars(password: string): boolean {
		const regex: RegExp = /[^a-zA-Z0-9\s]*[^a-zA-Z0-9\s]/;
		return regex.test(password);
	}

	public hasNumbers(password: string): boolean {
		const regex: RegExp = /\d.*\d/;
		return regex.test(password);
	}

	public hasUpperAndLowerCaseLetters(password: string): boolean {
		const regex: RegExp = /[a-z].*[A-Z]|[A-Z].*[a-z]/;
		return regex.test(password);
	}

	public validateEmail(email: string): boolean {
		const emailRegex: RegExp =
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
	}
}
