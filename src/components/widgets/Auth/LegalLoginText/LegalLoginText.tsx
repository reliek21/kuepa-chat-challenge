import { UnderlineLink } from '@/components/ui/custom';

export default function LegalLoginText() {
	return (
		<span className='text-sm'>
			Al registrarse, acepta las condiciones{' '}
			<UnderlineLink text='Terminos del servicio ' link='#' />
			y <UnderlineLink text='Politicas de privacidad' link='#' />
		</span>
	);
}
