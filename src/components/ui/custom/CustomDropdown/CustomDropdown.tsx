import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/shadcn';
import { ICustomDropdown } from './interfaces/CustomDropdown';

export default function CustomDropdown({
	title,
	subTitle,
	items,
	onChange,
	value
}: ICustomDropdown): React.ReactElement {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='mt-3 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'>
				{value || title}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{subTitle && <DropdownMenuLabel>{subTitle}</DropdownMenuLabel>}
				{subTitle && <DropdownMenuSeparator />}

				{items.map((item: string, index: number) => (
					<DropdownMenuItem key={index} onChange={onChange} textValue={value}>
						{item}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
