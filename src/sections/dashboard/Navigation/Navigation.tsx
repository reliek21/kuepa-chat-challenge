'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

import { Input } from '@/components/ui/shadcn';
import { Name } from '@/components/widgets/Dashboard';

export default function Navigation(): React.ReactElement {
	const { data: session, status } = useSession();

	if (status === 'loading') return <div>Loading...</div>;

	return (
		<header className='sticky top-0 z-10 flex h-[60px] items-center justify-between gap-1 border-b border-zinc-700 bg-zinc-800 px-4'>
			<h1 className='text-xl font-semibold text-orange-500'>Kuepa</h1>

			<Input
				className='w-1/2 text-white border-2 max-sm:hidden'
				type='search'
				placeholder='Buscar clases'
			/>

			<Name
				name={session?.user?.name as string}
				email={session?.user?.email as string}
				role='student'
			/>
		</header>
	);
}
