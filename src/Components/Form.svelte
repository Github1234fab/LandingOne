<script>

import FB from "../assets/fb.png";
import lin from "../assets/lin.png";
import insta from "../assets/insta.png";



</script>

<section id="contact">
	<h2>Obtenez votre devis gratuit</h2>
	
	<form name="contact" method="POST" netlify-honeypot="bot-field"
	data-netlify="true" netlify>
    <input type="hidden" name="form-name" value="contact" />
    
    <label>Nom :
      <input type="text" name="name"  required />
    </label><br />
    
    <label>Email :
      <input type="email" name="email" required />
    </label><br />
    
    <label>Téléphone :
      <input type="tel" name="phone" required />
    </label><br />
    
    <label>Votre projet :
      <textarea name="message"  rows="4" required></textarea>
    </label><br />
    
    <button class="cta" type="submit">Envoyer</button>
  </form>



	<div class="wrapper__socialMedia">
		<a href="https://www.linkedin.com/in/yannick-barraud-06546b283/"><img src={FB} alt="facebook"></a>
		<a href="https://www.instagram.com/solairconfort/"><img src={lin} alt="linkedIn"></a>
		<a href="https://www.facebook.com/profile.php?id=61566251125721">	<img src={insta} alt="instagram"></a>
	</div>
	<p>
		<strong>SolairConfort</strong> – 23 Rue Louis Pergaud 42240 UNIEUX<br />
		Tel : <a href="tel:0673209421">06 73 20 94 21</a><br />
		Email : <a href="mailto:contact@solairconfort.fr">contact@solairconfort.fr</a>
	</p>
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
		background: linear-gradient(var(--text-blue), var(--primary-blue)) ;
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
		background-color: #d8a21a;
		color: white;
		font-weight: bold;
		border: none;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
		border-radius: 5px;
		margin-top: 2rem;
		border-radius: 10px;
		font-size: 1rem;
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
	}
	img:hover {
		transform: scale(1.1);
	}
	@media screen and (max-width: 768px) {
		form {
			width: 90%;
		}
	}
</style>
