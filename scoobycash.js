// ScoobyCash — modal injector
(function() {
  var modal = "<div class=\"sc-modal-overlay\" id=\"sc-modal-overlay\" aria-hidden=\"true\">\n<div class=\"sc-modal-card\" role=\"dialog\" aria-modal=\"true\" id=\"sc-modal-card\">\n\n<div class=\"sc-modal-header\">\n<button class=\"sc-modal-close\" id=\"sc-modal-close\" aria-label=\"Close\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0F1729\" stroke-width=\"2.5\"><path d=\"M18 6L6 18M6 6l12 12\"/></svg>\n</button>\n<div class=\"sc-modal-eyebrow-row\">\n<div class=\"sc-modal-live-dot\"></div>\n<span class=\"sc-modal-eyebrow-text\">FUNDING NOW \u00b7 AVG 34 MIN</span>\n</div>\n<h2 class=\"sc-modal-title\">Let's get your cash moving.</h2>\n<p class=\"sc-modal-subtitle\">Two minutes to apply. No credit check, no paperwork \u2014 just a few quick details.</p>\n<div class=\"sc-modal-progress-wrap\">\n<div class=\"sc-modal-progress-top\">\n<span class=\"sc-modal-progress-label\">STEP <span id=\"sc-modal-step-current\">1</span> OF 3</span>\n<span class=\"sc-modal-progress-pct\" id=\"sc-modal-progress-pct\">33%</span>\n</div>\n<div class=\"sc-modal-progress-track\">\n<div class=\"sc-modal-progress-fill\" id=\"sc-modal-progress-fill\" style=\"width:33%\"></div>\n</div>\n</div>\n</div>\n\n<div class=\"sc-modal-body\">\n\n<div class=\"sc-modal-step sc-step-active\" data-step=\"1\">\n<div class=\"sc-amount-block-a\">\n<div class=\"sc-amount-block-a-top\">\n<span class=\"sc-amount-block-a-label\">YOU'RE REQUESTING</span>\n<span class=\"sc-amount-block-a-badge\">\u2713 PRE-QUALIFIED</span>\n</div>\n<div class=\"sc-amount-block-a-bottom\">\n<span class=\"sc-amount-block-a-value\">$800</span>\n<span class=\"sc-amount-block-a-sub\">\u2192 cash in 30 min</span>\n</div>\n</div>\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-fname\">First name</label>\n<input class=\"sc-field-input\" id=\"sc-f-fname\" placeholder=\"Jordan\" autocomplete=\"given-name\">\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-lname\">Last name</label>\n<input class=\"sc-field-input\" id=\"sc-f-lname\" placeholder=\"Smith\" autocomplete=\"family-name\">\n</div>\n</div>\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-phone\">Cellphone</label>\n<input type=\"tel\" class=\"sc-field-input\" id=\"sc-f-phone\" placeholder=\"(555) 123-4567\" autocomplete=\"tel\" inputmode=\"numeric\" maxlength=\"14\">\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-email\">Email</label>\n<input type=\"email\" class=\"sc-field-input\" id=\"sc-f-email\" placeholder=\"jordan@email.com\" autocomplete=\"email\">\n</div>\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\">Date of birth</label>\n<div class=\"sc-dob-row\">\n<select class=\"sc-field-select\" id=\"sc-f-dob-month\">\n<option value=\"\" disabled selected>Month</option>\n<option>January</option><option>February</option><option>March</option><option>April</option>\n<option>May</option><option>June</option><option>July</option><option>August</option>\n<option>September</option><option>October</option><option>November</option><option>December</option>\n</select>\n<select class=\"sc-field-select\" id=\"sc-f-dob-day\"><option value=\"\" disabled selected>Day</option></select>\n<select class=\"sc-field-select\" id=\"sc-f-dob-year\"><option value=\"\" disabled selected>Year</option></select>\n</div>\n</div>\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-employment\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-employment\">\n<span>I have active employment income from a job</span>\n</label>\n<div class=\"sc-income-warning\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/></svg>\n<span>Does not include EI, CERB, ODSP, child tax, disability, or any government benefits</span>\n</div>\n<div class=\"sc-check-error\" id=\"sc-f-employment-error\">Employment income is required to qualify.</div>\n</div>\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-marketing\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-marketing\">\n<span>I agree to receive updates, tips and promotions from ScoobyCash by email</span>\n</label>\n</div>\n<div class=\"sc-modal-nav\">\n<button class=\"sc-modal-btn-next\" id=\"sc-modal-next-1\">Continue <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg></button>\n</div>\n<div class=\"sc-step1-trust\">\n<span class=\"sc-step1-trust-item\">\ud83d\udd12 256-bit secure</span>\n<span class=\"sc-step1-trust-sep\">\u00b7</span>\n<span class=\"sc-step1-trust-item\">Won't affect credit</span>\n<span class=\"sc-step1-trust-sep\">\u00b7</span>\n<span class=\"sc-step1-trust-item\">Canadian-licensed lender</span>\n</div>\n</div>\n\n<div class=\"sc-modal-step\" data-step=\"2\">\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-street-num\">Street no.</label>\n<input class=\"sc-field-input\" id=\"sc-f-street-num\" placeholder=\"123\">\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-street\">Street name</label>\n<input class=\"sc-field-input\" id=\"sc-f-street\" placeholder=\"Main St\">\n</div>\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-city\">City</label>\n<input class=\"sc-field-input\" id=\"sc-f-city\" placeholder=\"Toronto\">\n</div>\n<div class=\"sc-field-row\">\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-province\">Province</label>\n<select class=\"sc-field-select\" id=\"sc-f-province\">\n  <option value=\"\">Select</option>\n  <option value=\"ON\">Ontario</option>\n  <option value=\"BC\">British Columbia</option>\n  <option value=\"AB\">Alberta</option>\n  <option value=\"SK\">Saskatchewan</option>\n  <option value=\"MB\">Manitoba</option>\n  <option value=\"NS\">Nova Scotia</option>\n  <option value=\"NB\">New Brunswick</option>\n  <option value=\"PE\">Prince Edward Island</option>\n  <option value=\"NL\">Newfoundland and Labrador</option>\n</select>\n<div class=\"sc-field-hint\">Quebec not currently eligible.</div>\n</div>\n<div class=\"sc-field-group\">\n<label class=\"sc-field-label\" for=\"sc-f-postal\">Postal code</label>\n<input class=\"sc-field-input\" id=\"sc-f-postal\" placeholder=\"A1A1A1\" maxlength=\"6\">\n</div>\n</div>\n<div class=\"sc-modal-nav\">\n<button class=\"sc-modal-btn-back\" id=\"sc-modal-back-2\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M19 12H5M12 19l-7-7 7-7\"/></svg> Back</button>\n<button class=\"sc-modal-btn-next\" id=\"sc-modal-next-2\">Continue <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg></button>\n</div>\n</div>\n\n<div class=\"sc-modal-step\" data-step=\"3\">\n<div class=\"sc-modal-amount-block\">\n<div class=\"sc-modal-amount-label\">ALMOST DONE</div>\n<div class=\"sc-modal-confirm-copy\">Next, you'll securely confirm your income through your bank's own login. We never see or store your password.</div>\n</div>\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-consent-terms\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-consent-terms\">\n<span>I confirm the information I've provided is accurate</span>\n</label>\n</div>\n<div class=\"sc-check-row\">\n<label class=\"sc-check-label\" for=\"sc-f-consent-bankruptcy\">\n<input type=\"checkbox\" class=\"sc-check-input\" id=\"sc-f-consent-bankruptcy\">\n<span>I am not currently bankrupt or in a consumer proposal</span>\n</label>\n</div>\n<div class=\"sc-modal-nav\">\n<button class=\"sc-modal-btn-back\" id=\"sc-modal-back-3\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><path d=\"M19 12H5M12 19l-7-7 7-7\"/></svg> Back</button>\n<button class=\"sc-modal-btn-next\" id=\"sc-modal-submit\">Verify my income <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2.5\"><path d=\"M5 12h14M12 5l7 7-7 7\"/></svg></button>\n</div>\n</div>\n\n</div>\n\n<div class=\"sc-modal-confirm\" id=\"sc-modal-confirm\">\n<div class=\"sc-modal-confirm-card\">\n<div class=\"sc-modal-confirm-icon\">\n<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#C04020\" stroke-width=\"2\"><path d=\"M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/></svg>\n</div>\n<div class=\"sc-modal-confirm-title\">Leave your application?</div>\n<div class=\"sc-modal-confirm-sub\">You're partway through. Closing now means starting over next time.</div>\n<div class=\"sc-modal-confirm-actions\">\n<button class=\"sc-modal-confirm-leave\" id=\"sc-modal-confirm-leave\">Leave</button>\n<button class=\"sc-modal-confirm-stay\" id=\"sc-modal-confirm-stay\">Keep going</button>\n</div>\n</div>\n</div>\n\n</div>\n</div>";
  document.body.insertAdjacentHTML("beforeend", modal);
})();

(function() {
  const ELEV8_API_KEY = 'c2Nvb2J5Y2FzaCFAIyAAAMTMyMT8=';
  const ELEV8_URL = 'https://elev8-api.com/api/app/form/form-received';
  const ELEV8_ERROR_FALLBACK = 'https://www.scoobycash.com';

  const overlay = document.getElementById('sc-modal-overlay');
  const modalClose = document.getElementById('sc-modal-close');
  const modalConfirm = document.getElementById('sc-modal-confirm');
  const confirmStay = document.getElementById('sc-modal-confirm-stay');
  const confirmLeave = document.getElementById('sc-modal-confirm-leave');
  const progressFill = document.getElementById('sc-modal-progress-fill');
  const progressPct = document.getElementById('sc-modal-progress-pct');
  const stepCurrentLabel = document.getElementById('sc-modal-step-current');
  const stepDots = document.querySelectorAll('.sc-modal-step-dot');
  const totalSteps = 3;
  let currentStep = 1;
  let modalDirty = false;

  const dobMonth = document.getElementById('sc-f-dob-month');
  const dobDay = document.getElementById('sc-f-dob-day');
  const dobYear = document.getElementById('sc-f-dob-year');
  const thisYear = new Date().getFullYear();
  for (let y = thisYear - 18; y >= thisYear - 90; y--) {
    const opt = document.createElement('option');
    opt.value = y; opt.textContent = y;
    dobYear.appendChild(opt);
  }
  function refillDobDays() {
    const monthIdx = dobMonth.selectedIndex;
    const year = parseInt(dobYear.value, 10) || thisYear - 30;
    const days = monthIdx > 0 ? new Date(year, monthIdx, 0).getDate() : 31;
    const prev = dobDay.value;
    dobDay.innerHTML = '<option value="" disabled selected>Day</option>';
    for (let d = 1; d <= days; d++) {
      const opt = document.createElement('option');
      opt.value = d; opt.textContent = d;
      if (String(d) === prev) opt.selected = true;
      dobDay.appendChild(opt);
    }
  }
  dobMonth.addEventListener('change', refillDobDays);
  dobYear.addEventListener('change', refillDobDays);

  document.getElementById('sc-f-postal').addEventListener('input', function() {
    const pos = this.selectionStart;
    this.value = this.value.toUpperCase();
    this.setSelectionRange(pos, pos);
  });

  document.getElementById('sc-f-phone').addEventListener('input', function() {
    var digits = this.value.replace(/\D/g, '').slice(0, 10);
    var formatted = '';
    if (digits.length > 0) formatted = '(' + digits.slice(0, 3);
    if (digits.length >= 4) formatted += ') ' + digits.slice(3, 6);
    if (digits.length >= 7) formatted += '-' + digits.slice(6, 10);
    this.value = formatted;
  });
  document.getElementById('sc-f-phone').addEventListener('keydown', function(e) {
    if (e.key === 'Backspace') return;
    if (!/[\d]/.test(e.key) && !['Tab','ArrowLeft','ArrowRight','Delete'].includes(e.key)) {
      e.preventDefault();
    }
  });

  function goToStep(n) {
    document.querySelectorAll('.sc-modal-step').forEach(function(el) {
      el.classList.toggle('sc-step-active', parseInt(el.dataset.step, 10) === n);
    });
    stepDots.forEach(function(dot) {
      const num = parseInt(dot.dataset.dot, 10);
      dot.classList.toggle('sc-dot-done', num < n);
      dot.classList.toggle('sc-dot-active', num === n);
    });
    currentStep = n;
    stepCurrentLabel.textContent = n;
    const pct = Math.round(n / totalSteps * 100);
    progressFill.style.width = pct + '%';
    progressPct.textContent = pct + '%';
  }

  function openModal() {
    overlay.classList.add('sc-modal-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('sc-modal-locked');
    goToStep(1);
    modalDirty = false;
  }
  function closeNow() {
    overlay.classList.remove('sc-modal-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('sc-modal-locked');
    modalConfirm.classList.remove('sc-confirm-open');
  }
  function requestClose() {
    if (modalDirty && currentStep < totalSteps) {
      modalConfirm.classList.add('sc-confirm-open');
    } else {
      closeNow();
    }
  }

  document.getElementById('sc-open-btn').addEventListener('click', openModal);
  modalClose.addEventListener('click', requestClose);
  confirmLeave.addEventListener('click', closeNow);
  confirmStay.addEventListener('click', function() { modalConfirm.classList.remove('sc-confirm-open'); });
  overlay.addEventListener('mousedown', function(e) { if (e.target === overlay) requestClose(); });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('sc-modal-open')) requestClose();
  });

  document.querySelectorAll('#sc-modal-card input, #sc-modal-card select').forEach(function(f) {
    f.addEventListener('change', function() { modalDirty = true; });
    f.addEventListener('input', function() { modalDirty = true; });
  });

  const employmentCB = document.getElementById('sc-f-employment');
  const employmentErr = document.getElementById('sc-f-employment-error');
  const provinceSelect = document.getElementById('sc-f-province');

  if (provinceSelect && !document.getElementById('sc-f-province-error')) {
    const provErr = document.createElement('div');
    provErr.id = 'sc-f-province-error';
    provErr.className = 'sc-check-error';
    provErr.style.marginLeft = '0';
    provErr.textContent = 'Please select an eligible province.';
    provinceSelect.parentNode.appendChild(provErr);
  }
  const provinceErr = document.getElementById('sc-f-province-error');

  document.getElementById('sc-modal-next-1').addEventListener('click', function() {
    modalDirty = true;
    if (!employmentCB.checked) {
      employmentCB.classList.add('sc-check-input-invalid');
      employmentErr.classList.add('sc-error-visible');
      employmentCB.focus();
      return;
    }
    employmentCB.classList.remove('sc-check-input-invalid');
    employmentErr.classList.remove('sc-error-visible');
    goToStep(2);
  });
  employmentCB.addEventListener('change', function() {
    if (this.checked) {
      this.classList.remove('sc-check-input-invalid');
      employmentErr.classList.remove('sc-error-visible');
    }
  });

  document.getElementById('sc-modal-next-2').addEventListener('click', function() {
    modalDirty = true;
    if (!provinceSelect.value) {
      provinceSelect.style.borderColor = 'var(--sc-coral)';
      provinceSelect.style.boxShadow = '0 0 0 3px rgba(255,122,89,.15)';
      provinceErr.classList.add('sc-error-visible');
      provinceSelect.focus();
      return;
    }
    provinceSelect.style.borderColor = '';
    provinceSelect.style.boxShadow = '';
    provinceErr.classList.remove('sc-error-visible');
    goToStep(3);
  });
  provinceSelect.addEventListener('change', function() {
    if (this.value) {
      this.style.borderColor = '';
      this.style.boxShadow = '';
      provinceErr.classList.remove('sc-error-visible');
    }
  });

  document.getElementById('sc-modal-back-2').addEventListener('click', function() { goToStep(1); });
  document.getElementById('sc-modal-back-3').addEventListener('click', function() { goToStep(2); });

  function sc_val(id) { const el = document.getElementById(id); return el ? el.value : ''; }
  function sc_checked(id) { const el = document.getElementById(id); return !!(el && el.checked); }
  function sc_buildBirthday() {
    const m = dobMonth.value, d = dobDay.value, y = dobYear.value;
    if (!m || !d || !y) return '';
    const mNum = ['January','February','March','April','May','June','July','August','September','October','November','December'].indexOf(m) + 1;
    return mNum < 1 ? '' : y + '-' + String(mNum).padStart(2,'0') + '-' + String(d).padStart(2,'0');
  }

  document.getElementById('sc-modal-submit').addEventListener('click', function() {
    const submitBtn = this;
    const payload = {
      source: 'scoobycash',
      personal_language: 'English',
      first_name: sc_val('sc-f-fname'),
      last_name: sc_val('sc-f-lname'),
      birthday: sc_buildBirthday(),
      email: sc_val('sc-f-email'),
      loan_amount: '800',
      tos_consent: sc_checked('sc-f-consent-terms') ? "on" : "off",
      marketing_consent: sc_checked('sc-f-marketing') ? "on" : "off",
      personal_phone: sc_val('sc-f-phone').replace(/\D/g, ''),
      Income: {
        income_type: sc_checked('sc-f-employment') ? '1' : ''
      },
      Address: {
        Street_Number: sc_val('sc-f-street-num'),
        Street_Name: sc_val('sc-f-street'),
        unit: '', city: sc_val('sc-f-city'),
        Province: sc_val('sc-f-province'),
        Postal_Code: sc_val('sc-f-postal')
      },
      References: [],
      completed: true,
      accuracy_confirmation: sc_checked('sc-f-consent-terms') ? "on" : "off",
      creditbook_consent: "off",
      upcoming_bankruptcy: !sc_checked('sc-f-consent-bankruptcy') ? "on" : "off"
    };

    submitBtn.disabled = true;
    const orig = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Submitting…';

    fetch(ELEV8_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ELEV8_API_KEY },
      body: JSON.stringify(payload)
    })
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      if (data && data.ibvUrl) {
        window.location.href = data.ibvUrl;
      } else {
        console.error('[SC] No ibvUrl:', data);
        submitBtn.disabled = false;
        submitBtn.innerHTML = orig;
      }
    })
    .catch(function(err) {
      console.error('[SC] Error:', err);
      submitBtn.disabled = false;
      submitBtn.innerHTML = orig;
    });
  });

})();