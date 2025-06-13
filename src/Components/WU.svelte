<script>
	import Tools from '../assets/Tools_high.png';
	import Solar from '../assets/Solar_high.png';
	import Hands from '../assets/hand_high.png';
	import Yannick from '../assets/Yannick.jpg';
</script>

<section class="social" id="installation">
	<h2 class="social-title">Pourquoi choisir SolairConfort ?</h2>
	<div class="container__wrapper">
		<div class="wrapper__p">
			<div class="wrapper__contain">
				<h2>17 ans d'activité</h2>
				<img src={Solar} alt="" />
				Niché au coeur de la Loire. L'entreprise SolairConfort est experte dans le domaine du solaire depuis 17 ans.
				<br /> <span>Proximité - Étude - Expertise </span>
			</div>
		</div>
		<div class="wrapper__p">
			<div class="wrapper__contain">
				<h2>+ de 50 chantiers par année</h2>
				<img src={Tools} alt="" />
				Nous réalisons plus d'une centaine d'installations par an entre Loire et Rhône, pour les particuliers, les collectivités et les entreprises.
				<br /> <span>Conseil - Réalisation - Support</span>
			</div>
		</div>
		<div class="wrapper__p">
			<div class="wrapper__contain">
				<h2>Suivi et garantie</h2>
				<img src={Hands} alt="" />
				Faire confiance à SolairConfort, c'est investir dans des systèmes photovoltaïques fiables et des installations de grande qualité.
				<br /> <span>Gestion - Maintenance - Diagnostic</span>
			</div>
		</div>
	</div>
	<img class="img-Yannick" src={Yannick} alt="" />
	<p class="yannick-text">
		" Chez Solair Confort, nous prenons le temps de bien faire les choses.
		<br />Chaque installation est pensée pour durer, respectueuse de votre maison et de l’environnement.
		<br />C’est notre façon d’être utiles, simplement et durablement."
		<br /> <span>Yannick Barraud, PDG de SolairConfort</span>
	</p>

	<a class="cta" href="/#contact">Parlez-nous de votre projet</a>
</section>

<style>
	.social {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		height: 100%;
		width: 100%;
		padding: 30px;
		gap: 40px;
		margin-top: 50px;
	}
	.social-title {
		font-size: 2rem;
		color: var(--text-blue);
		margin-bottom: 1rem;
		text-align: center;
	}
	.container__wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
		width: 100%;
		max-height: auto;
	}
	.wrapper__p {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
		font-size: 1rem;
		color: var(--text-blue);
		text-align: center;
		line-height: 1.5;
		flex: 1;
		background-color: rgb(242, 242, 242);
		padding: 20px;
		border-radius: 10px;
		max-height: 700px;
	}
	.wrapper__contain {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		gap: 20px;
	min-height: 500px;
	}
	.wrapper__p span {
		font-weight: bold;
		padding: 10px;
		color: white;
		border-radius: 5px;
		background-color: var(--green);
	}
	
	.img-Yannick {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		object-fit: cover;
		margin-top: 20px;
		border: 6px solid var(--green);
	}

	.yannick-text {
		font-size: 1.2rem;
		color: var(--text-blue);
		text-align: center;
		max-width: 600px;
		margin-top: 20px;
		line-height: 1.5;
		font-weight: 500;
		letter-spacing: -1px;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
	.yannick-text span {
		font-weight: bold;
		padding: 10px;
	}

	.cta {
	
		background-color: var(--yellow);
		color: var(--text-blue);
		font-weight: 600;
		border: none;
		padding: 2rem 1.5rem;
		text-align: center;
		font-size: 1rem;
		cursor: pointer;
		border-radius: 10px;
		text-decoration: none;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.313);
		margin: 30px;
		transition: 0.3s ease-in-out;
	}
	.cta:hover {
		background: var(--green);
		/* box-shadow: 0px 10px 30px 4px rgba(0, 0, 0, 0.616); */
	}
	img {
		width: 50px;
		height: 50px;
	}

	@media screen and (max-width: 700px) {
		.wrapper__p {
			flex: 1 1 100%;
			max-width: 90%;
			min-height: 300px;
		}
		.img-Yannick {
			width: 200px;
			height: 200px;
		}
		.yannick-text {
			font-size: 1rem;
			max-width: 90%;
		}
	}
</style>
