<script>
	import Video from '../assets/video-nuages.mp4';
	import { onMount } from 'svelte';
	import Doodle from '../assets/Doodle6.png';
	import Logo from '../assets/logo-solairconfort.png';

	let videoElement;

	onMount(() => {
		videoElement.playbackRate = 2.0; // 2x plus rapide
	});
</script>

<section class="hero">
	<video autoplay muted loop id="myVideo" playsinline bind:this={videoElement} class="video-background">
		<source src={Video} type="video/mp4" />
		Votre navigateur ne supporte pas la balise vidéo.
	</video>

	<img class="logo" src={Logo} alt="logo de solairAirConfort" />
	<div class="wrapper__hero">
		<h1 class="hero-title">
			Des panneaux solaires <span>gratuits <img src={Doodle} class="doodle" alt="" /></span> pour votre toit !
		</h1>
		<div class="wrapper__subtitles">
			<h2 class="hero-para-2">
				<span>Profitez de nos soldes d'été </span> et économisez <span> 20% </span> sur votre installation de 3 à 9 kWc
			</h2>

			<h3 class="hero-para-3">Offre valable du 25 juin au 22 juillet 2025.</h3>
			<div class="wrapper__cta">
				<a class="cta" href="/#contact"> Obtener votre devis gratuit</a>
				<a class="cta-call" href="tel:0673209421"> Appelez-nous</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: linear-gradient(var(--text-blue), var(--primary-blue));
		height: 100%;
		position: relative;
		z-index: 1;
		padding: 15px;
		width: 100%;
	}
	.hero::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: transparent;
		background: linear-gradient(to bottom, #041e388a 20%, #77a9da65 40%, #041e38b6 100%);
		z-index: 2;
	}
	.wrapper__hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		gap: 15px;
		z-index: 3;
		color: white;
		height: 100%;
	}
	.wrapper__subtitles {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin-top: 20px;
	}
	.hero-title {
		font-size: 3rem;
		line-height: 3.3rem;
		color: white;
		margin-top: 50px;
		margin-bottom: 2rem;
		text-align: center;
		padding: 20px;
	}
	.hero-title span {
		position: relative;
		color: #ffffff;
	}
	.hero-para-2 {
		font-weight: 500;
		font-size: 1.3rem;
		line-height: 1.8rem;
		color: rgb(255, 255, 255);
		text-align: center;
		letter-spacing: -0.2px;
	}
	.hero-para-2 span {
		font-weight: 600;
		color: var(--yellow);
	}

	.hero-para-3 {
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 1.5rem;
		color: rgb(255, 255, 255);
		margin-bottom: 2.5rem;
		text-align: center;
		letter-spacing: 0px;
	}
	.doodle {
		width: 172px;
		height: 17px;
		position: absolute;
		top: 54px;
		left: 34px;
	}

	.logo {
		width: 300px;
		height: auto;
		z-index: 10;
		margin: 20px auto;
	}
	.video-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		width: 100%;
		background-color: rgb(220, 29, 29);
		object-fit: cover;
		z-index: 1;
	}
	.wrapper__cta {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		margin-bottom: 100px;
		gap: 10px;
	}
	.cta {
		background: var(--cta);
		background-color: var(--cta);
		color: white;
		font-weight: 600;
		border: none;
		padding: 1rem 1.7rem;
		text-align: center;
		font-size: 1rem;
		cursor: pointer;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.313);
		transition: 0.4s ease-in-out;
		min-width: 300px;
	}
	.cta-call {
		background-color: var(--yellow);
		color: var(--text-blue);
		font-weight: 600;
		border: none;
		padding: 1rem 1.5rem;
		text-align: center;
		font-size: 1rem;
		cursor: pointer;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.313);
		min-width: 300px;
		transition: 0.4s ease-in-out;
	}
	.cta:hover {
		background: var(--green);
		/* box-shadow: 0px 10px 30px 4px rgba(0, 0, 0, 0.616); */
	}
	.cta-call:hover {
		background-color: var(--text-blue);
		color: white;
	}

	@media screen and (max-width: 768px) {
		.wrapper__cta {
			flex-direction: column;
			gap: 10px;
			margin-bottom: 60px;
		}
		.logo {
			width: 200px;
		}
	}
</style>
