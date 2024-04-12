import React from 'react';
import { YouTubeEmbed } from '@next/third-parties/google';

import { Button } from '@/components/ui/shadcn';
import { Chat } from '@/components/widgets/Dashboard';

export default function Content(): React.ReactElement {
	return (
		<main className='w-full flex justify-between gap-10 h-full p-10 max-[850px]:flex-col max-sm:w-full max-sm:p-0'>
			<div className='flex-1 max-sm:mt-9'>
				<h3 className='text-3xl text-white font-bold mb-4'>
					Ingeniería de Software
				</h3>

				<YouTubeEmbed videoid='RtevrQZCdAU' params='controls=0 autoplay=1' />

				<div className='flex items-center justify-between mt-4'>
					<Button variant='destructive'>Salir de la tutoría</Button>
				</div>
			</div>

			<div className='flex-1 rounded-xl bg-muted/50 p-2'>
				<Chat />
			</div>
		</main>
	);
}
