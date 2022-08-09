<script context="module" lang="ts">
	import { client } from '$lib/graphql/client';
	import { postQuery } from '$lib/graphql/queries';
	import type { Post } from '$lib/interfaces';
	import type { Load } from '@sveltejs/kit';
	import { marked } from 'marked';

	export const load: Load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { post } = await client.request(postQuery, variables);

		return {
			props: {
				post
			}
		};
	};
</script>

<script lang="ts">
	export let post: Post;

	const { title, date, tags, content, coverImage } = post;
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<main>
	<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
		<img class="rounded-xl" src={coverImage.url} alt={`Cover image for ${title}`} />
	</div>

	<div class="prose prose-xl">
		<h1>{title}</h1>
	</div>

	<p class="text-secondary text-xs tracking-widest font-semibold">
		{new Date(date).toDateString()}
	</p>

	<div class="mb-5 flex justify-between">
		<div>
			{#if tags}
				<div class="mt-5 space-x-2">
					{#each tags as tag}
						<span class="badge badge-primary">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<article class="prose prose-lg">
		{@html marked(content)}
	</article>
</main>
