# SSCodeAgent01

## Sovelluksen kuvaus

SSCodeAgent01 on moderni React-sovellus, joka demonstroi web-kehityksen parhaita käytäntöjä käyttäen uusimpia teknologioita. Sovellus sisältää:

- **Etusivu (Home)**: Esittelee sovelluksen ominaisuudet ja teknologiat visuaalisesti näyttävällä tavalla
- **Tietoja (About)**: Kertoo projektin taustoista, käytetyistä teknologioista ja kehityksen etenemisestä
- **Käyttäjäprofiili (User)**: Täysin toimiva käyttäjäprofiilin hallintasivu, jossa voi muokata henkilötietoja, asetuksia ja turvallisuusasetuksia
- **Demo**: Interaktiivinen demoympäristö, joka esittelee sovelluksen komponentteja ja ominaisuuksia

Sovellus on rakennettu responsiiviseksi, joten se toimii saumattomasti kaikilla laitteilla älypuhelimista työpöytätietokoneisiin.

## Käytetyt teknologiat ja tärkeät huomiot

### React 19
- **Versio**: 19.1.1 (uusin versio)
- **Käyttö**: Sovelluksen ytimessä oleva UI-kirjasto
- **Tärkeät huomiot**: 
  - Käyttää React 19:n uusimpia ominaisuuksia, kuten paranneltua Suspense-tukea
  - StrictMode käytössä kehitysvaiheessa mahdollisten ongelmien havaitsemiseksi
  - Optimoitu suorituskyky modernilla komponenttiarkkitehtuurilla

### TypeScript
- **Versio**: ~5.8.3
- **Käyttö**: Koko sovellus on kirjoitettu TypeScriptillä
- **Tärkeät huomiot**:
  - Tarjoaa täyden tyyppiturvalllisuuden, mikä vähentää virheitä ja parantaa kehittäjäkokemusta
  - Strikt-konfiguraatio käytössä maksimaalisen tyyppitarkistuksen saavuttamiseksi
  - Kaikki komponentit ja funktiot on tyypitetty

### Vite
- **Versio**: ^7.1.2
- **Käyttö**: Kehityspalvelin ja build-työkalu
- **Tärkeät huomiot**:
  - Erittäin nopea Hot Module Replacement (HMR) kehityksen aikana
  - Optimoidut tuotantobuildit
  - Moderni ES-moduuleihin perustuva arkkitehtuuri
  - Plugin: @vitejs/plugin-react (käyttää Babelia Fast Refresh -toiminnallisuuteen)

### Material-UI (MUI)
- **Versio**: ^7.3.1
- **Paketit**: 
  - `@mui/material` - Peruskomponentit
  - `@mui/icons-material` - Ikonit
  - `@mui/lab` - Kokeelliset komponentit (esim. Timeline)
  - `@mui/system` - Styling-järjestelmä
  - `@emotion/react` & `@emotion/styled` - CSS-in-JS kirjastot
- **Tärkeät huomiot**:
  - Material Design -periaatteita noudattava johdonmukainen käyttöliittymä
  - Laaja valikoima valmiita, saavutettavia komponentteja
  - Teemoitus ja tyylit määritelty keskitetysti (`src/theme`)
  - Responsiivinen grid-järjestelmä

### React Router
- **Versio**: ^7.8.2 (sekä react-router että react-router-dom)
- **Käyttö**: Client-side routing monisivuiseen sovellukseen
- **Tärkeät huomiot**:
  - Versio 7 on uusin julkaisu merkittävillä parannuksilla
  - Käytössä client-mode (BrowserRouter)
  - Nested routing Layout-komponentin kanssa
  - Smooth navigation ilman sivun uudelleenlatausta

### ESLint
- **Versio**: ^9.33.0
- **Käyttö**: Koodin laadun varmistaminen
- **Tärkeät huomiot**:
  - TypeScript ESLint -konfiguraatio käytössä
  - React-specific lint säännöt (react-hooks, react-refresh)
  - Moderni flat config -formaatti (eslint.config.js)

## Asennus ja käynnistys

### Vaatimukset
- Node.js (suositeltu versio 18 tai uudempi)
- npm tai yarn

### Asennusohjeet

1. Kloonaa repositorio:
```bash
git clone https://github.com/sutinse/sscodeagent01.git
cd sscodeagent01
```

2. Asenna riippuvuudet:
```bash
npm install
```

3. Käynnistä kehityspalvelin:
```bash
npm run dev
```

Sovellus käynnistyy osoitteessa `http://localhost:5173`

### Muut komennot

- **Build tuotantoa varten**: `npm run build`
  - Luo optimoidun tuotantoversion `dist/` kansioon
  - TypeScript-tarkistus suoritetaan ennen buildia
  
- **Esikatsele tuotantobuildia**: `npm run preview`
  - Käynnistää paikallisen palvelimen tuotantobuildia varten
  
- **Lint koodi**: `npm run lint`
  - Tarkistaa koodin ESLint-sääntöjen mukaisesti

## Projektin rakenne

```
sscodeagent01/
├── public/              # Staattiset tiedostot
├── src/
│   ├── components/      # Uudelleenkäytettävät React-komponentit
│   │   ├── layout/      # Layout-komponentit (Header, Sidebar, Footer)
│   │   ├── ErrorBoundary.tsx
│   │   └── LoadingComponents.tsx
│   ├── pages/          # Sivukomponentit
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── User.tsx
│   │   └── Demo.tsx
│   ├── hooks/          # Custom React hooks
│   ├── services/       # API-palvelut ja business-logiikka
│   ├── theme/          # MUI-teemoitus
│   ├── App.tsx         # Pääkomponentti
│   └── main.tsx        # Sovelluksen aloituspiste
├── index.html
├── package.json
├── tsconfig.json       # TypeScript-konfiguraatio
├── vite.config.ts      # Vite-konfiguraatio
└── eslint.config.js    # ESLint-konfiguraatio
```

## Kehityshuomiot

- Sovellus käyttää React 19:n Suspense- ja ErrorBoundary-ominaisuuksia paremman käyttökokemuksen saavuttamiseksi
- Kaikki tyylit on määritelty Material-UI:n sx-prop tai styled-components -lähestymistavan kautta
- Responsiivisuus on toteutettu MUI:n breakpoint-järjestelmällä
- Sovellus noudattaa React 19:n best practices -käytäntöjä

## Lisenssi

Tämä projekti on yksityinen (private: true package.json:issa).
