<script context="module" lang="ts">
	import { client } from '$lib/graphql/client';
	import { projectQuery } from '$lib/graphql/queries';
	import type { Project } from '$lib/interfaces';
	import { marked } from 'marked';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async (context) => {
		const { project } = await client.request(projectQuery, { slug: context.params.slug });

		return {
			props: {
				project
			}
		};
	};
</script>

<script lang="ts">
	export let project: Project;
	const { name, image, tags, demo, sourceCode, description } = project;
</script>

<svelte:head>
	<title>My Portfolio | {name}</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
	<img class="rounded-lg" src={image[0].url} alt={name} />
</div>

<h1 class="text-4xl font-semibold mb-5">{name}</h1>

<div class="mb-5 flex justify-between">
	<div>
		{#if tags}
			{#each tags as tag}
				<span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">{tag}</span>
			{/each}
		{/if}
	</div>
</div>

<div class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus">
	<a class="mr-5" href={demo}>Demo</a>
	<a href={sourceCode}>Source Code</a>
</div>

<article class="prose prose-xl">
	{@html marked(description)}
</article>
