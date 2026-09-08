// ============================================================
// STATE
// ============================================================

const state = {
  currentSection: "now",
  selectedPhaseId: null,
  theme: localStorage.getItem("theme") || "light",
  taskStates: JSON.parse(localStorage.getItem("roadmap_tasks") || "{}"),
  exitStates: JSON.parse(localStorage.getItem("roadmap_exit") || "{}"),
};

// ============================================================
// DOM REFS
// ============================================================

const app = document.getElementById("app");
const commandOverlay = document.getElementById("command-overlay");
const commandInput = document.getElementById("command-input");
const commandResults = document.getElementById("command-results");

// ============================================================
// THEME
// ============================================================

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document.querySelector(".theme-toggle").textContent =
    theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  setTheme(state.theme === "light" ? "dark" : "light");
}

// ============================================================
// NAVIGATION
// ============================================================

function navigateTo(section, phaseId) {
  state.currentSection = section;
  state.selectedPhaseId = phaseId || null;

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === section);
  });

  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// RENDER ENGINE
// ============================================================

function render() {
  const section = state.currentSection;

  if (section === "now") renderNow();
  else if (section === "roadmap") renderRoadmap();
  else if (section === "phase") renderPhaseDetail();
  else if (section === "projects") renderProjects();
  else if (section === "library") renderLibrary();
  else if (section === "math") renderMath();
  else if (section === "contract") renderContract();
}

// ----- NOW PLAYING -----

function renderNow() {
  const active =
    ROADMAP.phases.find((p) => p.status === "active") || ROADMAP.phases[0];
  const progress = getPhaseProgress(active.id);
  const next = getNextTask();

  let html = `
        <div class="section active" id="section-now">
            <h1>Now Playing</h1>
            <div class="now-playing">
                <div class="now-card">
                    <div class="label">Current Phase</div>
                    <div class="title">Phase ${active.number} — ${active.title}</div>
                    <div class="subtitle">${active.subtitle}</div>
                    <div class="progress-track">
                        <div class="progress-label">
                            <span>Progress</span>
                            <span>${progress}%</span>
                        </div>
                        <div class="progress-bar"><div class="fill" style="width:${progress}%"></div></div>
                    </div>
                </div>
                <div class="now-card">
                    <div class="label">Objective</div>
                    <p style="font-size:0.95rem;margin:4px 0 0;">${active.objective}</p>
                </div>
                <div class="now-card full-width">
                    <div class="label">Next Action</div>
                    ${
                      next
                        ? `
                        <div class="next-action">
                            <div class="action-text">${next.task.text}</div>
                            <div class="action-hint">Phase ${next.phase.number} · ${next.phase.title}</div>
                            <button class="nav-btn" style="margin-top:8px;" onclick="toggleTask('${next.phase.id}','${next.task.id}')">✓ Mark Complete</button>
                        </div>
                    `
                        : `
                        <p style="margin:8px 0 0;color:var(--gold);">🎉 All tasks complete! Move to the next phase.</p>
                    `
                    }
                </div>
            </div>
        </div>
    `;

  app.innerHTML = html;
}

// ----- ROADMAP -----

function renderRoadmap() {
  let html = `
        <div class="section active" id="section-roadmap">
            <h1>Roadmap</h1>
            <p>${ROADMAP.philosophy.text}</p>
            <div class="phase-grid">
    `;

  ROADMAP.phases.forEach((p) => {
    const progress = getPhaseProgress(p.id);
    const statusLabel =
      p.status === "active"
        ? "Active"
        : p.status === "done"
          ? "Complete"
          : "Locked";
    const statusClass =
      p.status === "active" ? "active" : p.status === "done" ? "done" : "";

    html += `
            <div class="phase-card" onclick="navigateTo('phase','${p.id}')">
                <div class="phase-number">Phase ${p.number}</div>
                <div class="phase-title">${p.title}</div>
                <div class="phase-subtitle">${p.subtitle}</div>
                <span class="phase-status ${statusClass}">${statusLabel}</span>
                <div class="progress-track" style="margin-top:10px;">
                    <div class="progress-label">
                        <span style="font-size:0.7rem;">${progress}%</span>
                    </div>
                    <div class="progress-bar"><div class="fill" style="width:${progress}%;background:${p.status === "done" ? "var(--gold)" : "var(--accent)"};"></div></div>
                </div>
            </div>
        `;
  });

  html += `</div></div>`;
  app.innerHTML = html;
}

// ----- PHASE DETAIL -----

function renderPhaseDetail() {
  const phase = ROADMAP.phases.find((p) => p.id === state.selectedPhaseId);
  if (!phase) {
    navigateTo("roadmap");
    return;
  }

  const progress = getPhaseProgress(phase.id);

  let html = `
        <div class="section active phase-detail" id="section-phase">
            <div class="back-link" onclick="navigateTo('roadmap')">← Back to Roadmap</div>

            <div class="phase-header">
                <div class="phase-number">Phase ${phase.number}</div>
                <h1>${phase.title}</h1>
                <div class="phase-subtitle">${phase.subtitle}</div>
                <span class="phase-status ${phase.status === "active" ? "active" : phase.status === "done" ? "done" : ""}" style="margin-top:8px;display:inline-block;">
                    ${phase.status === "active" ? "Active" : phase.status === "done" ? "Complete" : "Locked"}
                </span>
                <div class="progress-track" style="margin-top:12px;max-width:300px;">
                    <div class="progress-label">
                        <span>${progress}%</span>
                    </div>
                    <div class="progress-bar"><div class="fill" style="width:${progress}%"></div></div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin:24px 0;">
                <div>
                    <h3>Objective</h3>
                    <p>${phase.objective}</p>
                </div>
                <div>
                    <h3>Why This Phase Exists</h3>
                    <p>${phase.why}</p>
                </div>
            </div>

            <h3>Concepts</h3>
            <ul style="padding-left:20px;margin-bottom:20px;">
                ${phase.concepts.map((c) => `<li>${c}</li>`).join("")}
            </ul>

            <div class="liner-notes">
                <h4>⏺ What I Deliberately Ignore</h4>
                <ul>
                    ${phase.ignored.map((i) => `<li>${i}</li>`).join("")}
                </ul>
            </div>

            <h3>Tracklist</h3>
            <ul class="tracklist">
                ${phase.tasks
                  .map(
                    (t) => `
                    <li>
                        <input type="checkbox" ${t.done ? "checked" : ""} onchange="toggleTask('${phase.id}','${t.id}')" />
                        <span class="task-label ${t.done ? "task-done" : ""}">${t.text}</span>
                    </li>
                `,
                  )
                  .join("")}
            </ul>

            <h3>Resources</h3>
            <div class="resource-grid">
                ${Object.entries(phase.resources)
                  .map(
                    ([role, title]) => `
                    <div class="resource-item">
                        <div class="res-role">${role}</div>
                        <div class="res-title">${title}</div>
                    </div>
                `,
                  )
                  .join("")}
            </div>

            <h3>Projects</h3>
            <p style="margin-bottom:8px;">${phase.projects_private ? "These projects remain private." : "These projects are published on GitHub."}</p>
            <ul style="padding-left:20px;margin-bottom:20px;">
                ${phase.projects.map((p) => `<li>${p}</li>`).join("")}
            </ul>

            <h3>Exit Criteria</h3>
            <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:8px;">You are not finished because you read the book. You are finished when you can do these things.</p>
            <ul class="exit-criteria">
                ${phase.exit
                  .map(
                    (e, i) => `
                    <li>
                        <input type="checkbox" ${state.exitStates[phase.id + "_exit_" + i] ? "checked" : ""} onchange="toggleExit('${phase.id}',${i})" />
                        <span style="${state.exitStates[phase.id + "_exit_" + i] ? "text-decoration:line-through;color:var(--text-muted);" : ""}">${e}</span>
                    </li>
                `,
                  )
                  .join("")}
            </ul>
        </div>
    `;

  app.innerHTML = html;
}

// ----- PROJECTS -----

function renderProjects() {
  let html = `
        <div class="section active" id="section-projects">
            <h1>Project Ladder</h1>
            <p>Each project builds on the last. The progression from easiest to hardest.</p>
            <div class="project-ladder">
    `;

  ROADMAP.projects.forEach((p, i) => {
    const statusClass = p.status === "public" ? "public" : "private";
    html += `
            <div class="project-item">
                <span class="proj-order">#${String(i + 1).padStart(2, "0")}</span>
                <span class="proj-name">${p.name}</span>
                <span class="proj-demo">${p.demo}</span>
                <span class="proj-status ${statusClass}">${p.status}</span>
            </div>
        `;
  });

  html += `</div></div>`;
  app.innerHTML = html;
}

// ----- LIBRARY -----

function renderLibrary() {
  let html = `
        <div class="section active" id="section-library">
            <h1>Library</h1>
            <p>The books that build the foundation.</p>
            <div class="library-grid">
    `;

  ROADMAP.library.forEach((b) => {
    html += `
            <div class="library-book">
                <div class="book-role">${b.role}</div>
                <div class="book-title">${b.title}</div>
                <div class="book-author">${b.author}</div>
                <div class="book-status">${b.subject} · ${b.status}</div>
            </div>
        `;
  });

  html += `</div></div>`;
  app.innerHTML = html;
}

// ----- MATHEMATICS -----

function renderMath() {
  let html = `
        <div class="section active" id="section-math">
            <h1>Mathematics Roadmap</h1>
            <p>Mathematics supports engineering. Each concept connects to its application.</p>
            <div class="math-chain">
    `;

  ROADMAP.math.forEach((m) => {
    html += `
            <div class="math-link">
                <span class="math-concept">${m.concept}</span>
                <span class="math-arrow">→</span>
                <span class="math-app">${m.application}</span>
                <span style="margin-left:auto;font-family:var(--font-mono);font-size:0.7rem;color:var(--text-muted);">Phase ${m.phase}</span>
            </div>
        `;
  });

  html += `</div></div>`;
  app.innerHTML = html;
}

// ----- CONTRACT -----

function renderContract() {
  let html = `
        <div class="section active" id="section-contract">
            <h1>The Contract</h1>
            <p style="max-width:600px;">These are the rules I follow religiously. They are not motivational quotes — they are operating rules.</p>
            <ol class="contract-list">
    `;

  ROADMAP.rules.forEach((rule, i) => {
    html += `
            <li>
                <span class="rule-number">${String(i + 1).padStart(2, "0")}</span>
                <span class="rule-text">${rule}</span>
            </li>
        `;
  });

  html += `
            </ol>
            <h2 style="margin-top:40px;">Long-Term Milestones</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;margin:16px 0;">
    `;

  ROADMAP.milestones.forEach((m) => {
    html += `
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;">
                <div style="font-family:var(--font-mono);font-size:0.7rem;text-transform:uppercase;color:var(--gold);">${m.period}</div>
                <p style="font-size:0.9rem;margin:6px 0 0;">${m.description}</p>
            </div>
        `;
  });

  html += `</div></div>`;
  app.innerHTML = html;
}

// ============================================================
// TASK / EXIT TOGGLES
// ============================================================

function toggleTask(phaseId, taskId) {
  const phase = ROADMAP.phases.find((p) => p.id === phaseId);
  if (!phase) return;

  const task = phase.tasks.find((t) => t.id === taskId);
  if (!task) return;

  task.done = !task.done;
  state.taskStates[taskId] = task.done;
  localStorage.setItem("roadmap_tasks", JSON.stringify(state.taskStates));

  // Re-render the current view
  render();

  // Update active phase if needed
  updatePhaseStatus(phaseId);
}

function toggleExit(phaseId, index) {
  const key = phaseId + "_exit_" + index;
  state.exitStates[key] = !state.exitStates[key];
  localStorage.setItem("roadmap_exit", JSON.stringify(state.exitStates));
  render();
}

function updatePhaseStatus(phaseId) {
  const phase = ROADMAP.phases.find((p) => p.id === phaseId);
  if (!phase) return;

  const { total, done } = getTaskCount(phaseId);
  if (done === total && total > 0) {
    phase.status = "done";
    // Unlock next phase
    const idx = ROADMAP.phases.indexOf(phase);
    if (idx < ROADMAP.phases.length - 1) {
      ROADMAP.phases[idx + 1].status = "active";
    }
  }
}

// ============================================================
// COMMAND PALETTE
// ============================================================

function openCommandPalette() {
  commandOverlay.classList.remove("hidden");
  commandInput.value = "";
  commandResults.innerHTML = "";
  commandInput.focus();
  updateCommandResults("");
}

function closeCommandPalette() {
  commandOverlay.classList.add("hidden");
}

function updateCommandResults(query) {
  const q = query.toLowerCase().trim();
  let items = [];

  // Phases
  ROADMAP.phases.forEach((p) => {
    if (
      p.title.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q)
    ) {
      items.push({
        label: `Phase ${p.number}: ${p.title}`,
        action: () => navigateTo("phase", p.id),
        path: "Phase",
      });
    }
  });

  // Projects
  ROADMAP.projects.forEach((p) => {
    if (p.name.toLowerCase().includes(q)) {
      items.push({
        label: p.name,
        action: () => navigateTo("projects"),
        path: "Project",
      });
    }
  });

  // Sections
  const sections = [
    { label: "Now Playing", action: () => navigateTo("now"), path: "Section" },
    { label: "Roadmap", action: () => navigateTo("roadmap"), path: "Section" },
    {
      label: "Projects",
      action: () => navigateTo("projects"),
      path: "Section",
    },
    { label: "Library", action: () => navigateTo("library"), path: "Section" },
    { label: "Mathematics", action: () => navigateTo("math"), path: "Section" },
    {
      label: "Contract",
      action: () => navigateTo("contract"),
      path: "Section",
    },
  ];
  sections.forEach((s) => {
    if (s.label.toLowerCase().includes(q)) {
      items.push(s);
    }
  });

  if (q === "") {
    items = [
      {
        label: "Now Playing",
        action: () => navigateTo("now"),
        path: "Section",
      },
      {
        label: "Roadmap",
        action: () => navigateTo("roadmap"),
        path: "Section",
      },
      ...items.slice(0, 6),
    ];
  }

  if (items.length === 0) {
    commandResults.innerHTML = `<li style="color:var(--text-muted);font-style:italic;">No results found</li>`;
    return;
  }

  commandResults.innerHTML = items
    .slice(0, 12)
    .map(
      (item) => `
        <li data-action="${encodeURIComponent(JSON.stringify(item.action.toString()))}">
            <span>${item.label}</span>
            <span class="cmd-path">${item.path || ""}</span>
        </li>
    `,
    )
    .join("");

  // Click handler
  commandResults.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const actionStr = decodeURIComponent(li.dataset.action);
      const fn = new Function("return " + actionStr)();
      fn();
      closeCommandPalette();
    });
  });
}

// Keyboard: Command Palette
document.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    if (commandOverlay.classList.contains("hidden")) {
      openCommandPalette();
    } else {
      closeCommandPalette();
    }
  }
  if (e.key === "Escape") {
    if (!commandOverlay.classList.contains("hidden")) {
      closeCommandPalette();
    }
  }
});

commandInput.addEventListener("input", (e) => {
  updateCommandResults(e.target.value);
});

// ============================================================
// NAVIGATION BUTTONS
// ============================================================

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.section === "now") navigateTo("now");
    else if (btn.dataset.section === "roadmap") navigateTo("roadmap");
    else if (btn.dataset.section === "projects") navigateTo("projects");
    else if (btn.dataset.section === "library") navigateTo("library");
    else if (btn.dataset.section === "math") navigateTo("math");
    else if (btn.dataset.section === "contract") navigateTo("contract");
  });
});

document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);

// ============================================================
// INIT
// ============================================================

// Load task states from localStorage
ROADMAP.phases.forEach((phase) => {
  phase.tasks.forEach((task) => {
    if (state.taskStates[task.id] !== undefined) {
      task.done = state.taskStates[task.id];
    } else {
      task.done = false;
    }
  });
});

// Set initial theme
setTheme(state.theme);

// Render
navigateTo("now");

console.log("🎵 Engineering Roadmap — loading...");
console.log("⌘K to navigate.");
