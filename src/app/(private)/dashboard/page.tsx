import React from 'react';
import { Content, LateralMenu, Navigation } from '@/sections/dashboard';

export default function DashboardPage(): React.ReactElement {
	return (
		<div className='grid h-screen w-full pl-[53px] bg-zinc-800 max-sm:pl-[16px]'>
			<LateralMenu />

			<div className='flex flex-col'>
				<Navigation />
				<Content />
			</div>
		</div>
	);
}
