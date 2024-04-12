import { redirect } from 'next/navigation';
import { AUTH_ROUTES } from '@/routes';

export default function AuthPage() {
	redirect(AUTH_ROUTES.login);
}
