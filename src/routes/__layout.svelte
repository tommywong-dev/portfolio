<script>
	import Footer from '$lib/components/Footer.component.svelte';
	import Navbar from '$lib/components/Navbar.component.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';

	onMount(() => {
		themeChange(false);
	});
</script>

<html lang="html5" class="dark">
	<Navbar />
	<div class="container max-w-3xl mx-auto px-4 mb-20">
		<slot />
	</div>
	<Footer />
</html>
