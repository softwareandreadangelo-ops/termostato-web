# Termostato Web v0.1

Una piccola interfaccia dimostrativa per controllare un termostato. Il progetto usa React, Vite e TypeScript. I dati sono simulati: non è collegato a un dispositivo reale.

## Avvio sul tuo computer (Windows)

1. Installa Node.js LTS da https://nodejs.org/ se non è già presente.
2. Estrai il file ZIP in una cartella.
3. Apri quella cartella in Visual Studio Code.
4. Dal menu **Terminale > Nuovo terminale**, esegui:

   ```bash
   npm install
   npm run dev
   ```

5. Apri nel browser l’indirizzo mostrato nel terminale (di solito http://localhost:5173).

Per chiudere il server premi `Ctrl+C` nel terminale.

## Pubblicare gratis con GitHub Pages

Il progetto include già il flusso automatico `.github/workflows/deploy.yml`.

1. Crea o accedi a un account su https://github.com.
2. Crea un nuovo repository, per esempio `termostato-web`, e rendilo **Public**.
3. Carica tutti i file del progetto, inclusa la cartella nascosta `.github`, e salva il ramo principale con nome `main`.
4. Nel repository apri **Settings > Pages** e scegli **GitHub Actions** come origine.
5. Apri la scheda **Actions** e attendi che il flusso “Pubblica su GitHub Pages” termini con il segno verde.
6. L’indirizzo del sito sarà mostrato in **Settings > Pages** e nel dettaglio dell’esecuzione completata. Chiunque potrà aprirlo.

GitHub costruisce e pubblica il sito a ogni aggiornamento inviato al ramo `main`.

## Dove modificare

- `src/App.tsx`: schermata e controlli della demo.
- `src/style.css`: colori e impaginazione.
- `src/device.ts`: punto di accesso simulato al termostato. In futuro le funzioni `getDeviceState` e `setTargetTemperature` potranno comunicare con il dispositivo reale.

I pulsanti + e − cambiano la temperatura desiderata solo nella schermata dimostrativa.
