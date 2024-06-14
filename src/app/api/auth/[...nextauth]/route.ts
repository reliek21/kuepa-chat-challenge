import NextAuth from 'next-auth';
import { authOptions } from '@/config';

// Configuration options for NextAuth
const handler = NextAuth(authOptions);

// Initialization for NextAuth with configuration options
export { handler as GET, handler as POST };
