:root {
  color-scheme: light;
  --bg: #f6f7f9;
  --card: #ffffff;
  --text: #111827;
  --muted: #6b7280;
  --border: #e5e7eb;
  --accent: #111827;
  --accent-soft: #eef2ff;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background: var(--bg);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
}

button, input, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.page {
  min-height: 100vh;
  padding: 24px;
}

.shell {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  margin-bottom: 20px;
}

.hero h1 {
  margin: 0;
  font-size: 32px;
}

.hero p {
  margin: 8px 0 0;
  color: var(--muted);
}

.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.35fr);
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
}

.card h2, .card h3 {
  margin-top: 0;
}

.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

label span {
  display: block;
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 6px;
}

input, textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 10px 12px;
  background: white;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.primary, .secondary {
  min-height: 44px;
  border-radius: 12px;
  padding: 0 14px;
  border: 1px solid var(--border);
}

.primary {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.secondary {
  background: white;
  color: var(--text);
}

.kpis {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.kpi {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px;
}

.kpi .label {
  color: var(--muted);
  font-size: 13px;
}

.kpi .value {
  font-size: 24px;
  font-weight: 700;
  margin-top: 6px;
}

.kpi .delta {
  font-size: 13px;
  margin-top: 6px;
}

.tableWrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
}

th, td {
  padding: 10px 8px;
  border-bottom: 1px solid var(--border);
  text-align: right;
}

th:first-child, td:first-child {
  text-align: left;
}

.muted { color: var(--muted); }

.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.status {
  margin-top: 8px;
  font-size: 13px;
  color: var(--muted);
}

.sensitivity button {
  width: 100%;
  min-height: 42px;
  border: 1px solid var(--border);
  background: white;
  border-radius: 10px;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .kpis { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 620px) {
  .page { padding: 14px; }
  .inputs, .split, .kpis { grid-template-columns: 1fr; }
}
