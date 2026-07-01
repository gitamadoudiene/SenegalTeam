// ============================================================
// COMPOSANT : App.jsx
// ============================================================
// Ce fichier ne fait qu'assembler les composants dans le bon ordre.
// Vous n'avez rien à faire ici : concentrez-vous sur les autres fichiers !
// ============================================================

import Navbar from "./Navbar";
import Hero from "./Hero";
import Players from "./Players";
import Statistics from "./Statistics";
import Matches from "./Matches";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Players />
      <Statistics />
      <Matches />
      <Footer />
    </div>
  );
}
