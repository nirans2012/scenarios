# FP&A Copilot

A simple Next.js MVP for financial planning and what-if scenario analysis.

## Run locally

1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Visit:

```text
http://localhost:3000
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project.
3. Go to Vercel and import the repository.
4. Accept the default Next.js settings.
5. Deploy.

## AI integration

The current `/api/scenario` route uses a local text parser.

To connect the OpenAI API later:

- Add `OPENAI_API_KEY` as an environment variable.
- Replace the local parser in `app/api/scenario/route.ts` with an OpenAI API request.
- Ask the model to return structured JSON containing:
  - growth
  - grossMargin
  - payrollChangePct
  - opexChangePct

Keep financial calculations in `lib/finance.ts` so the model interprets language but your code remains the source of truth for calculations.
