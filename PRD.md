# PRD: claude-docs Landing Page

## Overview

Marketing site for claude-docs at claudedocs.com. Minimal, clean, light mode. Built with Next.js + shadcn/ui.

## Target Audience

Developers already using Claude Code who want reliable library documentation in their workflow.

## Primary Goals (in order)

1. Get users to run `npx claude-docs`
2. Star the GitHub repo
3. Contribute (PRs, roadmap items)

---

## Page Structure

### Hero

- Tagline: "One line away from Claude Code having reliable docs"
- Subtext: "Auto-configures library docs agents for Claude Code"
- Command block: `npx claude-docs` with copy button
- GitHub stars badge

### How It Works

Three steps, visual, no paragraphs:

1. **Run `npx claude-docs`** → Configures Context7 MCP, installs slash commands, creates base agents
2. **Run `claude /sync-docs`** → Scans your dependencies, validates with Context7, generates library-specific agents
3. **Use `@research-{library}` or `/research`** → Query docs directly in Claude Code

### Base Agents

Show the agents that come pre-installed. Each links to its source on GitHub:

| Agent | Purpose | Source |
|-------|---------|--------|
| `@codebase-locator` | Find WHERE code lives | [View prompt](https://github.com/ii-vo/claude-docs/blob/main/templates/agents/codebase-locator.md) |
| `@codebase-analyzer` | Understand HOW code works | [View prompt](https://github.com/ii-vo/claude-docs/blob/main/templates/agents/codebase-analyzer.md) |
| `@codebase-pattern-finder` | Find EXAMPLES in the codebase | [View prompt](https://github.com/ii-vo/claude-docs/blob/main/templates/agents/codebase-pattern-finder.md) |
| `@web-search-researcher` | Research topics not in Context7 | [View prompt](https://github.com/ii-vo/claude-docs/blob/main/templates/agents/web-search-researcher.md) |

Plus dynamically generated `@research-{library}` agents based on your dependencies.

### Why Context7

Grounded, honest explanation. Something like:

> "We use Context7 because it works. Instead of building and maintaining our own documentation scraper, we chose a reliable provider that already indexes library docs. Less code to maintain, more time to improve the actual agents."

Link to [Context7](https://context7.com).

### Roadmap / Contributing

Simple TODO list format:

```
TODO:
[ ] Support more manifest types (Cargo.toml, go.mod, pyproject.toml)
[ ] Additional slash commands
[ ] Easy installation of lightweight Claude Code setups (Linear, etc.)
```

PRs welcome → [CONTRIBUTING.md](https://github.com/ii-vo/claude-docs/blob/main/CONTRIBUTING.md)

### Footer

- [GitHub](https://github.com/ii-vo/claude-docs)
- [npm](https://www.npmjs.com/package/claude-docs)
- MIT License
- [ii-vo](https://www.linkedin.com/in/iivo/)

---

## Design

Terminal-inspired aesthetic mimicking Claude Code's CLI interface:

- **Font:** Monospace throughout (e.g., JetBrains Mono, Fira Code, or system monospace)
- **Colors:** Light mode terminal feel
  - Background: Off-white/light gray (`#FAFAFA` or similar)
  - Text: Near-black (`#1a1a1a`)
  - Accents: Muted — think terminal green, blue, or orange for highlights
- **Layout:** Single column, vertically stacked sections, generous whitespace
- **Command blocks:** Styled like actual terminal output with prompt prefix (`$` or `>`)
- **Borders:** Subtle, thin borders or box-drawing characters for sections
- **No gradients, no shadows, no rounded corners** — flat and clean
- **Interactive elements:** Minimal hover states, underlines for links
- **Copy button:** Simple icon, no background

Reference: The Claude Code CLI itself — black text on light background, monospace, information-dense but readable.

---

## Technical

- Framework: Next.js (App Router)
- UI: shadcn/ui (do not edit base components, wrap in custom components)
- Styling: Tailwind, light mode only, monospace font stack
- Hosting: Vercel
- Domain: claudedocs.com

---

## Non-Goals

- No dark mode toggle
- No analytics (for now)
- No blog
- No docs section (the CLI is the docs)
