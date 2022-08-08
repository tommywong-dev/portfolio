<script context="module" lang="ts">
	import { client } from '$lib/graphql/client';
	import { projectsQuery } from '$lib/graphql/queries';

	import type { Project } from '$lib/interfaces';

	export const load = async () => {
		const { projects } = await client.request(projectsQuery);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.component.svelte';

	export let projects: Project[];
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<h1 class="font-bold mb-20 text-center text-5xl">Recent Projects by Me</h1>

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as project, index}
		<ProjectCard {project} />
	{/each}
</div>
