# Instructions for LLM coding agents

These rules apply to every agent (and every human) opening a PR in this repo.

## Branches

- `main` is protected. Never push to it directly.
- Branch from the latest `main` and open PRs against `main`.
- One branch and one PR per Trello card. Name the branch after the card, e.g. `16-repo-setup`.
- Keep a PR to the scope of its card. If you find unrelated work, note it in the PR instead of doing it.

## Project tracking

Work is tracked on the **AI Tools for Student Skill Assessment** Trello board:
https://trello.com/b/nCPTcGuw/ai-tools-for-student-skill-assessment

- Lists: Backlog → Sprint Backlog → In Progress → PR → Done.
- Each card has an owner, a user story, and an **Acceptance criteria** checklist. That checklist is the definition of done.

## Pull requests

- Use `.github/PULL_REQUEST_TEMPLATE.md`. Fill in every section; do not delete headings.
- Link the Trello card and copy its **Acceptance criteria** checklist into the PR, ticking what the PR meets and explaining anything left open.
- CI (`.github/workflows/ci.yml`) must pass: lint, typecheck, tests, build, and dependency scan for both the Node app and `ml/`. A PR also needs one approving review before merge.
- Add or update tests for any behaviour you change. Do not delete or weaken a test to make CI pass.

## Student data: hard rule

**Never commit raw or identifiable student data**: names, emails, student IDs, rosters, original submissions, or anything that could be traced back to a student. This includes test fixtures, notebooks, logs, screenshots, and PR or issue text.

- Real data lives only in the git-ignored `data/` folder or the team Google Drive.
- Data must be de-identified before labeling or training.
- Fixtures must be synthetic or fully de-identified.
- If you are unsure whether something is identifiable, treat it as identifiable and leave it out.

## Secrets

- Never commit API keys, tokens, or credentials. Read them from environment variables.
- Every variable the code reads must be listed in `.env.example` with a placeholder value.

## Commands

```bash
npm ci                 # install
npm run dev            # Vite dev server
npm run lint           # oxlint
npm run typecheck      # tsc
npm test               # vitest
npm run build          # production build (GitHub Pages)

cd ml
pip install -e ".[dev]" -r requirements.txt
ruff check . && ruff format --check .
pytest -q
```
