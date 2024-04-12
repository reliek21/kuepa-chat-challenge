import { NextRequest, NextResponse } from 'next/server';

import { BcryptHelper } from '@/helpers/auth';
import { IUser } from '@/interface/auth';

import prisma from '@/database/database.config';

export async function POST(request: NextRequest): Promise<Response> {
	const bcryptHelper: BcryptHelper = new BcryptHelper();

	try {
		const data: IUser = await request.json();

		const { name, username, email, password }: IUser = data;

		const emailFound: IUser | null = await prisma.user.findUnique({
			where: {
				email
			}
		});

		if (emailFound) {
			return NextResponse.json(
				{
					ok: false,
					message: 'User already exists!'
				},
				{
					status: 400
				}
			);
		}

		const lowerCaseEmail: string = data.email.toLowerCase();
		const hashedPassword: string = await bcryptHelper.hashPassword(
			password as string
		);

		await prisma.user.create({
			data: {
				name: name,
				username: username,
				email: lowerCaseEmail,
				password: hashedPassword
			}
		});

		return NextResponse.json(
			{
				ok: true,
				message: 'User created successfully!'
			},
			{
				status: 201
			}
		);
	} catch (error: any | unknown) {
		console.log(`Error during creating user: ${error.message}`);
		throw new Error('Failed to assign user. Please try again.');
	}
}
