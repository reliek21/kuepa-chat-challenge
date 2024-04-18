import CreCredentialsProvider, {
	CredentialsConfig
} from 'next-auth/providers/credentials';
import { authorizeConfig } from '@/config';

/**
 * Configuration of the credential
 * provider for authentication
 * */
export const credentialsProviderConfig: CredentialsConfig =
	CreCredentialsProvider({
		name: 'credentials',
		credentials: {
			email: { label: 'Email', type: 'email', placeholder: 'smith' },
			password: {
				label: 'Password',
				type: 'password',
				placeholder: 'password'
			}
		},
		async authorize(
			credentials: Record<string, string> | undefined
		): Promise<CredentialsConfig> {
			return await authorizeConfig(credentials);
		}
	});
