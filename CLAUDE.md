# Claude Workflow — poc-ai-agent

## Project Config
- **Project Path:** `/Users/user/Projects/poc-ai-agent`
- **Git Remote:** GitHub
- **PR Target Branch:** `main`
- **Branch Pattern:** `feat/{{TICKET-CODE}}-short-description`
- **Testing:** Run dev server (`npm run dev`) + open browser via Claude in Chrome for visual testing
- **Jira Site:** `juzmatch-tbi.atlassian.net`

---

## 🔑 Trigger
When user says **"doing CP-XXXX"** or **"Start workflow for CP-XXXX"**, execute the full 10-step workflow below automatically.

---

## 🔄 10-Step Coding Workflow

### Step 1 — 📋 Read Jira Ticket
- Fetch the Jira ticket using the Atlassian MCP tool
- Extract: summary, description, acceptance criteria, story points, labels

### Step 2 — 📂 Open Project & Sync
```bash
cd /Users/user/Projects/poc-ai-agent
git status
git checkout main
git pull origin main
```

### Step 3 — 🧠 Analyze & Post Implementation Plan
- Analyze the ticket requirements
- Identify affected files, components, and routes
- Write a clear implementation plan
- **Post as a Jira comment** on the ticket with format:
  ```
  🧠 Implementation Plan — [TICKET-CODE]
  
  **Approach:** ...
  **Files to change:** ...
  **Steps:** ...
  **Estimated complexity:** ...
  ```

### Step 4 — 🌿 Create Feature Branch
```bash
git checkout -b feat/{{TICKET-CODE}}-short-description
```
- Branch name must follow pattern: `feat/CP-XXXX-short-description`
- Keep description short (2-4 words, kebab-case)

### Step 5 — 💻 Implement Code
- Implement changes file by file
- Follow existing code style and conventions in the project
- Ask for clarification if requirements are ambiguous

### Step 6 — 🧪 Write Test Cases
- Write manual browser test scenarios based on acceptance criteria
- Format:
  ```
  TC-01: [Test name]
  - Given: ...
  - When: ...
  - Then: ...
  
  TC-02: ...
  ```

### Step 7 — 💬 Post Test Cases to Jira
- **Post as a Jira comment** on the ticket with format:
  ```
  🧪 Test Cases — [TICKET-CODE]
  
  TC-01: ...
  TC-02: ...
  ```

### Step 8 — ▶️ Run Dev Server & Open Browser
```bash
npm run dev
```
- Open browser via Claude in Chrome
- Navigate to the relevant page/feature URL

### Step 9 — 🔍 Visual Testing & Post Results
- Visually test each TC scenario in the browser using Claude in Chrome
- Capture findings (pass/fail per TC)
- **Post as a Jira comment** on the ticket with format:
  ```
  📊 Test Results — [TICKET-CODE]
  
  ✅ TC-01: PASSED — ...
  ✅ TC-02: PASSED — ...
  ❌ TC-03: FAILED — [issue description]
  ```

### Step 10 — 🚀 Push & Open PR
```bash
git add .
git commit -m "feat(CP-XXXX): short description"
git push origin feat/CP-XXXX-short-description
gh pr create --base main --title "feat(CP-XXXX): short description" --body "## Summary\n...\n\n## Jira\nhttps://juzmatch-tbi.atlassian.net/browse/CP-XXXX\n\n## Test Results\n..."
```

---

## 📌 Notes
- Always pull latest `main` before creating a new branch
- Never push directly to `main`
- All 3 Jira comments (plan, test cases, results) must be posted before opening PR
- If any TC fails in Step 9, fix the issue before proceeding to Step 10
