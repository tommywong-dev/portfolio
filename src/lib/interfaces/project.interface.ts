interface Project {
	name: string;
	tags: string;
	slug: string;
	description: string;
	demo: string;
	sourceCode: string;
	image: {
		url: string;
	}[];
}

export default Project;
