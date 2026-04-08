# Claude Workflow — poc-ai-agent

## Project Config

- **Project Path:** `{{PROJECT_PATH}}`
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
cd {{PROJECT_PATH}}
git status
git checkout main
git pull origin main
```

### Step 3 — 🧠 Analyze & Post Implementation Plan
- Analyze the ticket requirements
- Identify affected files, components, and routes
- Write a clear implementation plan
- **Save to file** at `{{PROJECT_PATH}}/tmp/{{TICKET}}/03-implementation-plan.md` with format:
  ```
  🧠 Implementation Plan — [TICKET-CODE]
  
  **Approach:** ...
  **Files to change:** ...
  **Steps:** ...
  **Estimated complexity:** ...
  ```
- **Post as a Jira comment** on the ticket using the same content from the saved file

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
- **Save to file** at `{{PROJECT_PATH}}/tmp/{{TICKET}}/06-test-case.md` with format:

  ```
  TC-01: [Test name]
  - Given: ...
  - When: ...
  - Then: ...
  
  TC-02: ...
  ```

### Step 7 — 💬 Post Test Cases to Jira
- **Post as a Jira comment** on the ticket using the same content from the saved file, with format:

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
- For **each TC**, take a screenshot of the relevant UI state as evidence:
  - Name screenshots as `CP-XXXX-tc-01.png`, `CP-XXXX-tc-02.png`, etc. saved to `{{PROJECT_PATH}}/tmp/{{TICKET}}/09-test-result/images/`
  - Screenshot should capture the relevant page/component state for that TC
- Capture findings (pass/fail per TC)
- **Upload each screenshot as an attachment to Jira** using `curl` with the Jira REST API, and capture the returned attachment URL:

  ```bash
  curl -X POST \
    -H "Authorization: Basic $JIRA_API_TOKEN_BASIC" \
    -H "X-Atlassian-Token: no-check" \
    -F "file=@{{PROJECT_PATH}}/tmp/{{TICKET}}/09-test-result/images/CP-XXXX-tc-01.png" \
    "https://juzmatch-tbi.atlassian.net/rest/api/3/issue/CP-XXXX/attachments"
  ```

  - Save the `content` URL from the response JSON for each screenshot — you'll need it in Step 10
- **Save results to file** at `{{PROJECT_PATH}}/tmp/{{TICKET}}/09-test-result.md` with format:

  ```
  📊 Test Results — [TICKET-CODE]
  
  ✅ TC-01: PASSED — ...
     📸 Screenshot: [Jira attachment URL]
  ✅ TC-02: PASSED — ...
     📸 Screenshot: [Jira attachment URL]
  ❌ TC-03: FAILED — [issue description]
     📸 Screenshot: [Jira attachment URL — shows the failure]
  ```

- **Post as a Jira comment** on the ticket using the same content from the saved file

### Step 10 — 🚀 Push & Open PR

```bash
git add .
git commit -m "feat(CP-XXXX): short description"
git push origin feat/CP-XXXX-short-description
```

- Open PR using `gh pr create` with the following body template:

  ```
  # Ticket
  https://juzmatch-tbi.atlassian.net/browse/CP-XXXX
  
  # Summary
  - 
  - 
  - 
  
  # Proof of Work
  
  ![TC-01]([Jira attachment URL for CP-XXXX-tc-01])
  ![TC-02]([Jira attachment URL for CP-XXXX-tc-02])
  
  # Remark
  
  ```

- Fill in **Summary** bullets from the implementation plan
- **Proof of Work** must use the Jira attachment URLs captured in Step 9 (not local `/tmp/` paths)
- **Remark** is optional — add only if there are known limitations, follow-up tasks, or reviewer notes

---

## 📌 Notes
- Always pull latest `main` before creating a new branch
- Never push directly to `main`
- All 3 Jira comments (plan, test cases, results) must be posted before opening PR
- If any TC fails in Step 9, fix the issue before proceeding to Step 10
