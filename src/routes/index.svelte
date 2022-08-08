<script context="module" lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.component.svelte';
	import type { Author, Project } from '$lib/interfaces';
	import { authorsQuery, projectsQuery } from '$lib/graphql/queries';
	import { client } from '$lib/graphql/client';

	export const load = async () => {
		const [authorReq, projectsReq] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery)
		]);
		const { authors } = authorReq;
		const { projects } = projectsReq;

		return {
			props: {
				authors,
				projects
			}
		};
	};
</script>

<script lang="ts">
	export let authors: Author[];
	export let projects: Project[];
</script>

<svelte:head>
	<title>My Portfolio project</title>
</svelte:head>
<main>
	<h1 class="font-bold text-center mb-20 text-5xl">Welcome to my Portfolio</h1>

	{#each authors as { name, intro, picture: { url } }}
		<div class="flex mb-40 items-end">
			<div class="mr-6">
				<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
				<p class="text-xl mb-4">{intro}</p>
			</div>

			<img class="mask mask-squircle h-48" src={url} alt={name} />
		</div>
	{/each}

	<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</main>
