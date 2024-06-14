import React from 'react';
import { ContainerWrapper, SessionWrapper } from '@/components/context';
import { Toaster } from '@/components/ui/shadcn';

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ContainerWrapper>
			<SessionWrapper>{children}</SessionWrapper>
			<Toaster />
		</ContainerWrapper>
	);
}
