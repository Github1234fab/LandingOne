<section class="features">
	<h2 class="features-offre">GRAND DESTOCKAGE</h2>
	<h3 class="features-title"><span>Offre</span> valable du 1 juin au 27 septembre 2025 !</h3>
	<div class="features__wrapper">
		<div class="offer-card">
			<h3>Panneaux solaires offerts</h3>
			<div class="imgA"></div>
			<p>☀️ Pour toute installation entre 3 et 9 kWc.</p>
			<div class="wrapper__cta-offre"><a class="cta-offre" href="tel:0673209421">En savoir +</a></div>
		</div>
		<div class="offer-card">
			<h3>Matériel garanti</h3>
			<div class="imgB"></div>
			<p>🛠️ Matériel de qualité avec garantie constructeur.</p>
			<div class="wrapper__cta-offre"><a class="cta-offre" href="tel:0673209421">En savoir +</a></div>
		</div>
		<div class="offer-card">
			<h3>Pose certifiée</h3>
			<div class="imgC"></div>
			<p>✅ Installation aux normes RGE QualiPV 500.</p>

			<div class="wrapper__cta-offre"><a class="cta-offre" href="tel:0673209421">En savoir +</a></div>
		</div>
		<div class="offer-card">
			<h3>Économies immédiates</h3>
			<div class="imgD"></div>
			<p>💡Résultats visibles dès votre première facture.</p>
			<div class="wrapper__cta-offre"><a class="cta-offre" href="tel:0673209421">En savoir +</a></div>
		</div>
	</div>
	<div class="wrapper__cta">
		<a class="cta" href="tel:0673209421">Appelez-nous dès maintenant</a>
	</div>
</section>

<style>
	.features {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: url(../assets/png-solair/panneaux.png);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		color: var(--text-blue);
		height: 100%;
		width: 100%;
		padding: 20px;
		gap: 40px;
		position: relative;
		z-index: 0;
	}
	.features::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
        background: linear-gradient(to bottom, #f86641, #f9a25fb9, #ffcc33);
		z-index: 1;
	}
	.features__wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 10px;
		z-index: 2;
		color: white;
		height: 100%;
		z-index: 5;
        width: 80%;
	}

	.features-offre {
		font-size: 1.5rem;
		color: white;
		margin-bottom: 1rem;
		text-align: center;
		letter-spacing: 2px;
		margin-top: 20px;
		z-index: 3;
	}
	.features-title {
		font-size: 4rem;
		color: white;
		margin-bottom: 1rem;
		text-align: center;
		line-height: 5rem;
		z-index: 3;
	}
	.features-title span {
		position: relative;
		color: var(--yellow);
		width: 100%;
		white-space: normal;
		overflow-wrap: break-word;
		word-break: break-word;
	}

	.offer-card {
		padding: 20px;
		background-color: transparent;
		-webkit-backdrop-filter: blur(15px);
		backdrop-filter: blur(15px);
		border-radius: 42px 6px 24px 30px;
		border: 1px solid white;
		text-align: center;
        min-height: 500px;
		flex: 1 1 calc(50% - 30px);
		box-sizing: border-box;
	}
	.imgA {
		background-image: url('../assets/png-solair/panneaux-soleil.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		border: 1px solid white;
		margin: 20px auto;
	}
	.imgB {
		background-image: url('../assets/png-solair/panneaux-diagonale.png');
		/* background-size: cover; */
		background-position: center;
		background-repeat: no-repeat;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		margin: 20px auto;
	}
	.imgC {
		background-image: url('../assets/png-solair/montage-panneaux.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		margin: 20px auto;
	}
	.imgD {
		background-image: url('../assets/png-solair/économie-graphique.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		height: 200px;
		width: 200px;
		border-radius: 50%;
		margin: 20px auto;
	}
	.offer-card h3 {
		color: var(--text-blue);
		margin-bottom: 0.5rem;
		font-size: 1.7rem;
		font-weight: bolder;
		text-align: center;
		line-height: 2rem;
		margin-bottom: 2rem;
		background-color: transparent;
		border-radius: 10px;
		width: 100%;
		margin: 0px auto;
	}
    .offer-card p{
        color: var(--text-blue);
    }

	.wrapper__cta {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40px auto;
		width: 100%;
		z-index: 5;
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
	
		transition: 0.3s ease-in-out;
	}
	.cta:hover {
		background: var(--green);
	}
	.wrapper__cta-offre {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.cta-offre {
		background-color: var(--green);
		border: 1px solid white;
		border-radius: 10px;
		text-decoration: none;
		padding: 1rem 1.5rem;
		color: white;
		margin-top: 30px;
		box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.235);
		transition: 0.3s ease-in-out;
	}
	.cta-offre:hover {
		background-color: var(--yellow);
		color: black;
	}

	@media screen and (max-width: 768px) {
        .offer-card {
		flex: 1 1 100%;
	}
		.features-title {
			font-size: 3rem;
			color: white;
			margin-bottom: 1rem;
			text-align: center;
			line-height: 4rem;
			padding: 20px;
			white-space: normal;
			overflow-wrap: break-word;
			word-break: break-word;
		}
		.offer-card h3 {
			margin-bottom: 0.5rem;
			font-size: 2rem;
			text-align: center;
			line-height: 2rem;
			margin-bottom: 2rem;
			width: 100%;
		}
		.wrapper__cta {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0px;
			max-width: 90%;
		}
		.cta {
			min-width: 80%;
		}
	}
</style>
