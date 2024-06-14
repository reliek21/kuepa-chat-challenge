type RoleType = 'moderator' | 'student';

export interface IName {
	name: string;
	email: string;
	role: RoleType;
}
