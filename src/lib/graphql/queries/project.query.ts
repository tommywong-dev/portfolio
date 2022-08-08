import { gql } from 'graphql-request';

export const projectsQuery = gql`
	query GetProjects {
		projects {
			name
			slug
			description
			demo
			sourceCode
			image {
				url
			}
		}
	}
`;
