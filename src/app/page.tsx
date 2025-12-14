import { CommandBlock } from "@/components/custom/command-block";
import { ExternalLink } from "lucide-react";

const GITHUB_REPO = "ii-vo/claude-docs";
const GITHUB_URL = `https://github.com/${GITHUB_REPO}`;
const NPM_URL = "https://www.npmjs.com/package/claude-docs";
const LINKEDIN_URL = "https://www.linkedin.com/in/iivo/";
const CONTEXT7_URL = "https://context7.com";
const CONTRIBUTING_URL = `${GITHUB_URL}/blob/main/CONTRIBUTING.md`;

const AGENTS = [
  {
    name: "@codebase-locator",
    purpose: "Find WHERE code lives",
    file: "codebase-locator.md",
  },
  {
    name: "@codebase-analyzer",
    purpose: "Understand HOW code works",
    file: "codebase-analyzer.md",
  },
  {
    name: "@codebase-pattern-finder",
    purpose: "Find EXAMPLES in the codebase",
    file: "codebase-pattern-finder.md",
  },
  {
    name: "@web-search-researcher",
    purpose: "Research topics not in Context7",
    file: "web-search-researcher.md",
  },
];

const ROADMAP = [
  "Support more manifest types (Cargo.toml, go.mod, pyproject.toml)",
  "Iterate better prompts for agents",
  "Use Context7 TS SDK for speed and token reduction",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-2xl px-6 py-16">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-xl mb-2">
            One line away from Claude Code having reliable docs
          </h1>
          <p className="text-muted-foreground mb-6">
            Auto-configures library docs agents for Claude Code
          </p>
          <div className="mb-4">
            <CommandBlock command="npx claude-docs" />
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground no-underline"
          >
            <img
              src={`https://img.shields.io/github/stars/${GITHUB_REPO}?style=flat&label=GitHub&color=1a1a1a`}
              alt="GitHub stars"
              className="h-5"
            />
          </a>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-lg mb-6 border-b border-border pb-2">
            How It Works
          </h2>
          <ol className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-muted-foreground select-none shrink-0">1.</span>
              <div>
                <code className="bg-secondary px-1 whitespace-nowrap">npx claude-docs</code>
                <span className="text-muted-foreground ml-2">
                  — Configures Context7 MCP, installs slash commands, creates base agents
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground select-none shrink-0">2.</span>
              <div>
                <code className="bg-secondary px-1 whitespace-nowrap">claude /sync-docs</code>
                <span className="text-muted-foreground ml-2">
                  — Scans your dependencies, validates with Context7, generates library agents
                </span>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-muted-foreground select-none shrink-0">3.</span>
              <div>
                <code className="bg-secondary px-1 whitespace-nowrap">@research-&#123;library&#125;</code>
                <span className="text-muted-foreground ml-2">
                  — Query docs directly in Claude Code
                </span>
              </div>
            </li>
          </ol>
        </section>

        {/* Why This Approach */}
        <section className="mb-16">
          <h2 className="text-lg mb-6 border-b border-border pb-2">
            Why Pre-Generated Agents
          </h2>
          <div className="text-sm space-y-4 text-muted-foreground">
            <p>
              <code className="bg-secondary px-1 text-foreground">/sync-docs</code> scans your{" "}
              <code className="bg-secondary px-1 text-foreground">package.json</code> or{" "}
              <code className="bg-secondary px-1 text-foreground">requirements.txt</code>, validates each library against Context7,
              and generates dedicated <code className="bg-secondary px-1 text-foreground">@research-&#123;library&#125;</code> agents
              with the correct Context7 library IDs baked in.
            </p>
            <p>
              <strong className="text-foreground">Why not query docs on-the-fly?</strong>
            </p>
            <ul className="space-y-2 ml-4">
              <li>
                <span className="text-foreground">Save context</span> — Agent prompts are loaded only when invoked, not on every request
              </li>
              <li>
                <span className="text-foreground">Fewer MCP calls</span> — Library IDs are resolved once at sync time, not every query
              </li>
              <li>
                <span className="text-foreground">Better prompts</span> — Each agent has library-specific instructions and topic hints
              </li>
              <li>
                <span className="text-foreground">Predictable</span> — You can inspect and edit the generated agents in <code className="bg-secondary px-1">.claude/agents/</code>
              </li>
            </ul>
          </div>
        </section>

        {/* Base Agents */}
        <section className="mb-16">
          <h2 className="text-lg mb-6 border-b border-border pb-2">
            Base Agents
          </h2>
          <div className="border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary">
                  <th className="text-left px-3 py-2 font-normal">Agent</th>
                  <th className="text-left px-3 py-2 font-normal">Purpose</th>
                  <th className="text-left px-3 py-2 font-normal">Source</th>
                </tr>
              </thead>
              <tbody>
                {AGENTS.map((agent) => (
                  <tr key={agent.name} className="border-b border-border last:border-b-0">
                    <td className="px-3 py-2">
                      <code>{agent.name}</code>
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {agent.purpose}
                    </td>
                    <td className="px-3 py-2">
                      <a
                        href={`${GITHUB_URL}/blob/main/templates/agents/${agent.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                      >
                        View <ExternalLink size={12} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Plus dynamically generated <code className="bg-secondary px-1">@research-&#123;library&#125;</code> agents based on your dependencies.
          </p>
        </section>

        {/* Why Context7 */}
        <section className="mb-16">
          <h2 className="text-lg mb-6 border-b border-border pb-2">
            Why Context7
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use Context7 because it works. Instead of building and maintaining our own
            documentation scraper, we chose a reliable provider that already indexes library
            docs. Less code to maintain, more time to improve the actual agents.
          </p>
          <p className="text-sm mt-3">
            <a
              href={CONTEXT7_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              context7.com <ExternalLink size={12} />
            </a>
          </p>
        </section>

        {/* TODO */}
        <section className="mb-16">
          <h2 className="text-lg mb-6 border-b border-border pb-2">
            TODO:
          </h2>
          <div className="text-sm space-y-2 mb-4">
            {ROADMAP.map((item, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-muted-foreground select-none shrink-0">[&nbsp;]</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm">
            PRs welcome →{" "}
            <a
              href={CONTRIBUTING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              CONTRIBUTING.md <ExternalLink size={12} />
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              github
            </a>
            <a
              href={NPM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              npm
            </a>
            <span>mit license</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              ii-vo
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
