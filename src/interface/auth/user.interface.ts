export interface IUser {
	id: string;
	name: string;
	username: string;
	email: string;
	password?: string;
}

export interface IUserResponse {
	name: string;
	username: string;
	email: string;
	password: string;
}

export interface IErrorResponse {
	ok?: boolean | undefined;
	status?: number | undefined;
	message?: string | undefined;
}
