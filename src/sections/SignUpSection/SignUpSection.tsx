import {
	ButtonIcon,
	LoginDescription,
	LoginTitle,
	SeparatorText
} from '@/components/ui/custom';
import {
	LegalLoginText,
	SignUpForm,
	FlexContainer
} from '@/components/widgets';

import { AUTH_ROUTES } from '@/routes';

export default function SignUpSection() {
	return (
		<div className='container w-3/4 p-3 max-md:w-full'>
			<LoginTitle title='Acceder a Kuepa Chat' />
			<LoginDescription
				description='¿Ya tiene una cuenta?'
				buttonText='Inicia sesión'
				buttonUrl={AUTH_ROUTES.signIn}
			/>

			<SignUpForm />

			<LegalLoginText />
		</div>
	);
}
