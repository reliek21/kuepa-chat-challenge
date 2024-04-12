export const specialCharactersRegex: RegExp = /[^a-zA-Z0-9\s]*[^a-zA-Z0-9\s]/;
export const numbersRegex: RegExp = /\d.*\d/;
export const emailRegex: RegExp =
	/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const upperAndLowerCaseRegex: RegExp = /[a-z].*[A-Z]|[A-Z].*[a-z]/;
