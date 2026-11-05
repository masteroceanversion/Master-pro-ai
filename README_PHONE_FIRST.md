# MASTERPRO AI PWA — phone-first setup

## What this version does

This is a browser-installable Progressive Web App (PWA). It runs on iPhone and Android browsers and processes selected audio files locally with the Web Audio API.

Included:
- 16 genre-specific starting profiles
- Upload original and optional reference audio
- Broad six-band tonal comparison against the reference
- Genre-guided EQ and dynamics compression
- Sample-peak ceiling control
- Basic audio analysis (duration, sample rate, channels, sample peak, RMS, crest factor)
- Original/master A/B playback
- 16-bit PCM WAV download
- Installable home-screen app shell and offline cached interface

Limitations:
- This is a practical DSP-based MVP, not a trained AI mastering model or a substitute for an experienced mastering engineer.
- The reference feature compares broad band energy; it does not copy a reference's processing or mix.
- LUFS/true-peak metering, oversampled true-peak limiting, multiband compression, stereo width processing, cloud accounts and MP3 export are not included in this PWA MVP.
- Audio decoding depends on the browser's supported formats. WAV and common AAC/MP3 files are the safest choices.
- The app shell works offline after first visit, but audio mastering happens in the browser and large files may exceed phone memory.

## Publish free from your phone using GitHub Pages

You need a GitHub account. These steps can be done in Safari or Chrome on your phone.

1. Open https://github.com and sign in.
2. Create a new **public** repository named `masterpro-ai`.
3. On your phone, extract `MASTERPRO_AI_PWA_phone_install.zip` using Files (iPhone) or your file manager (Android).
4. In the new GitHub repository, use **Add file → Upload files**. Upload the contents of the extracted project folder (including `index.html`, `package.json`, `src`, `public`, `vite.config.js`, and `.github` if included).
5. Commit the files to the `main` branch.
6. Open the repository's **Settings → Pages**.
7. Under **Build and deployment**, choose **GitHub Actions** as the source.
8. The included workflow builds the Vite app and publishes `dist`.
9. Open the **Actions** tab and wait for the Pages workflow to finish successfully.
10. Your website will be available at `https://YOUR-GITHUB-USERNAME.github.io/masterpro-ai/`.

If GitHub's mobile view hides Pages settings, use the browser menu and select **Request Desktop Website**. No computer is needed.

## Install on iPhone

1. Open the published HTTPS website in **Safari**.
2. Tap the Share icon.
3. Choose **Add to Home Screen**.
4. Keep the app name and tap **Add**.
5. Launch MASTERPRO AI from its new home-screen icon.

## Install on Android

1. Open the published HTTPS website in **Chrome**.
2. Open the three-dot menu.
3. Choose **Install app** or **Add to Home screen**.
4. Confirm installation and open MASTERPRO AI from the app icon.

## Updating the app

Upload changed project files to the same GitHub repository and commit. GitHub Actions rebuilds and republishes the app. Reopen the app online to receive the updated shell.

## Privacy

Audio is processed locally in your browser. This version does not upload audio to a mastering server. GitHub Pages hosts the static app files only. Avoid selecting audio files on a shared device.
