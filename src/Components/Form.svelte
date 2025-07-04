<script>
	import FB from '../assets/fb.png';
	import lin from '../assets/lin.png';
	import insta from '../assets/insta.png';
	import Logo from '../assets/logo-solairconfort.png';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';

	let form;

</script>

<section id="contact">
	<h2>Obtenez votre devis gratuit</h2>

	<form id="form" name="contact-form-solairConfort" method="POST" netlify-honeypot="bot-field" data-netlify="true" action="/merci">
		<input type="hidden" name="form-name" value="contact-form-solairConfort" />
		<p hidden>
			<label>Don’t fill this out: <input name="bot-field" /></label>
		  </p>
		<!-- <input type="hidden" name="redirect" value="/merci" /> -->
	
		<label
			>Nom :
			<input type="text" name="name" required />
		</label><br />

		<label
			>Email :
			<input type="email" name="email" required />
		</label><br />

		<label
			>Téléphone :
			<input type="tel" name="phone" required />
		</label><br />

		<label
			>Votre projet :
			<textarea name="message" rows="4" required></textarea>
		</label><br />

		<button id="submitForm" class="cta" >Obtenir mon devis gratuit</button>
		<!-- type="submit" -->
	</form>

	<div class="wrapper__socialMedia">
		<a href="https://www.facebook.com/profile.php?id=61566251125721"><img src={FB} alt="facebook" /></a>
		<a href="https://www.linkedin.com/in/yannick-barraud-06546b283/"><img src={lin} alt="linkedIn" /></a>
		<a href="https://www.instagram.com/solairconfort/"> <img src={insta} alt="instagram" /></a>
	</div>
	<p>
		<strong>SolairConfort</strong> – 23 Rue Louis Pergaud 42240 UNIEUX<br />
		Tel : <a href="tel:0673209421">06 73 20 94 21</a><br />
		Email : <a href="mailto:contact@solairconfort.fr">contact@solairconfort.fr</a><br />
		site: <a href="https://solairconfort.fr">solairconfort.fr</a>
	</p>
	<img class="logo" src={Logo} alt="" />
</section>

<style>
	#contact {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--text-blue);
		height: 100%;
		padding: 20px;
		gap: 20px;
		background: linear-gradient(var(--primary-blue), var(--text-blue));
		padding: 2rem;
		width: 100%;
		margin: 0 auto;
	}

	h2 {
		color: white;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0;
		width: 50%;
	}

	label {
		display: flex;
		flex-direction: column;
		font-weight: 500;
		color: white;
	}

	input {
		padding: 0.5rem;
		border-radius: 5px;
		border: 1px solid #ccc;
		width: 100%;
	}

	button.cta {
		background-color: var(--yellow);
		color: var(--text-blue);
		font-weight: bold;
		border: none;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
		border-radius: 5px;
		margin: 2rem auto;
		border-radius: 10px;
		font-size: 1rem;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.313);
		width: 70%;
	}

	button.cta:hover {
		background-color: var(--green);
	}
	p {
		color: white;
		text-align: center;
		font-size: 0.9rem;
		margin-top: 1rem;
	}
	a {
		color: var(--yellow);
		text-decoration: none;
	}
	textarea {
		padding: 10px;
		border-radius: 5px;
		border: none;
		width: 100%;
		resize: vertical;
	}
	textarea::placeholder {
		padding: 10px;
	}
	.wrapper__socialMedia {
		display: flex;
		gap: 20px;
		margin-top: 20px;
	}
	img {
		width: 40px;
		height: 40px;
		cursor: pointer;
		transition: transform 0.3s ease;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.271);
		border-radius: 10px;
		border: 1px solid white;
	}
	img:hover {
		transform: scale(1.1);
	}
	.logo {
		width: 200px;
		height: auto;
		margin: 20px auto;
		border: none;
		box-shadow: none;
	}
	@media screen and (max-width: 768px) {
		form {
			width: 90%;
		}
	}
</style>
