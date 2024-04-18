import { IEnvironments } from '@/interface/enviroments';

export const CONFIG_ENVIRONMENTS: IEnvironments = {
	NODE_ENV: (process.env.NODE_ENV as string) || 'development',
	NEXTAUTH_URL: (process.env.NEXTAUTH_URL as string) || '',
	NEXTAUTH_SECRET: (process.env.NEXTAUTH_SECRET as string) || ''
};
