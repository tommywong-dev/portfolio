<script>
	import ThemeSelect from './ThemeSelect.component.svelte';
</script>

<div
	class="navbar mb-16 mx-auto shadow-lg bg-neutral text-neutral-content sticky rounded-box w-11/12 top-2 z-10"
>
	<div class="flex-1 px-2 mx-2">
		<a href="/" class="text-lg font-extrabold">tommywong.dev</a>
	</div>
	<div class="flex-none hidden px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Portfolio </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts">Blog</a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about">About</a>
			<div class="px-4">
				<ThemeSelect />
			</div>
		</div>
	</div>

	<div class="dropdown dropdown-left lg:hidden">
		<div tabindex="0" class="m-1 btn">Links</div>
		<ul
			tabindex="0"
			class="bg-neutral rounded-box shadow-xl text-neutral-content p-2 w-52 menu dropdown-content"
		>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Portfolio </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts"> Blog </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about"> About </a>
			<div class="py-2 m-auto">
				<ThemeSelect />
			</div>
		</ul>
	</div>
</div>
