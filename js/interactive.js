// DigiSavoir - Interactive Enhancements & Psychological Conversion Hooks
(function() {
  'use strict';

  // 1. Typewriter Animation for Hero Dynamic Benefits
  const phrases = [
    "pour booster vos revenus à Cotonou.",
    "pour décrocher des missions freelance bien payées.",
    "pour automatiser votre boutique et vos ventes.",
    "pour gagner 4 heures par semaine grâce à Excel.",
    "pour lancer votre business sans jargon technique."
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeEl = document.getElementById('typewriter-text');

  function typeTick() {
    if (!typeEl) return;
    const current = phrases[phraseIdx];
    if (isDeleting) {
      charIdx--;
      typeEl.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      typeEl.textContent = current.substring(0, charIdx);
    }

    let speed = isDeleting ? 30 : 65;

    if (!isDeleting && charIdx === current.length) {
      speed = 2200; // Pause at end of sentence
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400; // Pause before typing next
    }

    setTimeout(typeTick, speed);
  }

  if (typeEl) {
    setTimeout(typeTick, 600);
  }

  // 2. Micro-notifications : Preuve sociale en direct (Contexte Afrique de l'Ouest)
  const socialEvents = [
    { name: "Franck K.", city: "Fidjrossè (Cotonou)", action: "a rejoint le Pack Entrepreneur", time: "il y a 3 min" },
    { name: "Carine A.", city: "Akpakpa (Cotonou)", action: "a débloqué Excel : du débutant au tableau de bord", time: "il y a 7 min" },
    { name: "Ibrahim M.", city: "Lomé (Togo)", action: "a validé Créer sa boutique sans coder", time: "il y a 12 min" },
    { name: "Sika T.", city: "Calavi", action: "a commandé Canva pro : visuels qui vendent", time: "il y a 16 min" },
    { name: "Marc O.", city: "Cocody (Abidjan)", action: "a activé Marketing digital & WhatsApp Business", time: "il y a 21 min" }
  ];
  let notifyIdx = 0;
  let notifyEl = null;

  function showSocialNotify() {
    if (sessionStorage.getItem('digi_hide_notify')) return;
    if (!notifyEl) {
      notifyEl = document.createElement('div');
      notifyEl.className = 'live-notify';
      notifyEl.setAttribute('role', 'status');
      notifyEl.innerHTML = `
        <div class="live-notify-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div class="live-notify-text">
          <b id="notify-lead"></b>
          <span id="notify-sub" style="color:var(--muted)"></span>
        </div>
        <button class="live-notify-close" aria-label="Fermer la notification">&times;</button>
      `;
      document.body.appendChild(notifyEl);
      notifyEl.querySelector('.live-notify-close').addEventListener('click', () => {
        notifyEl.classList.remove('show');
        sessionStorage.setItem('digi_hide_notify', '1');
      });
    }

    const item = socialEvents[notifyIdx % socialEvents.length];
    notifyIdx++;
    const lead = notifyEl.querySelector('#notify-lead');
    const sub = notifyEl.querySelector('#notify-sub');
    if (lead) lead.textContent = `${item.name} · ${item.city}`;
    if (sub) sub.textContent = `${item.action} (${item.time})`;

    notifyEl.classList.add('show');
    setTimeout(() => {
      if (notifyEl) notifyEl.classList.remove('show');
    }, 6500);
  }

  // Schedule first social notification after 6s, then every 24s
  setTimeout(() => {
    showSocialNotify();
    setInterval(showSocialNotify, 24000);
  }, 6000);

  // 3. Quiz d'orientation en 30 secondes ("Faire le quiz (30 s)")
  window.openDigiQuiz = function() {
    const modalContent = `
      <div id="digi-quiz-container">
        <div class="quiz-modal-step active" data-step="1">
          <span class="calli-badge" style="margin-bottom:0.75rem;">Quiz d'orientation flash (30 s)</span>
          <h2 style="font-size:1.4rem;line-height:1.2;margin:0.4rem 0 0.4rem;">Quel est votre objectif principal pour 2027 ?</h2>
          <p class="muted" style="font-size:0.88rem;margin-bottom:1rem;">Question 1 sur 3 · Répondez en un clic.</p>
          <div class="quiz-options">
            <button class="quiz-opt-btn" onclick="window.quizAnswer('goal', 'career', 'excel')">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg> Être plus efficace au bureau & monter en grade</span>
              <span>&rarr;</span>
            </button>
            <button class="quiz-opt-btn" onclick="window.quizAnswer('goal', 'sales', 'marketing')">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> Vendre mes produits en ligne & sur WhatsApp</span>
              <span>&rarr;</span>
            </button>
            <button class="quiz-opt-btn" onclick="window.quizAnswer('goal', 'business', 'pack-entrepreneur')">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/></svg> Lancer mon activité complète de A à Z</span>
              <span>&rarr;</span>
            </button>
            <button class="quiz-opt-btn" onclick="window.quizAnswer('goal', 'design', 'canva')">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.5-.68 1.5-1.5 0-.42-.17-.82-.46-1.12-.29-.3-.46-.72-.46-1.18 0-.92.68-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.7-10-9.7z"/></svg> Créer des visuels & affiches pros en 10 minutes</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div class="quiz-modal-step" data-step="2">
          <span class="calli-badge" style="margin-bottom:0.75rem;">Quiz d'orientation flash</span>
          <h2 style="font-size:1.4rem;line-height:1.2;margin:0.4rem 0 0.4rem;">Combien de temps pouvez-vous consacrer par jour ?</h2>
          <p class="muted" style="font-size:0.88rem;margin-bottom:1rem;">Question 2 sur 3 · Nos formations sont modulaires.</p>
          <div class="quiz-options">
            <button class="quiz-opt-btn" onclick="window.quizNextStep(3)">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> 10 à 15 minutes (depuis mon smartphone)</span>
              <span>&rarr;</span>
            </button>
            <button class="quiz-opt-btn" onclick="window.quizNextStep(3)">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 30 à 45 minutes par jour</span>
              <span>&rarr;</span>
            </button>
            <button class="quiz-opt-btn" onclick="window.quizNextStep(3)">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Quelques heures le week-end</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div class="quiz-modal-step" data-step="3">
          <span class="calli-badge" style="margin-bottom:0.75rem;">Quiz d'orientation flash</span>
          <h2 style="font-size:1.4rem;line-height:1.2;margin:0.4rem 0 0.4rem;">Sur quel appareil allez-vous suivre les cours ?</h2>
          <p class="muted" style="font-size:0.88rem;margin-bottom:1rem;">Question 3 sur 3 · Accès immédiat garanti.</p>
          <div class="quiz-options">
            <button class="quiz-opt-btn" onclick="window.quizShowResult()">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg> Uniquement sur smartphone (Android / iPhone)</span>
              <span>Terminer &rarr;</span>
            </button>
            <button class="quiz-opt-btn" onclick="window.quizShowResult()">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg> Sur ordinateur portable ou de bureau</span>
              <span>Terminer &rarr;</span>
            </button>
            <button class="quiz-opt-btn" onclick="window.quizShowResult()">
              <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:-2px;margin-right:6px;"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l5.64 4.36A9 9 0 0 0 20.49 15"/></svg> Les deux selon mon emploi du temps</span>
              <span>Terminer &rarr;</span>
            </button>
          </div>
        </div>

        <div class="quiz-modal-step" data-step="result">
          <div style="text-align:center;padding:1rem 0;">
            <div style="width:48px;height:48px;border-radius:50%;background:rgba(16,185,129,0.12);color:var(--acc);display:grid;place-items:center;margin:0 auto 0.8rem;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <span class="calli-badge" style="margin:0.5rem auto;display:table;">Votre recommandation personnalisée</span>
            <h2 id="quiz-result-title" style="font-size:1.45rem;margin:0.6rem 0 0.4rem;"></h2>
            <p id="quiz-result-desc" class="muted" style="font-size:0.92rem;margin-bottom:1.2rem;"></p>
            <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.25);border-radius:12px;padding:0.85rem;margin-bottom:1.4rem;">
              <span style="font-size:0.82rem;font-weight:700;color:var(--acc-text);">Code Cyber Monday supplémentaire appliqué :</span>
              <div style="font-family:var(--fd);font-size:1.2rem;font-weight:800;color:var(--fg);letter-spacing:0.05em;">SAVOIR10 (-10 % en plus)</div>
            </div>
            <div style="display:grid;gap:0.6rem;">
              <a id="quiz-result-link" class="btn btn-acc btn-block" href="#/boutique">Découvrir cette formation</a>
              <button class="btn btn-ghost btn-block" onclick="document.querySelector('.modal').remove()">Fermer et explorer le catalogue</button>
            </div>
          </div>
        </div>
      </div>
    `;

    window.quizState = { targetCourse: 'excel' };
    if (window.Q4 && window.Q4.modal) {
      window.Q4.modal(modalContent);
    }
  };

  window.quizAnswer = function(key, val, recId) {
    if (recId) window.quizState.targetCourse = recId;
    window.quizNextStep(2);
  };

  window.quizNextStep = function(stepNum) {
    const container = document.getElementById('digi-quiz-container');
    if (!container) return;
    container.querySelectorAll('.quiz-modal-step').forEach(s => s.classList.remove('active'));
    const target = container.querySelector(`[data-step="${stepNum}"]`);
    if (target) target.classList.add('active');
  };

  window.quizShowResult = function() {
    const container = document.getElementById('digi-quiz-container');
    if (!container) return;
    const courseId = window.quizState.targetCourse || 'excel';
    const course = (window.Q4 && window.Q4.P && window.Q4.P[courseId]) || {
      name: "Pack Entrepreneur (3 formations)",
      short: "Le parcours le plus complet pour lancer et monétiser son activité en Afrique de l'Ouest."
    };

    container.querySelectorAll('.quiz-modal-step').forEach(s => s.classList.remove('active'));
    const resultStep = container.querySelector('[data-step="result"]');
    if (resultStep) {
      resultStep.classList.add('active');
      const titleEl = document.getElementById('quiz-result-title');
      const descEl = document.getElementById('quiz-result-desc');
      const linkEl = document.getElementById('quiz-result-link');
      if (titleEl) titleEl.textContent = course.name;
      if (descEl) descEl.textContent = course.short;
      if (linkEl) {
        linkEl.href = `#/produit/${courseId}`;
        linkEl.onclick = () => {
          const m = document.querySelector('.modal');
          if (m) m.remove();
        };
      }
    }
  };

  // 4. Simulateur de progression & impact professionnel
  const simData = {
    admin: {
      time: "4 à 6 heures",
      timeSub: "Fini les ressaisies manuelles et les calculs sur papier brouillon.",
      skill: "Excel & Tableaux croisés",
      skillSub: "Tableau de bord de suivi automatique, formules SI & RECHERCHEX.",
      link: "#/produit/excel",
      linkText: "Découvrir Excel (14 900 FCFA)"
    },
    commerce: {
      time: "10+ ventes / semaine",
      timeSub: "Commandes automatisées sur WhatsApp et encaissement Mobile Money.",
      skill: "Boutique en ligne & WhatsApp",
      skillSub: "Fiches produits smartphone, photos nettes et pub Meta ciblée.",
      link: "#/produit/boutique",
      linkText: "Créer ma boutique (24 900 FCFA)"
    },
    freelance: {
      time: "+50 % de valeur par mission",
      timeSub: "Visuels professionnels en 10 min et propositions clients en anglais.",
      skill: "Canva Pro & Anglais Pro",
      skillSub: "Visuels commerciaux percutants et aisance en réunions client.",
      link: "#/produit/canva",
      linkText: "Voir Canva Pro (9 900 FCFA)"
    },
    etudiant: {
      time: "Autonomie pro immédiate",
      timeSub: "3 certificats vérifiables par QR code pour valoriser votre CV.",
      skill: "Pack Entrepreneur 3-en-1",
      skillSub: "Boutique + Marketing + Excel + 3 mois de coaching live WhatsApp.",
      link: "#/produit/pack-entrepreneur",
      linkText: "Obtenir le Pack (49 900 FCFA)"
    }
  };

  document.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-sim]');
    if (!btn) return;
    const key = btn.dataset.sim;
    const item = simData[key];
    if (!item) return;

    document.querySelectorAll('[data-sim]').forEach(b => {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });

    const timeEl = document.getElementById('sim-time');
    const timeSubEl = document.getElementById('sim-time-sub');
    const skillEl = document.getElementById('sim-skill');
    const skillSubEl = document.getElementById('sim-skill-sub');
    const linkEl = document.getElementById('sim-link');

    if (timeEl) timeEl.textContent = item.time;
    if (timeSubEl) timeSubEl.textContent = item.timeSub;
    if (skillEl) skillEl.textContent = item.skill;
    if (skillSubEl) skillSubEl.textContent = item.skillSub;
    if (linkEl) {
      linkEl.href = item.link;
      linkEl.textContent = item.linkText;
    }
  });

})();
