
<script>
     import { onMount } from 'svelte';

onMount(() => {
  gtag('event', 'conversion', {
    'send_to': 'AW-17160903163/tXCACLnDptkaEPuz-vY_',  // Remplace YYY par ton label de conversion exact
    'value': 1.0,
    'currency': 'EUR'
  });
});
  </script>


<main id="merci" class="merci-page">
    <h1>Merci pour votre demande !</h1>
    <p>Nous vous recontacterons dans les plus brefs délais.</p>
    <p>Vous allez être redirigé vers la page d'accueil dans quelques secondes…</p>

  </main>
  
  <style>
    .merci-page {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
  </style>