// ScoobyCash Modal — auto-injected
(function() {
  var modal = "<!-- 7. APPLICATION MODAL -->\n<div class=\"sc-modal-overlay\" id=\"sc-modal-overlay\" aria-hidden=\"true\">\n<div class=\"sc-modal-card\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"sc-modal-title-text\" id=\"sc-modal-card\">\n\n<svg class=\"sc-modal-glow\" viewBox=\"0 0 280 280\" aria-hidden=\"true\">\n<defs><radialGradient id=\"sc-modal-glow-grad\" cx=\"0.5\" cy=\"0.5\"><stop offset=\"0\" stop-color=\"#3FD9C5\" stop-opacity=\"0.3\"/><stop offset=\"0.6\" stop-color=\"#3FD9C5\" stop-opacity=\"0.06\"/><stop offset=\"1\" stop-color=\"#3FD9C5\" stop-opacity=\"0\"/></radialGradient></defs>\n<circle cx=\"140\" cy=\"140\" r=\"140\" fill=\"url(#sc-modal-glow-grad)\"/>\n</svg>\n\n<div class=\"sc-modal-header\">\n<button type=\"button\" class=\"sc-modal-close\" id=\"sc-modal-close\" aria-label=\"Close application\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1729\" stroke-width=\"2.5\"><path d=\"M18 6L6 18M6 6l12 12\"/></svg>\n</button>\n\n<div class=\"sc-modal-eyebrow-row\">\n<div class=\"sc-modal-live-dot\"></div>\n<span class=\"sc-modal-eyebrow-text\">FUNDING NOW \u00b7 AVG 34 MIN</span>\n</div>\n\n<h2 class=\"sc-modal-title\" id=\"sc-modal-title-text\">Let's get your cash moving.</h2>\n<p class=\"sc-modal-subtitle\">Two minutes to apply. No credit check, no paperwork \u2014 just a few quick details.</p>\n\n<div class=\"sc-modal-progress-wrap\">\n<div class=\"sc-modal-progress-top\">\n<span class=\"sc-modal-progress-label\">STEP <span id=\"sc-modal-step-current\">1</span> OF <span id=\"sc-modal-step-total\">3</span></span>\n<span class=\"sc-modal-progress-pct\" id=\"sc-modal-progress-pct\">33%</span>\n</div>\n<div class=\"sc-modal-progress-track\">\n<div class=\"sc-modal-progress-fill\" id=\"sc-modal-progress-fill\"></div>\n</div>\n<div class=\"sc-modal-step-dots\" id=\"sc-modal-step-dots\">\n<div class=\"sc-modal-step-dot sc-dot-active\" data-dot=\"1\"></div>\n<div class=\"sc-modal-step-dot\" data-dot=\"2\"></div>\n<div class=\"sc-modal-step-dot\" data-dot=\"3\"></div>\n</div>\n</div>\n</div>\n\n<div class=\"sc-modal-body\">\n\n<!-- STEP 1: Personal info -->\n<div class=\"sc-modal-step sc-step-active\" data-step=\"1\">\n<div class=\"sc-modal-amount-compact\">\n<span class=\"sc-modal-amount-compact-label\">You're requesting</span>\n<span class=\"sc-modal-amount-compact-value\" id=\"sc-modal-amount-value\">$800</span>\n<span class=\"sc-modal-amount-compact-sub\">\u2248 $208 bi-weekly</span>\n</div>\n\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-fname\">First name</label>\n<input type=\"text\" class=\"sc-field-input\" id=\"sc-f-fname\" placeholder=\"Jordan\" autocomplete=\"given-name\">\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-lname\">Last name</label>\n<input type=\"text\" class=\"sc-field-input\" id=\"sc-f-lname\" placeholder=\"Smith\" autocomplete=\"family-name\">\n</div>\n</div>\n\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-phone\">Cellphone</label>\n<input type=\"tel\" class=\"sc-field-input\" id=\"sc-f-phone\" placeholder=\"(555) 123-4567\" autocomplete=\"tel\">\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-email\">Email</label>\n<input type=\"email\" class=\"sc-field-input\" id=\"sc-f-email\" placeholder=\"jordan@email.com\" autocomplete=\"email\">\n</div>\n</div>\n\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\">Date of birth</label>\n<div class=\"sc-dob-row\">\n<select class=\"sc-field-select\" id=\"sc-f-dob-month\" aria-label=\"Birth month\">\n<option value=\"\" disabled selected>Month</option>\n<option>January</option><option>February</option><option>March</option><option>April</option>\n<option>May</option><option>June</option><option>July</option><option>August</option>\n<option>September</option><option>October</option><option>November</option><option>December</option>\n</select>\n<select class=\"sc-field-select\" id=\"sc-f-dob-day\" aria-label=\"Birth day\">\n<option value=\"\" disabled selected>Day</option>\n</select>\n<select class=\"sc-field-select\" id=\"sc-f-dob-year\" aria-label=\"Birth year\">\n<option value=\"\" disabled selected>Year</option>\n</select>\n</div>\n</div>\n\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-employment\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-employment\">\n<span>I have active employment income from a job</span>\n</label>\n<div class=\"sc-income-warning\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/></svg>\n<span>Does not include EI, CERB, ODSP, child tax, disability, or any government benefits</span>\n</div>\n<div class=\"sc-check-error\" id=\"sc-f-employment-error\">Employment income is required to qualify.</div>\n</div>\n\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-marketing\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-marketing\">\n<span>I agree to receive updates, tips and promotions from ScoobyCash by email</span>\n</label>\n</div>\n\n<div class=\"sc-modal-nav\">\n<button type=\"button\" class=\"sc-modal-btn-next\" id=\"sc-modal-next-1\">\nContinue\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg>\n</button>\n</div>\n</div>\n\n<!-- STEP 2: Address -->\n<div class=\"sc-modal-step\" data-step=\"2\">\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-street-num\">Street no.</label>\n<input type=\"text\" class=\"sc-field-input\" id=\"sc-f-street-num\" placeholder=\"123\" autocomplete=\"address-line1\">\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-street\">Street name</label>\n<input type=\"text\" class=\"sc-field-input\" id=\"sc-f-street\" placeholder=\"Main St\" autocomplete=\"address-line2\">\n</div>\n</div>\n\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-city\">City</label>\n<input type=\"text\" class=\"sc-field-input\" id=\"sc-f-city\" placeholder=\"Toronto\" autocomplete=\"address-level2\">\n</div>\n\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-province\">Province</label>\n<select class=\"sc-field-select\" id=\"sc-f-province\">\n<option value=\"\">Select</option>\n<option>Ontario</option>\n<option>British Columbia</option>\n<option>Alberta</option>\n<option>Saskatchewan</option>\n<option>Manitoba</option>\n<option>Nova Scotia</option>\n<option>New Brunswick</option>\n<option>Prince Edward Island</option>\n<option>Newfoundland and Labrador</option>\n</select>\n<div class=\"sc-field-hint\">Quebec not currently eligible.</div>\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-postal\">Postal code</label>\n<input type=\"text\" class=\"sc-field-input\" id=\"sc-f-postal\" placeholder=\"A1A1A1\" maxlength=\"6\" autocomplete=\"postal-code\">\n</div>\n</div>\n\n<div class=\"sc-modal-nav\">\n<button type=\"button\" class=\"sc-modal-btn-back\" id=\"sc-modal-back-2\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M19 12H5M12 19l-7-7 7-7\"/></svg>\nBack\n</button>\n<button type=\"button\" class=\"sc-modal-btn-next\" id=\"sc-modal-next-2\">\nContinue\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg>\n</button>\n</div>\n</div>\n\n<!-- STEP 3: Confirm / IBV consent -->\n<div class=\"sc-modal-step\" data-step=\"3\">\n<div class=\"sc-modal-amount-block\">\n<div class=\"sc-modal-amount-label\">ALMOST DONE</div>\n<div class=\"sc-modal-confirm-copy\">Next, you'll securely confirm your income through your bank's own login. We never see or store your password.</div>\n</div>\n\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-consent-terms\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-consent-terms\">\n<span>I confirm the information I've provided is accurate</span>\n</label>\n</div>\n\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-consent-bankruptcy\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-consent-bankruptcy\">\n<span>I am not currently bankrupt or in a consumer proposal</span>\n</label>\n</div>\n\n<div class=\"sc-modal-nav\">\n<button type=\"button\" class=\"sc-modal-btn-back\" id=\"sc-modal-back-3\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M19 12H5M12 19l-7-7 7-7\"/></svg>\nBack\n</button>\n<button type=\"button\" class=\"sc-modal-btn-next\" id=\"sc-modal-submit\">\nVerify my income\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg>\n</button>\n</div>\n</div>\n\n<div class=\"sc-modal-foot-trust\">\n<div class=\"sc-modal-foot-trust-item\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>\n<span>256-bit secure</span>\n</div>\n<span>\u00b7</span>\n<span>Won't affect credit</span>\n<span>\u00b7</span>\n<span>Canadian-licensed lender</span>\n</div>\n</div>\n\n<div class=\"sc-modal-confirm\" id=\"sc-modal-confirm\">\n<div class=\"sc-modal-confirm-card\">\n<div class=\"sc-modal-confirm-icon\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#C04020\" stroke-width=\"2\"><path d=\"M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/></svg>\n</div>\n<div class=\"sc-modal-confirm-title\">Leave your application?</div>\n<div class=\"sc-modal-confirm-sub\">You're partway through. Closing now means starting over next time.</div>\n<div class=\"sc-modal-confirm-actions\">\n<button type=\"button\" class=\"sc-modal-confirm-leave\" id=\"sc-modal-confirm-leave\">Leave</button>\n<button type=\"button\" class=\"sc-modal-confirm-stay\" id=\"sc-modal-confirm-stay\">Keep going</button>\n</div>\n</div>\n</div>\n\n</div>\n</div>\n\n";
  document.body.insertAdjacentHTML('beforeend', modal);
})();


(function() {
  // ---- Arc slider ----
  const arc = document.getElementById('sc-arc-fill');
  const thumb = document.getElementById('sc-thumb-group');
  const tickIds = ['sc-tick-25', 'sc-tick-50', 'sc-tick-75'];
  const amountDisplay = document.getElementById('sc-amount-display');
  const paymentDisplay = document.getElementById('sc-payment-display');
  const ctaAmount = document.getElementById('sc-cta-amount');
  const thumbLabel = document.getElementById('sc-thumb-label');
  const MIN = 250, MAX = 1500;
  let value = 800, dragging = false;

  if (arc && thumb) {
    function updatePosition(percentage) {
      const len = arc.getTotalLength();
      const point = arc.getPointAtLength(len * percentage);
      thumb.setAttribute('transform', 'translate(' + point.x + ', ' + point.y + ')');
      arc.setAttribute('stroke-dasharray', (percentage * 100) + ' 100');
      [0.25, 0.5, 0.75].forEach(function(p, i) {
        const tickPoint = arc.getPointAtLength(len * p);
        const tick = document.getElementById(tickIds[i]);
        if (tick) { tick.setAttribute('cx', tickPoint.x); tick.setAttribute('cy', tickPoint.y); }
      });
    }
    function updateValue(newValue) {
      value = Math.max(MIN, Math.min(MAX, Math.round(newValue / 50) * 50));
      const percentage = (value - MIN) / (MAX - MIN);
      updatePosition(percentage);
      amountDisplay.textContent = '$' + value.toLocaleString();
      thumbLabel.textContent = '$' + value.toLocaleString();
      ctaAmount.textContent = '$' + value.toLocaleString();
      paymentDisplay.textContent = '$' + Math.round(value * 0.26).toLocaleString();
    }
    function handlePointer(clientX) {
      const svg = document.getElementById('sc-arc-svg');
      const rect = svg.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      updateValue(MIN + ratio * (MAX - MIN));
    }
    thumb.addEventListener('mousedown', function(e) { dragging = true; e.preventDefault(); });
    document.addEventListener('mousemove', function(e) { if (dragging) handlePointer(e.clientX); });
    document.addEventListener('mouseup', function() { dragging = false; });
    thumb.addEventListener('touchstart', function(e) { dragging = true; e.preventDefault(); }, { passive: false });
    document.addEventListener('touchmove', function(e) { if (dragging && e.touches[0]) { handlePointer(e.touches[0].clientX); e.preventDefault(); } }, { passive: false });
    document.addEventListener('touchend', function() { dragging = false; });
    document.getElementById('sc-arc-svg').addEventListener('click', function(e) { handlePointer(e.clientX); });
    setTimeout(function() { updateValue(800); }, 50);
  }

  // ---- FAQ toggle ----
  document.querySelectorAll('.sc-faq-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
      if (e.target.closest('.sc-faq-a a')) return;
      item.classList.toggle('open');
    });
  });

  // ---- FAQ category filter ----
  document.querySelectorAll('.sc-faq-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      document.querySelectorAll('.sc-faq-chip').forEach(function(c) { c.classList.remove('active'); });
      chip.classList.add('active');
      const cat = chip.dataset.cat;
      document.querySelectorAll('.sc-faq-item').forEach(function(item) {
        if (cat === 'all' || item.dataset.cat === cat) item.style.display = '';
        else item.style.display = 'none';
      });
    });
  });

  // ---- APPLICATION MODAL ----
  const modalOverlay = document.getElementById('sc-modal-overlay');
  const modalCard = document.getElementById('sc-modal-card');
  const modalClose = document.getElementById('sc-modal-close');
  const modalConfirm = document.getElementById('sc-modal-confirm');
  const modalConfirmStay = document.getElementById('sc-modal-confirm-stay');
  const modalConfirmLeave = document.getElementById('sc-modal-confirm-leave');
  const modalAmountValue = document.getElementById('sc-modal-amount-value');
  const stepCurrentLabel = document.getElementById('sc-modal-step-current');
  const progressFill = document.getElementById('sc-modal-progress-fill');
  const progressPct = document.getElementById('sc-modal-progress-pct');
  const stepDots = document.querySelectorAll('.sc-modal-step-dot');
  const totalSteps = document.querySelectorAll('.sc-modal-step').length;
  let currentStep = 1;
  let modalDirty = false;
  let lastFocusedEl = null;

  // ---- DOB dropdowns: populate years, recompute valid day count on month/year change ----
  const dobMonth = document.getElementById('sc-f-dob-month');
  const dobDay = document.getElementById('sc-f-dob-day');
  const dobYear = document.getElementById('sc-f-dob-year');
  if (dobMonth && dobDay && dobYear) {
    const thisYear = new Date().getFullYear();
    for (let y = thisYear - 18; y >= thisYear - 90; y--) {
      const opt = document.createElement('option');
      opt.value = y; opt.textContent = y;
      dobYear.appendChild(opt);
    }
    function refillDobDays() {
      const monthIdx = dobMonth.selectedIndex; // 0 = placeholder
      const year = parseInt(dobYear.value, 10) || thisYear - 30;
      const daysInMonth = monthIdx > 0 ? new Date(year, monthIdx, 0).getDate() : 31;
      const prevVal = dobDay.value;
      dobDay.innerHTML = '<option value="" disabled selected>Day</option>';
      for (let d = 1; d <= daysInMonth; d++) {
        const opt = document.createElement('option');
        opt.value = d; opt.textContent = d;
        if (String(d) === prevVal) opt.selected = true;
        dobDay.appendChild(opt);
      }
    }
    dobMonth.addEventListener('change', refillDobDays);
    dobYear.addEventListener('change', refillDobDays);
  }

  // ---- Postal code: auto-uppercase as the person types ----
  const postalField = document.getElementById('sc-f-postal');
  if (postalField) {
    postalField.addEventListener('input', function() {
      const pos = postalField.selectionStart;
      postalField.value = postalField.value.toUpperCase();
      postalField.setSelectionRange(pos, pos);
    });
  }

  function syncModalAmount() {
    if (modalAmountValue && amountDisplay) {
      modalAmountValue.textContent = amountDisplay.textContent;
    }
    const subEl = document.querySelector('.sc-modal-amount-compact-sub');
    if (subEl && paymentDisplay) {
      subEl.textContent = '≈ ' + paymentDisplay.textContent + ' bi-weekly';
    }
  }

  function goToStep(n) {
    document.querySelectorAll('.sc-modal-step').forEach(function(stepEl) {
      stepEl.classList.toggle('sc-step-active', parseInt(stepEl.dataset.step, 10) === n);
    });
    stepDots.forEach(function(dot) {
      const dotNum = parseInt(dot.dataset.dot, 10);
      dot.classList.toggle('sc-dot-done', dotNum < n);
      dot.classList.toggle('sc-dot-active', dotNum === n);
    });
    currentStep = n;
    stepCurrentLabel.textContent = n;
    const pct = Math.round((n / totalSteps) * 100);
    progressFill.style.width = pct + '%';
    progressPct.textContent = pct + '%';
    // Move focus to the first focusable field in the new step for keyboard/screen-reader users
    const activeStepEl = document.querySelector('.sc-modal-step[data-step="' + n + '"]');
    const firstField = activeStepEl ? activeStepEl.querySelector('input, select, button') : null;
    if (firstField) setTimeout(function() { firstField.focus(); }, 280);
  }

  function markDirty() { modalDirty = true; }

  function openModal(triggerEl) {
    lastFocusedEl = triggerEl || document.activeElement;
    syncModalAmount();
    goToStep(1);
    modalDirty = false;
    modalOverlay.classList.add('sc-modal-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sc-modal-locked');
    setTimeout(function() {
      const firstField = modalCard.querySelector('.sc-modal-step.sc-step-active select, .sc-modal-step.sc-step-active input');
      if (firstField) firstField.focus();
      else modalClose.focus();
    }, 320);
  }

  function closeModalImmediately() {
    modalOverlay.classList.remove('sc-modal-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sc-modal-locked');
    modalConfirm.classList.remove('sc-confirm-open');
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
  }

  function requestClose() {
    if (modalDirty && currentStep < totalSteps) {
      modalConfirm.classList.add('sc-confirm-open');
      setTimeout(function() { modalConfirmStay.focus(); }, 10);
    } else {
      closeModalImmediately();
    }
  }

  // Wire every CTA marked with data-sc-modal-trigger to open the modal instead of navigating
  document.querySelectorAll('[data-sc-modal-trigger]').forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(trigger);
    });
  });

  modalClose.addEventListener('click', requestClose);
  modalConfirmLeave.addEventListener('click', closeModalImmediately);
  modalConfirmStay.addEventListener('click', function() {
    modalConfirm.classList.remove('sc-confirm-open');
  });

  // Click outside card (on overlay backdrop) closes, same dirty-check
  modalOverlay.addEventListener('mousedown', function(e) {
    if (e.target === modalOverlay) requestClose();
  });

  // Escape key closes modal (or confirm dialog first, if open)
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    if (!modalOverlay.classList.contains('sc-modal-open')) return;
    if (modalConfirm.classList.contains('sc-confirm-open')) {
      modalConfirm.classList.remove('sc-confirm-open');
    } else {
      requestClose();
    }
  });

  // Basic focus trap within the modal card while open
  modalCard.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab') return;
    const focusables = modalCard.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  // Track "dirty" state once the person actually starts typing/selecting
  modalCard.querySelectorAll('input, select').forEach(function(field) {
    field.addEventListener('input', markDirty);
    field.addEventListener('change', markDirty);
  });

  // Step navigation — most fields stay validation-free until the real form/API is wired in.
  // The employment-income checkbox is the one exception: it's the form's actual disqualifier,
  // so it blocks Continue on step 1 the same way GreenCredit's build enforced it.
  const next1 = document.getElementById('sc-modal-next-1');
  const next2 = document.getElementById('sc-modal-next-2');
  const back2 = document.getElementById('sc-modal-back-2');
  const back3 = document.getElementById('sc-modal-back-3');
  const submitBtn = document.getElementById('sc-modal-submit');
  const employmentCheckbox = document.getElementById('sc-f-employment');
  const employmentError = document.getElementById('sc-f-employment-error');

  function clearEmploymentError() {
    if (employmentCheckbox) employmentCheckbox.classList.remove('sc-check-input-invalid');
    if (employmentError) employmentError.classList.remove('sc-error-visible');
  }
  if (employmentCheckbox) {
    employmentCheckbox.addEventListener('change', function() {
      if (employmentCheckbox.checked) clearEmploymentError();
    });
  }

  if (next1) next1.addEventListener('click', function() {
    markDirty();
    if (employmentCheckbox && !employmentCheckbox.checked) {
      employmentCheckbox.classList.add('sc-check-input-invalid');
      if (employmentError) employmentError.classList.add('sc-error-visible');
      employmentCheckbox.focus();
      return;
    }
    clearEmploymentError();
    goToStep(2);
  });
  if (next2) next2.addEventListener('click', function() { markDirty(); goToStep(3); });
  if (back2) back2.addEventListener('click', function() { goToStep(1); });
  if (back3) back3.addEventListener('click', function() { goToStep(2); });
  // ============================================================
  // REAL API INTEGRATION — elev8-api.com
  // ============================================================
  // Paste your dev-issued key between the quotes below. Never commit this
  // file to a public repo with the key filled in — same handling as GOOGLE_KEY
  // was for GreenCredit: edit locally in a text editor, never paste in chat.
  const ELEV8_API_KEY = '';
  const ELEV8_URL = 'https://elev8-api.com/api/app/form/form-received';
  // Fallback if the request errors out — same role REDIRECT_URL played for GreenCredit.
  const ELEV8_ERROR_FALLBACK = 'https://www.scoobycash.com';

  // Strips everything but digits — mirrors the dev's own stripPhone() in form.js.
  function sc_stripPhone(v) {
    return (v || '').replace(/\D/g, '');
  }

  // Assembles the birthday string from the three DOB selects into YYYY-MM-DD.
  // The dev's own code reads $('#personal_dob').val() as a single date-parseable
  // string (used in new Date(e) for the age gate), so we build the same shape.
  function sc_buildBirthday() {
    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const m = dobMonth ? dobMonth.value : '';
    const d = dobDay ? dobDay.value : '';
    const y = dobYear ? dobYear.value : '';
    if (!m || !d || !y) return '';
    const monthNum = monthNames.indexOf(m) + 1;
    if (monthNum < 1) return '';
    return y + '-' + String(monthNum).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  }

  function sc_fieldVal(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
  }
  function sc_fieldChecked(id) {
    const el = document.getElementById(id);
    return el ? el.checked : false;
  }

  // Builds the full payload in the exact shape elev8-api.com expects, per the
  // dev's own form.js/googleapp.js. Fields our 3-step UI doesn't collect are
  // sent as explicit blanks/defaults — per the dev, the API autofills these
  // server-side, so omitting them from our UI is safe at the API contract level.
  function sc_buildPayload() {
    const payload = {
      source: 'scoobycash',
      personal_language: 'English',
      first_name: sc_fieldVal('sc-f-fname'),
      last_name: sc_fieldVal('sc-f-lname'),
      birthday: sc_buildBirthday(),
      email: sc_fieldVal('sc-f-email'),
      loan_amount: (amountDisplay ? amountDisplay.textContent.replace(/[^0-9]/g, '') : ''),
      tos_consent: sc_fieldChecked('sc-f-consent-terms'),
      marketing_consent: sc_fieldChecked('sc-f-marketing'),
      personal_phone: sc_stripPhone(sc_fieldVal('sc-f-phone')),
      Income: {
        // "1" mirrors the dev's own hard-coded eligibility check (personal_type === "1").
        // Our employment checkbox is the closest UI equivalent to that gate.
        income_type: sc_fieldChecked('sc-f-employment') ? '1' : '',
        occupation: '',
        company: '',
        supervisor: '',
        phone_number: '',
        extension: '',
        payment_frequency: '',
        annual_salary: ''
      },
      Address: {
        Street_Number: sc_fieldVal('sc-f-street-num'),
        Street_Name: sc_fieldVal('sc-f-street'),
        unit: '',
        city: sc_fieldVal('sc-f-city'),
        Province: sc_fieldVal('sc-f-province'),
        Postal_Code: sc_fieldVal('sc-f-postal')
      },
      References: [],
      completed: true,
      accuracy_confirmation: sc_fieldChecked('sc-f-consent-terms'),
      creditbook_consent: false,
      // Our checkbox means "I am NOT bankrupt" — inverted relative to the dev's
      // own ibv_confirm_bankruptcy field name (upcoming_bankruptcy = true means
      // they ARE about to be bankrupt), so we flip it here.
      upcoming_bankruptcy: !sc_fieldChecked('sc-f-consent-bankruptcy')
    };
    return payload;
  }

  function sc_submitApplication() {
    const payload = sc_buildPayload();
    submitBtn.disabled = true;
    const originalBtnHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Submitting…';

    fetch(ELEV8_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ELEV8_API_KEY
      },
      body: JSON.stringify(payload)
    })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('HTTP ' + response.status);
        }
        return response.json();
      })
      .then(function(data) {
        if (data && data.ibvUrl) {
          window.location.href = data.ibvUrl;
        } else {
          console.error('[ScoobyCash modal] No ibvUrl in response:', data);
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
      })
      .catch(function(err) {
        console.error('[ScoobyCash modal] Submission error:', err);
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;
        window.location.href = ELEV8_ERROR_FALLBACK;
      });
  }

  if (submitBtn) submitBtn.addEventListener('click', sc_submitApplication);

})();
