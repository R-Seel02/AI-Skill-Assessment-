# AI Tools for Student Skill Assessment

Quinnipiac University capstone project. The system uses AI to assess student coursework and give two kinds of output:

- **For students:** personalized feedback on the specific skills each student is struggling with and needs to work on.
- **For instructors:** a class-wide report showing which areas the class as a whole is struggling with, so they can spend more time on them in class.

Student work is de-identified before it is labeled or used for model training. Raw or identifiable student data is never stored in this repo (see [`AGENTS.md`](AGENTS.md)).

**Live site (GitHub Pages):** https://r-seel02.github.io/AI-Skill-Assessment-/ — published automatically from `main`.

**Project board:** [Trello](https://trello.com/b/nCPTcGuw/ai-tools-for-student-skill-assessment) ·
**Design docs:** team Google Drive (master design document, problem statement, literature review)

## Repo layout

```
src/        React + TypeScript frontend (Vite), deployed to GitHub Pages
tests/      Frontend tests (Vitest + Testing Library)
ml/         Python ML pipeline: de-identification, labeling, training, evaluation
  src/skill_assessment/
  tests/
docs/       Technical docs that live with the code
data/       Local-only datasets. Git-ignored except its README; never commit student data
.github/    PR template, issue templates, CI and Pages deploy workflows
```

The layout is a starting skeleton; it will follow the architecture in the master design document as that is finalised.

## Setup

Prerequisites: Node.js 22+ (24 LTS recommended) and Python 3.11+.

```bash
git clone https://github.com/R-Seel02/AI-Skill-Assessment-.git
cd AI-Skill-Assessment-
cp .env.example .env          # fill in local values; never commit .env

# Frontend
npm ci

# ML pipeline (use a virtual environment)
cd ml
python -m venv .venv
source .venv/bin/activate     # Windows: .venv\Scripts\activate
pip install -e ".[dev]" -r requirements.txt
cd ..
```

## Run

```bash
npm run dev        # Vite dev server on http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Test and lint

These are the same checks CI runs on every pull request.

```bash
npm run lint && npm run typecheck && npm test

cd ml
ruff check . && ruff format --check .
pytest -q
```

## Contributing

1. Pick up a card on the Trello board and move it to **In Progress**.
2. Branch from `main`: one branch and one PR per card.
3. Open a PR using the template: link the card and copy its acceptance criteria.
4. CI must pass and one teammate must approve before merging. `main` is protected.

## GitHub Pages

`.github/workflows/deploy.yml` runs CI, builds the app, and publishes `dist/` to GitHub Pages on every push to `main`. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The Vite `base` is `./` (relative), so the build works under any repo name. If a client-side router with deep links is added, change `base` to `'/<repo>/'` and add a `404.html` fallback.

## Team

Ryan Seely · Tripp Menhall · Isaias Barreto

Advisor: Prof. Kruti Shah · Client: Dr. J

## License

[MIT](LICENSE)
