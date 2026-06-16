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

/* ─── Modals projets (stage.html) ─── */
function openProject(id) {
  // Fermer tout panneau ouvert d'abord
  document.querySelectorAll('.project-modal.open').forEach(function(m) {
    m.classList.remove('open');
  });
  var panel = document.getElementById(id);
  panel.classList.add('open');
  panel.scrollTop = 0;
}

function closeProjectModal(e, modal) {
  // Gardé pour compatibilité, ne fait rien sur le fond (c'est un panneau plein écran)
}

function closeProjectById(id) {
  var modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('open');
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.project-modal.open').forEach(function(m) {
      m.classList.remove('open');
    });
  }
});
