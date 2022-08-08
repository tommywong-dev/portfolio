<script lang="ts">
	import type { Project } from '../interfaces';
	export let project: Project;
	let { image, name, slug, description } = project;
</script>

<div>
	<img src={image[0].url} alt={name} />
	<a href={`/project/${slug}`}
		><div>
			<h2>{name}</h2>
			<p>{description.slice(0, 80)}...</p>
		</div>
	</a>
</div>
