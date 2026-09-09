const state = {
  currentSection: "now",
  selectedPhaseId: null,
  theme: localStorage.getItem("theme") || "light",
  taskStates: JSON.parse(localStorage.getItem("roadmap_tasks") || "{}"),
  exitStates: JSON.parse(localStorage.getItem("roadmap_exit") || "{}"),
};
const app = document.getElementById("app");
const commandOverlay = document.getElementById("command-overlay");
const commandInput = document.getElementById("command-input");
const commandResults = document.getElementById("command-results");
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
function navigateTo(section, phaseId) {
  state.currentSection = section;
  state.selectedPhaseId = phaseId || null;
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === section);
  });
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
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
function renderNow() {
  const active =
    ROADMAP.phases.find((p) => p.status === "active") || ROADMAP.phases[0];
  const progress = getPhaseProgress(active.id);
  const next = getNextTask();
  let html = `\n        <div class="section active" id="section-now">\n            <h1>Now Playing</h1>\n            <div class="now-playing">\n                <div class="now-card">\n                    <div class="label">Current Phase</div>\n                    <div class="title">Phase ${active.number} — ${active.title}</div>\n                    <div class="subtitle">${active.subtitle}</div>\n                    <div class="progress-track">\n                        <div class="progress-label">\n                            <span>Progress</span>\n                            <span>${progress}%</span>\n                        </div>\n                        <div class="progress-bar"><div class="fill" style="width:${progress}%"></div></div>\n                    </div>\n                </div>\n                <div class="now-card">\n                    <div class="label">Objective</div>\n                    <p style="font-size:0.95rem;margin:4px 0 0;">${active.objective}</p>\n                </div>\n                <div class="now-card full-width">\n                    <div class="label">Next Action</div>\n                    ${next ? `\n                        <div class="next-action">\n                            <div class="action-text">${next.task.text}</div>\n                            <div class="action-hint">Phase ${next.phase.number} · ${next.phase.title}</div>\n                            <button class="nav-btn" style="margin-top:8px;" onclick="toggleTask('${next.phase.id}','${next.task.id}')">✓ Mark Complete</button>\n                        </div>\n                    ` : `\n                        <p style="margin:8px 0 0;color:var(--gold);">🎉 All tasks complete! Move to the next phase.</p>\n                    `}\n                </div>\n            </div>\n        </div>\n    `;
  app.innerHTML = html;
}
function renderRoadmap() {
  let html = `\n        <div class="section active" id="section-roadmap">\n            <h1>Roadmap</h1>\n            <p>${ROADMAP.philosophy.text}</p>\n            <div class="phase-grid">\n    `;
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
    html += `\n            <div class="phase-card" onclick="navigateTo('phase','${p.id}')">\n                <div class="phase-number">Phase ${p.number}</div>\n                <div class="phase-title">${p.title}</div>\n                <div class="phase-subtitle">${p.subtitle}</div>\n                <span class="phase-status ${statusClass}">${statusLabel}</span>\n                <div class="progress-track" style="margin-top:10px;">\n                    <div class="progress-label">\n                        <span style="font-size:0.7rem;">${progress}%</span>\n                    </div>\n                    <div class="progress-bar"><div class="fill" style="width:${progress}%;background:${p.status === "done" ? "var(--gold)" : "var(--accent)"};"></div></div>\n                </div>\n            </div>\n        `;
  });
  html += `</div></div>`;
  app.innerHTML = html;
}
function renderPhaseDetail() {
  const phase = ROADMAP.phases.find((p) => p.id === state.selectedPhaseId);
  if (!phase) {
    navigateTo("roadmap");
    return;
  }
  const progress = getPhaseProgress(phase.id);
  let html = `\n        <div class="section active phase-detail" id="section-phase">\n            <div class="back-link" onclick="navigateTo('roadmap')">← Back to Roadmap</div>\n\n            <div class="phase-header">\n                <div class="phase-number">Phase ${phase.number}</div>\n                <h1>${phase.title}</h1>\n                <div class="phase-subtitle">${phase.subtitle}</div>\n                <span class="phase-status ${phase.status === "active" ? "active" : phase.status === "done" ? "done" : ""}" style="margin-top:8px;display:inline-block;">\n                    ${phase.status === "active" ? "Active" : phase.status === "done" ? "Complete" : "Locked"}\n                </span>\n                <div class="progress-track" style="margin-top:12px;max-width:300px;">\n                    <div class="progress-label">\n                        <span>${progress}%</span>\n                    </div>\n                    <div class="progress-bar"><div class="fill" style="width:${progress}%"></div></div>\n                </div>\n            </div>\n\n            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin:24px 0;">\n                <div>\n                    <h3>Objective</h3>\n                    <p>${phase.objective}</p>\n                </div>\n                <div>\n                    <h3>Why This Phase Exists</h3>\n                    <p>${phase.why}</p>\n                </div>\n            </div>\n\n            <h3>Concepts</h3>\n            <ul style="padding-left:20px;margin-bottom:20px;">\n                ${phase.concepts.map((c) => `<li>${c}</li>`).join("")}\n            </ul>\n\n            <div class="liner-notes">\n                <h4>⏺ What I Deliberately Ignore</h4>\n                <ul>\n                    ${phase.ignored.map((i) => `<li>${i}</li>`).join("")}\n                </ul>\n            </div>\n\n            <h3>Tracklist</h3>\n            <ul class="tracklist">\n                ${phase.tasks.map((t) => `\n                    <li>\n                        <input type="checkbox" ${t.done ? "checked" : ""} onchange="toggleTask('${phase.id}','${t.id}')" />\n                        <span class="task-label ${t.done ? "task-done" : ""}">${t.text}</span>\n                    </li>\n                `).join("")}\n            </ul>\n\n            <h3>Resources</h3>\n            <div class="resource-grid">\n                ${Object.entries(
    phase.resources,
  )
    .map(
      ([role, title]) =>
        `\n                    <div class="resource-item">\n                        <div class="res-role">${role}</div>\n                        <div class="res-title">${title}</div>\n                    </div>\n                `,
    )
    .join(
      "",
    )}\n            </div>\n\n            <h3>Projects</h3>\n            <p style="margin-bottom:8px;">${phase.projects_private ? "These projects remain private." : "These projects are published on GitHub."}</p>\n            <ul style="padding-left:20px;margin-bottom:20px;">\n                ${phase.projects.map((p) => `<li>${p}</li>`).join("")}\n            </ul>\n\n            <h3>Exit Criteria</h3>\n            <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:8px;">You are not finished because you read the book. You are finished when you can do these things.</p>\n            <ul class="exit-criteria">\n                ${phase.exit.map((e, i) => `\n                    <li>\n                        <input type="checkbox" ${state.exitStates[phase.id + "_exit_" + i] ? "checked" : ""} onchange="toggleExit('${phase.id}',${i})" />\n                        <span style="${state.exitStates[phase.id + "_exit_" + i] ? "text-decoration:line-through;color:var(--text-muted);" : ""}">${e}</span>\n                    </li>\n                `).join("")}\n            </ul>\n        </div>\n    `;
  app.innerHTML = html;
}
function renderProjects() {
  let html = `\n        <div class="section active" id="section-projects">\n            <h1>Project Ladder</h1>\n            <p>Each project builds on the last. The progression from easiest to hardest.</p>\n            <div class="project-ladder">\n    `;
  ROADMAP.projects.forEach((p, i) => {
    const statusClass = p.status === "public" ? "public" : "private";
    html += `\n            <div class="project-item">\n                <span class="proj-order">#${String(i + 1).padStart(2, "0")}</span>\n                <span class="proj-name">${p.name}</span>\n                <span class="proj-demo">${p.demo}</span>\n                <span class="proj-status ${statusClass}">${p.status}</span>\n            </div>\n        `;
  });
  html += `</div></div>`;
  app.innerHTML = html;
}
function renderLibrary() {
  let html = `\n        <div class="section active" id="section-library">\n            <h1>Library</h1>\n            <p>The books that build the foundation.</p>\n            <div class="library-grid">\n    `;
  ROADMAP.library.forEach((b) => {
    html += `\n            <div class="library-book">\n                <div class="book-role">${b.role}</div>\n                <div class="book-title">${b.title}</div>\n                <div class="book-author">${b.author}</div>\n                <div class="book-status">${b.subject} · ${b.status}</div>\n            </div>\n        `;
  });
  html += `</div></div>`;
  app.innerHTML = html;
}
function renderMath() {
  let html = `\n        <div class="section active" id="section-math">\n            <h1>Mathematics Roadmap</h1>\n            <p>Mathematics supports engineering. Each concept connects to its application.</p>\n            <div class="math-chain">\n    `;
  ROADMAP.math.forEach((m) => {
    html += `\n            <div class="math-link">\n                <span class="math-concept">${m.concept}</span>\n                <span class="math-arrow">→</span>\n                <span class="math-app">${m.application}</span>\n                <span style="margin-left:auto;font-family:var(--font-mono);font-size:0.7rem;color:var(--text-muted);">Phase ${m.phase}</span>\n            </div>\n        `;
  });
  html += `</div></div>`;
  app.innerHTML = html;
}
function renderContract() {
  let html = `\n        <div class="section active" id="section-contract">\n            <h1>The Contract</h1>\n            <p style="max-width:600px;">These are the rules I follow religiously. They are not motivational quotes — they are operating rules.</p>\n            <ol class="contract-list">\n    `;
  ROADMAP.rules.forEach((rule, i) => {
    html += `\n            <li>\n                <span class="rule-number">${String(i + 1).padStart(2, "0")}</span>\n                <span class="rule-text">${rule}</span>\n            </li>\n        `;
  });
  html += `\n            </ol>\n            <h2 style="margin-top:40px;">Long-Term Milestones</h2>\n            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:20px;margin:16px 0;">\n    `;
  ROADMAP.milestones.forEach((m) => {
    html += `\n            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;">\n                <div style="font-family:var(--font-mono);font-size:0.7rem;text-transform:uppercase;color:var(--gold);">${m.period}</div>\n                <p style="font-size:0.9rem;margin:6px 0 0;">${m.description}</p>\n            </div>\n        `;
  });
  html += `</div></div>`;
  app.innerHTML = html;
}
function toggleTask(phaseId, taskId) {
  const phase = ROADMAP.phases.find((p) => p.id === phaseId);
  if (!phase) return;
  const task = phase.tasks.find((t) => t.id === taskId);
  if (!task) return;
  task.done = !task.done;
  state.taskStates[taskId] = task.done;
  localStorage.setItem("roadmap_tasks", JSON.stringify(state.taskStates));
  render();
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
  const { total: total, done: done } = getTaskCount(phaseId);
  if (done === total && total > 0) {
    phase.status = "done";
    const idx = ROADMAP.phases.indexOf(phase);
    if (idx < ROADMAP.phases.length - 1) {
      ROADMAP.phases[idx + 1].status = "active";
    }
  }
}
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
  ROADMAP.projects.forEach((p) => {
    if (p.name.toLowerCase().includes(q)) {
      items.push({
        label: p.name,
        action: () => navigateTo("projects"),
        path: "Project",
      });
    }
  });
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
      (item) =>
        `\n        <li data-action="${encodeURIComponent(JSON.stringify(item.action.toString()))}">\n            <span>${item.label}</span>\n            <span class="cmd-path">${item.path || ""}</span>\n        </li>\n    `,
    )
    .join("");
  commandResults.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const actionStr = decodeURIComponent(li.dataset.action);
      const fn = new Function("return " + actionStr)();
      fn();
      closeCommandPalette();
    });
  });
}
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
ROADMAP.phases.forEach((phase) => {
  phase.tasks.forEach((task) => {
    if (state.taskStates[task.id] !== undefined) {
      task.done = state.taskStates[task.id];
    } else {
      task.done = false;
    }
  });
});
setTheme(state.theme);
navigateTo("now");
console.log("🎵 Engineering Roadmap — loading...");
console.log("⌘K to navigate.");
