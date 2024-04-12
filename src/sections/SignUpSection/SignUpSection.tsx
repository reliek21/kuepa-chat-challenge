import {
	ButtonIcon,
	LoginDescription,
	LoginTitle,
	SeparatorText
} from '@/components/ui/custom';
import {
	LegalLoginText,
	SignUpForm,
	SupportLogin,
	FlexContainer
} from '@/components/widgets';
import { AUTH_ROUTES } from '@/routes';

export default function SignUpSection() {
	return (
		<div className='container w-3/4 p-3 max-md:w-full'>
			<LoginTitle title='Get Started with Project' />
			<LoginDescription
				description='Already have an account?'
				buttonText='Sign in'
				buttonUrl={AUTH_ROUTES.login}
			/>

			<FlexContainer>
				<ButtonIcon icon='github' text='Github' />
				<ButtonIcon icon='google' text='Google' />
			</FlexContainer>

			<SeparatorText text='OR CONTINUE WITH' />

			<SignUpForm />

			<LegalLoginText />
			<SupportLogin />
		</div>
	);
}
