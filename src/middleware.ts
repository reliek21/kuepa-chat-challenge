export { default } from 'next-auth/middleware';

export const config: { matcher: Array<string> } = {
	matcher: ['/dashboard/:path*']
};
