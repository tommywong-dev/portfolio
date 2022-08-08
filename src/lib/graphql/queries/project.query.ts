import { gql } from 'graphql-request';

const PROJECT_FRAGMENT = gql`
	fragment ProjectDetails on Project {
		name
		slug
		description
		demo
		sourceCode
		image {
			url
		}
	}
`;

export const projectsQuery = gql`
	${PROJECT_FRAGMENT}
	query GetProjects {
		projects {
			...ProjectDetails
		}
	}
`;

export const projectQuery = gql`
	${PROJECT_FRAGMENT}
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			...ProjectDetails
		}
	}
`;
