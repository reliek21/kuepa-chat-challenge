import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';

interface ISignUpSchema {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const signUpSchema: z.ZodEffects<z.ZodObject<ISignUpSchema | any>> = z
	.object({
		firstName: z
			.string({
				required_error: 'First name is required'
			})
			.min(1)
			.min(2)
			.max(50),
		lastName: z
			.string({
				required_error: 'lastName is required'
			})
			.min(1)
			.min(2)
			.max(50),
		email: z.string().email(),
		password: z.string().min(6).max(50),
		confirmPassword: z.string().min(6).max(50)
	})
	.refine(
		({ password, confirmPassword }: ISignUpSchema) =>
			password === confirmPassword,
		{
			message: 'Password do not match'
		}
	);

export async function POST(
	request: NextRequest
): Promise<NextResponse<string> | NextResponse<ZodError>> {
	const body = await request.json();
	const result = signUpSchema.safeParse(body);

	if (!result.success) return NextResponse.json(result.error);

	// save data in the db

	return NextResponse.json('FUNCTION!');
}
