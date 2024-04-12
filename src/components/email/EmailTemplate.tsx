interface IEmailTemplate {
	firstName: string;
}

export default function EmailTemplate({ firstName }: IEmailTemplate) {
	return <div>Hello</div>;
}
