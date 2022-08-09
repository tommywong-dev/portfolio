<script>
	import FacebookIcon from './FacebookIcon.component.svelte';
	import TwitterIcon from './TwitterIcon.component.svelte';
	import YoutubeIcon from './YoutubeIcon.component.svelte';
</script>

<footer class="p-10 footer bg-primary text-primary-content footer-center">
	<div class="grid grid-flow-col gap-4">
		<a href="/projects" class="link link-hover">Projects</a>
		<a href="/posts" class="link link-hover">Bout</a>
		<a href="/about" class="link link-hover">About</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href="https://twitter.com/tommywong_dev" target="_blank">
				<TwitterIcon />
			</a>
			<a href="https://www.youtube.com/channel/UCkO6WyurJjBc7KP9jbrIb0Q" target="_blank">
				<YoutubeIcon />
			</a>
			<a href="https://www.facebook.com/profile.php?id=100004680791150" target="_blank">
				<FacebookIcon />
			</a>
		</div>
	</div>
	<div>
		<p>Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved by ME</p>
	</div>
</footer>
