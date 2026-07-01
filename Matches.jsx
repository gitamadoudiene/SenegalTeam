// ============================================================
// COMPOSANT : Matches.jsx
// ============================================================
// Cette section présente les prochains matchs de l'équipe
// sous forme de cartes.
// ============================================================

const matchs = [
  {
    id: 1,
    equipeAdverse: "Égypte",
    drapeauSenegal: "🇸🇳",
    drapeauAdverse: "🇪🇬",
    date: "12 Septembre 2026",
    stade: "Stade Abdoulaye Wade, Dakar",
  },
  {
    id: 2,
    equipeAdverse: "Maroc",
    drapeauSenegal: "🇸🇳",
    drapeauAdverse: "🇲🇦",
    date: "9 Octobre 2026",
    stade: "Stade Mohammed V, Casablanca",
  },
  {
    id: 3,
    equipeAdverse: "Nigéria",
    drapeauSenegal: "🇸🇳",
    drapeauAdverse: "🇳🇬",
    date: "14 Novembre 2026",
    stade: "Stade Abdoulaye Wade, Dakar",
  },
];

export default function Matches() {
  return (
    // TODO : Ajouter un padding vertical généreux (py-24).
    <section id="calendrier">
      {/* TODO : Centrer et limiter la largeur du conteneur. */}
      <div>
        {/* TODO : Styliser le titre de section (centré, grand, gras). */}
        <h2>Prochains Matchs</h2>

        {/* TODO : Transformer en Grid responsive : 1 colonne sur mobile, 3 colonnes sur desktop (md:grid-cols-3).
            Ajouter un espacement (gap-6) et une marge au-dessus (mt-12). */}
        <div>
          {matchs.map((match) => (
            // TODO : Ajouter un fond, un arrondi, une ombre et un padding à chaque carte.
            // TODO : Ajouter un effet hover (légère élévation + ombre plus forte).
            <div key={match.id}>
              {/* TODO : Aligner les deux équipes et les drapeaux en Flexbox, avec justify-between. */}
              <div>
                <span>{match.drapeauSenegal} Sénégal</span>
                <span>VS</span>
                <span>{match.drapeauAdverse} {match.equipeAdverse}</span>
              </div>

              {/* TODO : Styliser la date (couleur accent, gras, marge au-dessus). */}
              <p>{match.date}</p>

              {/* TODO : Styliser le nom du stade (petite taille, couleur atténuée). */}
              <p>{match.stade}</p>

              {/* TODO : Styliser ce bouton (pleine largeur, fond coloré, arrondi, hover). */}
              <button>Voir le match</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
