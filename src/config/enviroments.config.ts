import { IEnvironments } from '@/interface/enviroments';

export const CONFIG_ENVIRONMENTS: IEnvironments = {
	RESEND_API_KEY: (process.env.RESEND_API_KEY as string) || '',
	GOOGLE_ANALYTICS: (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string) || ''
};
