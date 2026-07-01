// ============================================================
// COMPOSANT : Footer.jsx
// ============================================================
// Le pied de page du site : logo, liens utiles, réseaux sociaux
// et mention de copyright.
// ============================================================

export default function Footer() {
  return (
    // TODO : Ajouter un fond sombre (bg-...), un padding vertical (py-16) et un texte clair par défaut.
    <footer>
      {/* TODO : Centrer et limiter la largeur du conteneur (max-w-7xl, mx-auto, px-6). */}
      <div>
        {/* TODO : Transformer en Grid ou Flexbox : logo à gauche, liens au centre, réseaux à droite.
            Empiler en colonne sur mobile (flex-col), en ligne sur desktop (md:flex-row). */}
        <div>
          {/* TODO : Styliser le bloc logo + nom (Flexbox, gap, alignement vertical). */}
          <div>
            <span>Lions du Sénégal</span>
          </div>

          {/* TODO : Aligner ces liens horizontalement avec un espacement (gap-6). */}
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#joueurs">Joueurs</a></li>
            <li><a href="#calendrier">Calendrier</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* TODO : Aligner les icônes des réseaux sociaux horizontalement (gap-4).
              Ajouter un effet hover sur chaque icône (changement de couleur). */}
          <div>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">X</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* TODO : Ajouter une ligne de séparation (border-t) au-dessus du copyright. */}
        {/* TODO : Centrer le texte de copyright, réduire sa taille et atténuer sa couleur. */}
        <p>© 2026 Fédération Sénégalaise de Football. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
