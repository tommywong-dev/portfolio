<script context="module" lang="ts">
	import { client } from '$lib/graphql/client';
	import { postsQuery } from '$lib/graphql/queries';
	import type { Post } from '$lib/interfaces';
	import { marked } from 'marked';

	export const load = async () => {
		const { posts } = await client.request(postsQuery);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script lang="ts">
	export let posts: Post[];
</script>

<svelte:head>
	<title>Portfolio | Blog</title>
</svelte:head>

<main>
	<h1 class="text-4xl mb-10 font-extrabold">Blog posts</h1>

	{#each posts as { title, slug, content, coverImage, tags }}
		<div class="card text-center shadow-2xl mb-20">
			<figure class="">
				<img class="" src={coverImage.url} alt={`Cover image for ${title}`} />
			</figure>
			<div class="card-body prose">
				<h2 class="title">{title}</h2>
				{@html marked(content).slice(0, 150)}
				<div class="flex justify-center mt-5 space-x-2">
					{#each tags as tag}
						<span class="badge badge-primary">{tag}</span>
					{/each}
				</div>
				<div class="justify-center card-actions">
					<a href={`/posts/${slug}`} class="btn btn-outline btn-primary">Read &rArr;</a>
				</div>
			</div>
		</div>
	{/each}
</main>
