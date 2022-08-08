<script context="module">
	import ProjectCard from '$lib/components/ProjectCard.component.svelte';
	import { gql, GraphQLClient } from 'graphql-request';

	export const load = async () => {
		const client = new GraphQLClient(import.meta.env.VITE_GRAPHQL_API);

		const query = gql`
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

		const { projects } = await client.request(query);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script lang="ts">
	interface Project {
		name: string;
		slug: string;
		description: string;
		demo: string;
		sourceCode: string;
		image: {
			url: string;
		}[];
	}
	export let projects: Project[];
</script>

<html lang="ts">
	<h1>Tommy Wong</h1>
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</html>
