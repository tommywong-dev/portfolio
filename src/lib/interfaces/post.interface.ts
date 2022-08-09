interface Post {
	title: string;
	slug: string;
	date: string;
	content: string;
	tags: string[];
	coverImage: {
		url: string;
	};
	authors: {
		name: string;
	}[];
}

export default Post;
