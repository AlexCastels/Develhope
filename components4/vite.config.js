import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:3000
  }
})

// Per poter settare il 'port' del server vite, ci basterà modificare il file vite.config.js 
// aggiungendo alla funzione l'oggetto 'server' e specificando la proprietà 'port' con 3000
// dopodichè bisognerà aggiornare il file launch.json modificando la porta dell'indirizzo dell'URL con il nuovo valore (http://localhost:3000)