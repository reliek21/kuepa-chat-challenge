import { redirect } from 'next/navigation';
import { AUTH_ROUTES } from '@/routes';

export default function AuthPage(): void {
	redirect(AUTH_ROUTES.signIn);
}
