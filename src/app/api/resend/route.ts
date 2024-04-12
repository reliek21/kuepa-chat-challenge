import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { CONFIG_ENVIRONMENTS } from '@/config';

interface IResendResponse {
	message: string;
	status: number;
}

// como cambiar esta parte?

const resend: Resend = new Resend(CONFIG_ENVIRONMENTS.RESEND_API_KEY);

export async function POST(
	request: NextRequest
): Promise<NextResponse<IResendResponse>> {
	// extract properties from request

	const { name, phone, email, service } = await request.json();

	/**
	 * from: is used to know what email send the email
	 * to: where we send the email?, we can send to many emails
	 * subject: 'subject of the email to send'
	 * react: is the email template to send the email
	 */

	try {
		const sendEmail = await resend.emails.send({
			from: 'Information User <notifications@email.com>',
			to: ['email@email.com'],
			subject: 'New information from the x product',
			// react: EmailTemplate({

			// }),
			text: ''
		});

		return NextResponse.json({ message: 'Email send', status: 200 });
	} catch (error) {
		return NextResponse.json({
			message: 'Error to send the email',
			status: 500
		});
	}
}
