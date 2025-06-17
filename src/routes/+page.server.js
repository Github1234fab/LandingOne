
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    // Tu peux traiter ici : envoi mail, appel API, etc.
    console.log('Formulaire reçu :', Object.fromEntries(data));

    throw redirect(303, '/merci');
  }
};