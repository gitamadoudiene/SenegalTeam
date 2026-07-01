// ============================================================
// COMPOSANT : Players.jsx
// ============================================================
// Cette section présente 4 joueurs de l'équipe nationale.
// Les données sont déjà prêtes : votre travail est uniquement
// sur la mise en page et le style, pas sur le contenu.
// ============================================================

import PlayerCard from "./PlayerCard";

const joueurs = [
  {
    id: 1,
    nom: "Sadio Mané",
    poste: "Attaquant",
    club: "Al Nassr FC",
    numero: 10,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPstINV3o5mljjuLGvXKUkXIOYM3pczkEGOgbiUz11UeKMKeup66hwlztG&s=10",
  },
  {
    id: 2,
    nom: "Kalidou Koulibaly",
    poste: "Défenseur central",
    club: "Al-Hilal SFC",
    numero: 3,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Kalidou_Koulibaly_France_v_Senegal_16_June_2026-370_%28cropped%29.jpg",
  },
  {
    id: 3,
    nom: "Édouard Mendy",
    poste: "Gardien de but",
    club: "Al-Ahli SFC",
    numero: 1,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Edouard_Mendy_France_v_Senegal_16_June_2026-375_%28cropped%29.jpg",
  },
  {
    id: 4,
    nom: "Ismaïla Sarr",
    poste: "Ailier",
    club: "Crystal Palace FC",
    numero: 7,
    photo:
      "https://wiwsport.com/wp-content/uploads/2024/01/Sarr-iso.jpg",
  },
];


export default function Players() {
  return (
    // TODO : Ajouter un padding vertical généreux (py-24) et un fond de section.
    <section id="joueurs">
      {/* TODO : Centrer ce conteneur (mx-auto), lui donner une largeur maximale (max-w-7xl) et un padding horizontal. */}
      <div>
        {/* TODO : Centrer ce bloc d'introduction (text-center) et limiter sa largeur (max-w-2xl, mx-auto). */}
        <div>
          {/* TODO : Styliser le titre de section : grande taille, gras, majuscules. */}
          <h2>Les Joueurs</h2>
          {/* TODO : Styliser le texte d'introduction : couleur atténuée, marge au-dessus. */}
          <p>
            Découvrez les Lions de la Teranga qui porteront les couleurs du
            Sénégal lors de la Coupe du Monde 2026.
          </p>
        </div>

        {/* TODO : Transformer ce conteneur en Grid. 1 colonne sur mobile, 2 sur tablette (md:grid-cols-2),
            4 sur grand écran (lg:grid-cols-4). Ajouter un espacement entre les cartes (gap-8). */}
        {/* TODO : Ajouter une marge au-dessus de la grille (mt-16). */}
        <div>
          {joueurs.map((joueur) => (
            <PlayerCard key={joueur.id} player={joueur} />
          ))}
        </div>
      </div>
    </section>
  );
}
