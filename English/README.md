# English Learning V2

A local-first English learning app with:
- Profession-based lesson library
- Daily journal
- Sentence Builder
- Dynamic quiz generated from journal + lessons + mistakes
- Mistake Book
- 7/14/21/30-day review
- Cumulative 1% improvement tracking
- Dashboard with streak, vocabulary, quiz score and daily progress
- Optional AI provider configuration (OpenAI, Gemini, Claude or compatible OpenAI-style endpoint)

## Run
No build step is required for the core static app.

1. Extract the ZIP.
2. Open `index.html` in a browser.
3. For AI features, run the optional Node proxy:
   `cd server`
   `npm install`
   `node server.js`
4. Open the app and set the AI endpoint in Settings.

## Important
Never put a real API key in frontend JavaScript. The included optional server stores the key in environment variables.
