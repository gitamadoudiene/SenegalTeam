// ============================================================
// COMPOSANT : Hero.jsx
// ============================================================
// La section Hero est la première chose que les visiteurs voient.
// Elle doit être spectaculaire ! Pour l'instant, elle est toute nue.
// ============================================================

export default function Hero() {
  return (
    // TODO : Donner une hauteur pleine écran à cette section (h-screen ou min-h-screen).
    // TODO : Utiliser cette image comme fond d'écran (bg-[url('...')], bg-cover, bg-center).
    // TODO : Positionner cette section en "relative" pour pouvoir superposer un overlay plus tard.
    <section>
      {/* TODO : Créer un overlay sombre par-dessus l'image (absolute, inset-0, bg-black/xx)
          pour que le texte blanc reste lisible. */}
      <div>overlay</div>

      {/* TODO : Centrer tout le contenu texte horizontalement et verticalement
          (flex, flex-col, items-center, justify-center, h-full, text-center). */}
      <div>
        {/* TODO : Donner à ce titre une taille énorme (text-6xl, md:text-8xl),
            une graisse extra-bold, une couleur blanche, et des majuscules. */}
        <h1>Lions de la Teranga</h1>

        {/* TODO : Styliser ce sous-titre : taille moyenne, couleur légèrement atténuée,
            espacement au-dessus (margin-top). */}
        <p>En route vers la Coupe du Monde 2026</p>

        {/* TODO : Aligner ces deux boutons en Flexbox avec un espacement (gap-4). */}
        <div>
          {/* TODO : Bouton principal : fond coloré plein, texte blanc, padding généreux, rounded-full. */}
          <button>Découvrir l'équipe</button>

          {/* TODO : Bouton secondaire : bordure (border), fond transparent, texte blanc,
              même padding et arrondi que le bouton principal. */}
          <button>Calendrier</button>
        </div>

        {/* TODO : Ajouter une petite animation de "scroll" en bas de la section
            (icône ou trait vertical, avec animate-bounce). */}
        <div>défiler vers le bas</div>
      </div>
    </section>
  );
}
