import bcrypt from 'bcryptjs';

export class BcryptHelper {
	public async comparePassword(
		plainPassword: string,
		hashedPassword: string
	): Promise<boolean> {
		return await bcrypt.compare(plainPassword, hashedPassword);
	}

	public async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}
}
