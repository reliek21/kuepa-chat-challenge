import React from 'react';

import { Button, TooltipProvider } from '@/components/ui/shadcn';
import { TooltipIcon } from '@/components/ui/custom';

export default function LateralMenu(): React.ReactElement {
	return (
		<aside className='inset-y fixed left-0 z-20 flex h-full flex-col border-r border-zinc-700 max-sm:hidden'>
			<div className='h-[60px] flex items-center justify-center border-b border-zinc-700 p-2'>
				<Button
					className='text-orange-500 font-bold text-2xl cursor-not-allowed'
					size='icon'
					aria-label='Home'>
					<h1>K</h1>
				</Button>
			</div>

			<nav className='grid gap-1 p-2'>
				<TooltipProvider>
					<TooltipIcon icon='terminal' text='Dashboard' />
				</TooltipProvider>
			</nav>

			<nav className='mt-auto grid gap-1 p-2'>
				<TooltipProvider>
					<TooltipIcon icon='nut' text='Soporte' />
					<TooltipIcon icon='person' text='Cuenta' />
				</TooltipProvider>
			</nav>
		</aside>
	);
}
