import { IAuthRoute } from '@/interface/routes';

export const AUTH_ROUTES: IAuthRoute = {
	signIn: '/auth/login',
	signUp: '/auth/sign-up',
	signOut: '/auth/sign-out',
	error: '/auth/error',
	newUser: '/auth/new-user',
	verifyRequest: '/auth/verify-request'
};
