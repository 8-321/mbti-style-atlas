const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const styleById = Object.fromEntries(STYLES.map((s) => [s.id, s]));
const filmById = Object.fromEntries(ALL_FILMS.map((f) => [f.id, f]));
const esc = (value) => String(value).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

let currentGoal = "growth";
let currentGroup = "NF";
let currentFilter = "all";
let lastFocus = null;

function tags(list) {
  return list.map((t) => `<span class="tag">${esc(t)}</span>`).join("");
}

function renderStyles() {
  const grid = $("#styleGrid");
  grid.innerHTML = STYLES.map((s) => `
    <article class="style-card reveal" style="--accent:${s.accent}" data-open-style="${s.id}" tabindex="0" role="button" aria-label="打开 ${esc(s.name)} 风格详情">
      <div class="style-card-media">
        <img src="${s.poster}" alt="${esc(s.name)} 风格预览" loading="lazy">
        <video muted loop playsinline preload="none" poster="${s.poster}" data-preview="${s.video}">
          <source src="${s.video}" type="video/mp4">
        </video>
        <span class="style-card-index">${s.index}</span>
        <span class="style-card-kind">${esc(s.kind)}</span>
      </div>
      <div class="style-card-body">
        <div class="style-card-top">
          <div>
            <div class="style-card-cn">${esc(s.name)}</div>
            <div class="style-card-en">${esc(s.en)}</div>
          </div>
          <span class="style-card-arrow">↗</span>
        </div>
        <p class="style-card-tagline">${esc(s.tagline)}</p>
        <div class="style-card-tags">${tags(s.tags)}</div>
        <div class="style-card-meta">
          <span><b>${s.ratio}</b> · ${s.duration}</span>
          <span>${esc(s.narrative)}</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFilms() {
  const rail = $("#filmRail");
  const films = ALL_FILMS.filter((f) => currentFilter === "all" || f.kind === currentFilter);
  rail.innerHTML = films.map((f) => `
    <article class="film-card" style="--accent:${f.accent}" data-open-film="${f.id}" tabindex="0" role="button" aria-label="打开 ${esc(f.name)}">
      <div class="film-card-media">
        <img src="${f.poster}" alt="${esc(f.name)} 预览" loading="lazy">
        <video muted loop playsinline preload="none" poster="${f.poster}" data-preview="${f.video}">
          <source src="${f.video}" type="video/mp4">
        </video>
        <span class="film-card-badge">${f.kindLabel}</span>
      </div>
      <div class="film-card-body">
        <div class="film-card-top">
          <div class="film-card-title">${esc(f.name)}</div>
          <span class="film-card-no">${f.kind === "final" ? styleById[f.styleId].index : "REF"}</span>
        </div>
        <div class="film-card-meta"><span>${esc(f.en)}</span><span>${esc(f.meta)}</span></div>
      </div>
    </article>
  `).join("");
  bindPreviews(rail);
  observeReveals(rail);
}

function renderCompare() {
  const body = $("#compareBody");
  body.innerHTML = STYLES.map((s) => `
    <tr data-open-style="${s.id}" style="cursor:pointer">
      <td><span class="swatch">${s.palette.slice(0, 3).map((c) => `<i style="--c:${c}"></i>`).join("")}</span>${esc(s.name)}</td>
      <td>${esc(s.medium)}</td>
      <td>${esc(s.narrative)}</td>
      <td>${s.ratio} · ${s.duration}</td>
      <td>${esc(s.mood)}</td>
      <td>${esc(s.fit.slice(0, 3).join(" / "))}</td>
      <td><span class="difficulty">${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= s.difficulty ? "on" : ""}"></i>`).join("")}</span></td>
    </tr>
  `).join("");
}

function renderSelector() {
  const goal = GOALS[currentGoal];
  const group = GROUPS[currentGroup];
  const primary = styleById[goal.styleId];
  let secondary = styleById[group.styleId];
  if (secondary.id === primary.id) {
    secondary = styleById[goal.secondary === primary.id ? "cat" : goal.secondary];
  }
  const result = $("#selectorResult");
  result.innerHTML = `
    <div>
      <div class="result-top">
        <div>
          <div class="result-kicker">主推风格 / FOR ${esc(goal.label)} × ${esc(group.label)}</div>
          <h3 class="result-name">${esc(primary.name)}<span>.</span></h3>
        </div>
        <div class="result-index">${primary.index}</div>
      </div>
      <p class="result-reason">${esc(goal.reason)}</p>
    </div>
    <div class="result-bottom">
      <p class="result-secondary">备选：<b>${esc(secondary.name)}</b><br>${esc(group.reason)}</p>
      <button class="result-open" data-open-style="${primary.id}">查看主推风格 →</button>
    </div>
  `;
}

function bindPreviews(scope = document) {
  $$(".style-card, .film-card", scope).forEach((card) => {
    const video = $("video", card);
    if (!video || card.dataset.previewBound) return;
    card.dataset.previewBound = "1";
    card.addEventListener("pointerenter", () => {
      if (!window.matchMedia("(hover: hover)").matches) return;
      try {
        video.currentTime = 0;
        video.play().catch(() => {});
      } catch (err) {}
    });
    card.addEventListener("pointerleave", () => {
      video.pause();
      try { video.currentTime = 0; } catch (err) {}
    });
  });
}

function observeReveals(scope = document) {
  const items = $$(".reveal", scope);
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}

function setHash(hash) {
  try { history.replaceState(null, "", hash); } catch (err) {}
}

function openStyle(id, updateHash = true) {
  const s = styleById[id];
  if (!s) return;
  lastFocus = document.activeElement;
  const content = $("#modalContent");
  content.innerHTML = `
    <div class="detail-hero" style="--accent:${s.accent}">
      <div class="detail-video">
        <span class="detail-video-label">${s.ratio} / ${s.duration} / ${s.fps}fps</span>
        <video controls playsinline preload="metadata" poster="${s.poster}">
          <source src="${s.video}" type="video/mp4">
        </video>
      </div>
      <div class="detail-info">
        <div class="detail-index">${s.index} / ${esc(s.kind)}</div>
        <h2 class="detail-title" id="modalTitle">${esc(s.name)}</h2>
        <p class="detail-en">${esc(s.en)}</p>
        <p class="detail-tagline">${esc(s.description)}</p>
        <div class="detail-stats">
          <div class="detail-stat"><span>画幅</span><b>${s.ratio}</b></div>
          <div class="detail-stat"><span>时长</span><b>${s.duration}</b></div>
          <div class="detail-stat"><span>叙事</span><b>${esc(s.narrative)}</b></div>
          <div class="detail-stat"><span>媒材</span><b>${esc(s.medium)}</b></div>
        </div>
      </div>
    </div>
    <div class="detail-body" style="--accent:${s.accent}">
      <section class="detail-block">
        <h3>视觉系统 / VISUAL SYSTEM</h3>
        <ul class="detail-list">${s.visual.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3>声音与节奏 / SOUND & RHYTHM</h3>
        <ul class="detail-list">${s.sound.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block full">
        <h3>叙事骨架 / STORY BEATS</h3>
        <div class="detail-timeline">
          ${s.structure.map((b) => `<div class="timeline-row"><span class="timeline-time">${esc(b.time)}</span><span class="timeline-title">${esc(b.title)}</span><span class="timeline-desc">${esc(b.desc)}</span></div>`).join("")}
        </div>
      </section>
      <section class="detail-block full">
        <h3>复刻公式 / REPLICATION FORMULA</h3>
        <p class="detail-formula">${esc(s.formula)}</p>
        <div class="detail-actions">
          <button data-copy="${esc(s.formula)}">复制公式</button>
          <button data-open-style="${s.id}" data-close-first="1">重新打开视频</button>
        </div>
      </section>
      <section class="detail-block">
        <h3>可迁移 / KEEP</h3>
        <ul class="detail-list">${s.migrate.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block">
        <h3>不要照抄 / AVOID</h3>
        <ul class="detail-list">${s.avoid.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </section>
      <section class="detail-block full">
        <h3>代表帧 / FRAMES</h3>
        <div class="detail-frames">${s.frames.map((f) => `<div class="detail-frame"><img src="${f.src}" alt="${esc(f.label)}" loading="lazy"><span>${esc(f.label)}</span></div>`).join("")}</div>
      </section>
      <section class="detail-block">
        <h3>样片 / FILMS</h3>
        <div class="detail-examples">
          <div class="example-row"><span>${esc(s.filmTitle)}</span><span>${esc(s.filmSub)}</span></div>
          <div class="example-row"><span>${esc(s.sourceNote)}</span><span>风格来源</span></div>
        </div>
        <p class="detail-note">${esc(s.note)}</p>
      </section>
      <section class="detail-block">
        <h3>适合内容 / USE CASES</h3>
        <div class="style-card-tags">${tags(s.fit)}</div>
        <div class="detail-actions">
          <button data-open-style="${s.id}" data-close-first="1">播放完整片</button>
        </div>
      </section>
    </div>
  `;
  openModal();
  if (updateHash) setHash("#style-" + id);
}

function openReference(id, updateHash = true) {
  const r = REFERENCES.find((x) => x.id === id);
  if (!r) return;
  lastFocus = document.activeElement;
  const style = styleById[r.styleId];
  $("#modalContent").innerHTML = `
    <div class="detail-hero" style="--accent:${r.accent}">
      <div class="detail-video">
        <span class="detail-video-label">REFERENCE / 仅本地学习</span>
        <video controls playsinline preload="metadata" poster="${r.poster}">
          <source src="${r.video}" type="video/mp4">
        </video>
      </div>
      <div class="detail-info">
        <div class="detail-index">${r.index} / 参考原片</div>
        <h2 class="detail-title" id="modalTitle">${esc(r.name)}</h2>
        <p class="detail-en">${esc(r.en)}</p>
        <p class="detail-tagline">${esc(r.note)}</p>
        <div class="detail-stats">
          <div class="detail-stat"><span>规格</span><b>${esc(r.meta)}</b></div>
          <div class="detail-stat"><span>对应风格</span><b>${esc(style.name)}</b></div>
        </div>
        <div class="detail-actions">
          <button data-open-style="${style.id}" data-close-first="1">查看对应风格族 →</button>
        </div>
      </div>
    </div>
    <div class="detail-body" style="--accent:${r.accent}">
      <section class="detail-block full">
        <h3>为什么放进来 / WHY THIS REFERENCE</h3>
        <p>这条片是「${esc(style.name)}」的原片样本。它提供的是观看体验和形式语法，不是可复用的素材。站点只保留本地播放，用于拉片、对照和风格学习。</p>
      </section>
      <section class="detail-block full">
        <h3>对应风格公式 / FORMULA</h3>
        <p class="detail-formula">${esc(style.formula)}</p>
      </section>
    </div>
  `;
  openModal();
  if (updateHash) setHash("#ref-" + id);
}

function openModal() {
  const modal = $("#styleModal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const scroll = $(".modal-scroll");
  if (scroll) scroll.scrollTop = 0;
  setTimeout(() => $(".modal-close")?.focus(), 40);
}

function closeModal() {
  const modal = $("#styleModal");
  if (!modal.classList.contains("is-open")) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  $$("video", $("#modalContent")).forEach((v) => v.pause());
  if (location.hash.startsWith("#style-") || location.hash.startsWith("#ref-") || location.hash.startsWith("#film-")) {
    setHash(location.pathname + location.search);
  }
  if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
}

function openFilmDetail(film) {
  lastFocus = document.activeElement;
  const style = styleById[film.styleId];
  $("#modalContent").innerHTML = `
    <div class="detail-hero" style="--accent:${film.accent}">
      <div class="detail-video">
        <span class="detail-video-label">${film.kindLabel} / ${film.meta}</span>
        <video controls playsinline preload="metadata" poster="${film.poster}">
          <source src="${film.video}" type="video/mp4">
        </video>
      </div>
      <div class="detail-info">
        <div class="detail-index">${style.index} / ${film.kindLabel}</div>
        <h2 class="detail-title" id="modalTitle">${esc(film.name)}</h2>
        <p class="detail-en">${esc(film.en)}</p>
        <p class="detail-tagline">${esc(film.note)}</p>
        <div class="detail-stats">
          <div class="detail-stat"><span>画幅 / 时长</span><b>${esc(film.meta)}</b></div>
          <div class="detail-stat"><span>对应风格</span><b>${esc(style.name)}</b></div>
        </div>
        <div class="detail-actions">
          <button data-open-style="${style.id}" data-close-first="1">查看风格族 →</button>
        </div>
      </div>
    </div>
    <div class="detail-body" style="--accent:${film.accent}">
      <section class="detail-block full">
        <h3>这条片是什么 / WHAT THIS CUT IS</h3>
        <p>${esc(film.note)}。它是「${esc(style.name)}」的另一版剪法，和主版共享视觉系统，但时长、画幅与镜头数量不同。</p>
      </section>
      <section class="detail-block full">
        <h3>风格公式 / FORMULA</h3>
        <p class="detail-formula">${esc(style.formula)}</p>
      </section>
    </div>
  `;
  openModal();
  setHash("#film-" + film.id);
}

function openFilm(id) {
  const film = filmById[id];
  if (!film) return;
  if (film.kind === "reference") openReference(film.id);
  else if (film.id === "cat-long") openFilmDetail(film);
  else openStyle(film.styleId);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const close = event.target.closest("[data-close-modal]");
    if (close) { closeModal(); return; }

    const copy = event.target.closest("[data-copy]");
    if (copy) {
      const text = copy.dataset.copy;
      navigator.clipboard?.writeText(text).then(() => {
        const old = copy.textContent;
        copy.textContent = "已复制";
        setTimeout(() => { copy.textContent = old; }, 1200);
      }).catch(() => {});
      return;
    }

    const openStyleBtn = event.target.closest("[data-open-style]");
    if (openStyleBtn) {
      if (openStyleBtn.dataset.closeFirst) {
        $$("video", $("#modalContent")).forEach((v) => v.pause());
      }
      openStyle(openStyleBtn.dataset.openStyle);
      return;
    }

    const openFilmBtn = event.target.closest("[data-open-film]");
    if (openFilmBtn) { openFilm(openFilmBtn.dataset.openFilm); return; }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { closeModal(); return; }
    const target = event.target.closest("[data-open-style], [data-open-film]");
    if (target && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      target.click();
    }
  });

  $("#goalChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-goal]");
    if (!chip) return;
    currentGoal = chip.dataset.goal;
    $$("#goalChips .chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    renderSelector();
  });

  $("#groupChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-group]");
    if (!chip) return;
    currentGroup = chip.dataset.group;
    $$("#groupChips .chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    renderSelector();
  });

  $("#filmFilters").addEventListener("click", (event) => {
    const btn = event.target.closest("[data-filter]");
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    $$("#filmFilters .filter").forEach((b) => b.classList.toggle("is-active", b === btn));
    renderFilms();
  });
}

function init() {
  renderStyles();
  renderFilms();
  renderCompare();
  renderSelector();
  bindEvents();
  bindPreviews();
  observeReveals();
  if (location.hash.startsWith("#style-")) openStyle(location.hash.replace("#style-", ""), false);
  if (location.hash.startsWith("#ref-")) openReference(location.hash.replace("#ref-", ""), false);
  if (location.hash.startsWith("#film-")) {
    const f = filmById[location.hash.replace("#film-", "")];
    if (f) openFilmDetail(f);
  }
}

init();








