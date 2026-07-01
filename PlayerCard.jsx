// ============================================================
// COMPOSANT : PlayerCard.jsx
// ============================================================
// Ce composant reçoit un joueur en "props" et doit l'afficher
// sous forme de carte premium. Pour l'instant, c'est juste du texte brut.
// ============================================================

export default function PlayerCard({ player }) {
  return (
    // TODO : Donner à cette carte un fond, un arrondi (rounded-2xl), une ombre (shadow-xl)
    // et faire en sorte que le contenu qui dépasse soit masqué (overflow-hidden).
    // TODO : Ajouter une transition globale (transition-all, duration-300) pour préparer les effets au survol.
    // TODO : Au survol de la carte (group-hover), déplacer légèrement la carte vers le haut (hover:-translate-y-2).
    <div>
      {/* TODO : Fixer une hauteur pour le conteneur de l'image (h-72) et le mettre en position relative. */}
      <div>
        {/* TODO : Faire en sorte que l'image remplisse tout le conteneur (w-full, h-full, object-cover). */}
        {/* TODO : Ajouter un effet de zoom au survol de la carte (group + group-hover:scale-110, transition-transform). */}
        <img src={player.photo} alt={player.nom} />

        {/* TODO : Positionner ce badge en haut à droite de l'image (absolute, top-x, right-x). */}
        {/* TODO : Styliser le badge : forme ronde, fond coloré, texte blanc, centré, taille fixe. */}
        <span>{player.numero}</span>
      </div>

      {/* TODO : Ajouter du padding autour du texte de la carte (p-6). */}
      <div>
        {/* TODO : Styliser le nom : grande taille, gras, couleur principale. */}
        <h3>{player.nom}</h3>

        {/* TODO : Styliser le poste : couleur secondaire, petite taille, majuscules, letter-spacing. */}
        <p>{player.poste}</p>

        {/* TODO : Ajouter une séparation visuelle (border-t) puis afficher le club avec une icône ou un style discret. */}
        <p>{player.club}</p>
      </div>
    </div>
  );
}
