<script>
	import PhotoClient from '../assets/Photo-client.png';
    import PhotoClient2 from '../assets/Photo-client2.png';
    import PhotoClient3 from '../assets/Photo-client3.png';

    let current = 0;
  
    const testimonials = [
      {
        name: "Claire M.",
        city: "Montbrison",
        message: "Grâce à SolairConfort, nous avons équipé notre maison sans avancer un centime sur les panneaux. Équipe sérieuse, délais respectés, rien à redire.",
        stars: 5,
        avatar: PhotoClient
      },
      {
        name: "Marc D.",
        city: "Saint-Étienne",
        message: "Installation rapide, matériel de qualité, et des économies dès la première facture. Merci à toute l'équipe !",
        stars: 5,
        avatar: PhotoClient2
      },
      {
        name: "Hugo R.",
        city: "Firminy",
        message: "Très pro du début à la fin. Une entreprise locale de confiance, je recommande à 100% !",
        stars: 5,
        avatar: PhotoClient3
      }
    ];
  
    function next() {
      current = (current + 1) % testimonials.length;
    }
  
    function prev() {
      current = (current - 1 + testimonials.length) % testimonials.length;
    }
  </script>

<section class="slider">
    <img class="avatar" src={testimonials[current].avatar} alt="clients" />
    <p class="stars">{"★".repeat(testimonials[current].stars)}</p>
    <blockquote>
      <p>“{testimonials[current].message}”</p>
    </blockquote>
    <footer><strong>{testimonials[current].name}</strong>, {testimonials[current].city}</footer>
  
    <div class="nav">
      <button on:click={prev}>← Précédent</button>
      <button on:click={next}>Suivant →</button>
    </div>
  </section>
  
  <style>
    .slider {
      max-width: 700px;
      margin: 2rem auto;
      padding: 2rem;
      background: #f9f9f9;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      text-align: center;
    }
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    .stars {
      color: #f1c40f;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .nav {
      margin-top: 1rem;
    }
    .nav button {
      background: var(--green);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      border-radius: 6px;
      cursor: pointer;
    }
    .nav button:hover {
      background: var(--cta);
    }
  </style>
  

  
