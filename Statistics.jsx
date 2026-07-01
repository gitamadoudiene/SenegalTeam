// ============================================================
// COMPOSANT : Statistics.jsx
// ============================================================
// Quatre chiffres clés de l'équipe nationale, à transformer
// en cartes statistiques modernes.
// ============================================================

const stats = [
  { chiffre: "27", label: "Joueurs" },
  { chiffre: "6", label: "Qualifications" },
  { chiffre: "1", label: "CAN remportée" },
  { chiffre: "15", label: "Victoires" },
];

export default function Statistics() {
  return (
    // TODO : Ajouter un fond différent de la section précédente pour créer une rupture visuelle (bg-...).
    // TODO : Ajouter un padding vertical (py-20).
    <section id="statistiques">
      {/* TODO : Centrer et limiter la largeur du conteneur (max-w-7xl, mx-auto, px-6). */}
      <div>
        {/* TODO : Transformer en Grid. 2 colonnes sur mobile (grid-cols-2), 4 sur desktop (md:grid-cols-4).
            Ajouter un espacement (gap-8). */}
        <div>
          {stats.map((stat, index) => (
            // TODO : Centrer le texte de chaque carte (text-center).
            // TODO : Ajouter un padding, un fond légèrement différent, un arrondi et une bordure discrète.
            <div key={index}>
              {/* TODO : Le chiffre doit être énorme et impactant (text-5xl ou plus, font-extrabold). */}
              <p>{stat.chiffre}</p>
              {/* TODO : Le label doit être petit, en majuscules, avec un léger espacement de lettres (tracking-widest). */}
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
