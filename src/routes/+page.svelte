<script>
	import './style.css';
	import HeroSection from '../Components/Hero.svelte';
	import FeaturesSection from '../Components/Features.svelte';
    import WU from '../Components/WU.svelte';
    // import Social from '../Components/Social.svelte';
    import Form from '../Components/Form.svelte';
</script>

<main>
	<HeroSection />
    <WU/>
	<FeaturesSection />
    <Social />
    <Form />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		/* max-width: 800px; */
		height: 100%;
		margin: 0 auto;
		box-shadow: 0 0px 20px rgba(0, 0, 0, 0.39);
	}
</style>
