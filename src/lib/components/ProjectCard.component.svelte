<script lang="ts">
	import type { Project } from '$lib/interfaces';
	import { marked } from 'marked';
	export let project: Project;
	let { image, name, slug, description } = project;
</script>

<div class="relative group card shadow-2xl col-span-2">
	<img src={image[0].url} alt={name} class="object-cover h-full" />
	<a href={`/projects/${slug}`}
		><div
			class="absolute p-5 bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 duration-300 bg-primary text-primary-content"
		>
			<h2 class="font-bold lg:text-lg">{name}</h2>
			<p class="text-xs">{@html marked(description.slice(0, 80))}</p>
		</div>
	</a>
</div>
