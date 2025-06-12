<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Vérifie que la librairie est chargée
      window.cookieconsent.initialise({
  palette: {
    popup: { background: "#000" },
    button: { background: "#f1d600" }
  },
  theme: "classic",
  position: "bottom-right",
  type: "opt-in", // 🔴 important pour permettre le choix
  content: {
    message: "Ce site utilise des cookies pour améliorer votre expérience.",
    dismiss: "Refuser",
    allow: "Accepter",
  },
  onInitialise: function (status) {
    const didConsent = this.hasConsented();
    console.log("Consentement initial :", status, didConsent);
    // Ici, tu peux déclencher le code qui dépend du consentement
  },
  onStatusChange: function(status, chosenBefore) {
    const didConsent = this.hasConsented();
    console.log("Consentement modifié :", status, didConsent);
    // Exécuter ou bloquer certains scripts selon le choix
  },
});
}
);
  </script>

<slot />