import { gql } from 'graphql-request';

const POST_FRAGMENT = gql`
	fragment PostDetails on Post {
		title
		slug
		date
		content
		tags
		coverImage {
			url
		}
		authors {
			name
		}
	}
`;

export const postsQuery = gql`
	${POST_FRAGMENT}
	query GetPosts {
		posts {
			...PostDetails
		}
	}
`;

export const postQuery = gql`
	${POST_FRAGMENT}
	query GetPost($slug: String!) {
		post(where: { slug: $slug }) {
			...PostDetails
		}
	}
`;
