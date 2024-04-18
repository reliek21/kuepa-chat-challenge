import React from 'react';

export interface ICustomDropdown {
	title: string;
	subTitle?: string | undefined;
	items: Array<string>;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}
