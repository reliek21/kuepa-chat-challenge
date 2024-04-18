'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { ISessionWrapper } from './interfaces/SessionWrapper';

export default function SessionWrapper({
	children
}: ISessionWrapper): React.ReactElement {
	return <SessionProvider>{children}</SessionProvider>;
}
