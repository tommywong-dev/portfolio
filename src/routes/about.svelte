<script context="module" lang="ts">
	import { client } from '$lib/graphql/client';
	import { authorsQuery } from '$lib/graphql/queries';
	import type { Author } from '$lib/interfaces';
	import type { Load } from '@sveltejs/kit';
	import { marked } from 'marked';

	export const load: Load = async () => {
		const { authors } = await client.request(authorsQuery);

		return {
			props: {
				authors
			}
		};
	};
</script>

<script lang="ts">
	export let authors: Author[];
	const {
		name,
		intro,
		bio,
		picture: { url }
	} = authors[0];
</script>

<svelte:head>
	<title>My Portfolio project | About {name}</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">About Me</h1>

<div class="flex mb-40 items-end">
	<div class="mr-6">
		<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
		<p class="text-xl mb-4">{intro}</p>
	</div>

	<img class="mask mask-squircle h-48" src={url} alt={name} />
</div>

<article class="prose prose-lg">
	{@html marked(bio)}
</article>
