import React from 'react';

import { LoginTitle, LoginDescription } from '@/components/ui/custom';
import { LegalLoginText, LoginForm } from '@/components/widgets';

import { AUTH_ROUTES } from '@/routes';

export default function LoginSection(): React.ReactElement {
	return (
		<section className='container w-3/4 p-3 max-md:w-full'>
			<LoginTitle title='Acceder a Kuepa Chat' />
			<LoginDescription
				description='¿No tienes cuenta?'
				buttonText='Registrate'
				buttonUrl={AUTH_ROUTES.signUp}
			/>
			<LoginForm />
			<LegalLoginText />
		</section>
	);
}
