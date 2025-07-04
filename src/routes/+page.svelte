<script>
	import { onMount } from 'svelte';
	import './style.css';
	import HeroSection from '../Components/Hero.svelte';
	import FeaturesSection from '../Components/Features.svelte';
    import WU from '../Components/WU.svelte';
    import Social from '../Components/social.svelte';
    import Form from '../Components/Form.svelte';

	onMount(() => {
		const form = document.querySelector('form[name="contact"]');
		if (form) {
			form.setAttribute('action', '/merci');
		}
	});
</script>

<main>
	<HeroSection/>
	<FeaturesSection/>
	<Form />
    <WU/>
    <Social />

</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0px;
		height: 100%;
		margin: 0 auto;
		box-shadow: 0 0px 20px rgba(0, 0, 0, 0.39);
	}
</style>
