import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    whatsapp: {
      number: "6287866861146",
      label: "+62 878-6686-1146",
      message:
        "Halo Nil Entertain, saya tertarik dengan layanan Photobooth/Videobooth. Bisa bantu info lebih lanjut?",
      name: "Fendi",
    },
    email: "hello@nilentertain.com",
    instagram: "nil.entertain",
    location: "Bali, Indonesia",
  }),
  getters: {
    whatsappLink(state) {
      const encodedMessage = encodeURIComponent(state.whatsapp.message);
      return `https://wa.me/${state.whatsapp.number}?text=${encodedMessage}`;
    },
  },
});
