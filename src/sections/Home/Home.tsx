import React from 'react';
import Link from 'next/link';
import { AUTH_ROUTES } from '@/routes';

export default function HomeSection(): React.ReactElement {
	return (
		<main className='min-h-screen flex flex-col justify-center items-center bg-zinc-800'>
			<h1 className='text-6xl mb-4 text-white font-bold'>
				<b className='font-bold text-orange-500'>Kuepa</b> EduTech
			</h1>

			<p className='w-3/4 text-white text-2xl text-center mb-10 font-semibold'>
				Maximiza el potencial de tu empresa con practicantes cuota{' '}
				<b className='text-orange-500'>SENA </b>
				altamente capacitados
			</p>

			<Link
				href={AUTH_ROUTES.signIn}
				className='text-white p-2 px-4 rounded bg-orange-500 hover:bg-orange-600 animate-bounce'>
				Ingresar a Kuepa EduTech
			</Link>
		</main>
	);
}
