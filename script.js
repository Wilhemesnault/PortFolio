/* ═══════════════════════════════════════
   script.js — partagé par toutes les pages
   index.html / cv.html / missions.html / stage.html
═══════════════════════════════════════ */

/* ─── Accordéon missions AP ─── */
function toggleMission(card) {
  card.classList.toggle('open');
}

/* ─── Overlay CV ─── */
function openCV() {
  document.getElementById('cv-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCV() {
  document.getElementById('cv-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Événements au chargement ─── */
document.addEventListener('DOMContentLoaded', function () {

  /* Fermer l'overlay CV en cliquant sur le fond */
  const overlay = document.getElementById('cv-overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === this) closeCV();
    });
  }

  /* Fermer l'overlay CV avec la touche Échap */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeCV();
  });

});
