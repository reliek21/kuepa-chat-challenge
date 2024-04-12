import React from 'react';
import { Button, Textarea } from '@/components/ui/shadcn';

export default function Chat(): React.ReactElement {
	return (
		<form className='overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring'>
			<Textarea
				id='message'
				placeholder='Escriba aquí su mensaje...'
				className='min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0'
			/>

			<div className='flex items-center p-3 pt-0'>
				<Button type='submit' size='sm' className='ml-auto gap-1.5'>
					Enviar mensaje
					<i className='bi bi-arrow-return-left'></i>
				</Button>
			</div>
		</form>
	);
}
