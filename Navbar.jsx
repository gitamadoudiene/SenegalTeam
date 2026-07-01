// ============================================================
// COMPOSANT : Navbar.jsx
// ============================================================
// Ce composant affiche la barre de navigation du site.
// Pour l'instant, tout est en HTML "brut" : aucune classe Tailwind
// n'a encore été appliquée. À vous de jouer !
// ============================================================

export default function Navbar() {
  return (
    // TODO : Rendre cette barre "sticky" en haut de l'écran (position sticky, top-0, z-index élevé).
    // TODO : Ajouter un fond semi-transparent (bg-black/xx) + un effet "verre dépoli" (backdrop-blur).
    // TODO : Ajouter un padding vertical et horizontal confortable.
    <nav>
      {/* TODO : Transformer ce conteneur en Flexbox pour aligner logo + menu + bouton sur une seule ligne. */}
      {/* TODO : Utiliser justify-between pour espacer les éléments aux extrémités. */}
      {/* TODO : Ajouter une largeur maximale (max-w-7xl) et centrer le conteneur (mx-auto). */}
      <div>
        {/* TODO : Mettre le logo et le nom de l'équipe côte à côte (Flexbox + gap). */}
        <div>
          {/* TODO : Remplacer par un vrai logo (rond, bordure dorée, taille fixe w-x h-x). */}
          <img
            src="https://images.unsplash.com/photo-1706675780107-7c43cc487928?auto=format&fit=crop&w=100&q=80"
            alt="Logo Lions du Sénégal"
          />
          {/* TODO : Styliser ce titre : taille de police, graisse (font-bold), couleur, majuscules (uppercase), tracking. */}
          <span>Lions du Sénégal</span>
        </div>

        {/* TODO : Transformer ce menu en Flexbox horizontal avec un espacement (gap) entre les liens. */}
        {/* TODO : Cacher ce menu sur mobile (hidden) et l'afficher à partir d'un breakpoint (md:flex). */}
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#joueurs">Joueurs</a></li>
          <li><a href="#calendrier">Calendrier</a></li>
          <li><a href="#statistiques">Statistiques</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* TODO : Styliser ce bouton : couleur de fond, texte blanc, padding, arrondi (rounded-full). */}
        {/* TODO : Ajouter un effet au survol (hover:bg-..., transition-colors, duration-300). */}
        <button>Billetterie</button>
      </div>

      {/* Astuce : sur chaque lien du menu, pensez à ajouter un effet hover (changement de couleur,
          soulignement, ou petite transition) pour rendre la navigation plus vivante. */}
    </nav>
  );
}
