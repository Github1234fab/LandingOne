<script>
	import Tools from '../assets/Tools_high.png';
	import Solar from '../assets/Solar_high.png';
	import Hands from '../assets/hand_high.png';
</script>

<section class="social">
	<h2 class="social-title">Pourquoi choisir SolairConfort ?</h2>
	<div class="container__wrapper">
		<div class="wrapper__p">
			<img src={Solar} alt="" />
			Niché au coeur de la Loire. L'entreprise SolairConfort est experte dans le domaine du solaire depuis 17 ans.
		</div>
		<div class="wrapper__p">
			<img src={Tools} alt="" />
			Nous réalisons plus d'une centaine d'installations par année entre Loire et Rhône, pour les particuliers, les collectivités et les entreprises.
		</div>
		<div class="wrapper__p">
			<img src={Hands} alt="" />
			Faire confiance à SolairConfort, c'est investir dans des systèmes photovoltaïques fiables et de grande qualité.
		</div>
	</div>

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
	}
	.wrapper__p {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 50px;
		font-size: 1rem;
		color: var(--text-blue);
		text-align: center;
		line-height: 1.5;
		flex: 1 ;
		background-color: rgb(242, 242, 242);
		padding: 20px;
		border-radius: 10px;
		max-height: 400px;
		min-height: 400px;
	}
	
	.cta {
		background: linear-gradient(90deg, #d8a21a, var(--cta));
		background-color: var(--cta);
		color: white;
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
	img{
		width: 50px;
		height: 50px;

	}
</style>
