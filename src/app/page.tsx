import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Disk Usage Overview",
    description:
      "See your disk capacity, used space, and free space at a glance with live progress indicators.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v6M14 11v6" />
        <path d="M9 6V4h6v2" />
      </svg>
    ),
    title: "Cache Cleanup",
    description:
      "Scan and remove caches, logs, and temp files from common system and app locations.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Clutter Finder",
    description:
      "Find large files over a configurable threshold or browse everything in your Downloads folder.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Space View",
    description:
      "Scan your home directory folder-by-folder and see exactly where your disk space is going.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "App Manager",
    description:
      "Browse installed applications sorted by size and uninstall what you no longer need.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safe by Design",
    description:
      "Items are moved to Trash / Recycle Bin first, so you can always recover anything by mistake.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center gap-6 px-6 py-28 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(16,132,191,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center gap-6">
          <img
            src="/icon.png"
            alt="PristineCleaner"
            width={96}
            height={96}
            className="rounded-2xl"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl">
              Pristine<span className="text-[var(--accent)]">Cleaner</span>
            </h1>
            <p className="text-xl text-[var(--muted)]">
              Clean your desktop, effortlessly.
            </p>
          </div>
          <p className="max-w-xl text-base text-[var(--muted)] leading-relaxed">
            A free, open-source desktop cleaning utility for{" "}
            <strong className="text-[var(--foreground)]">macOS</strong>,{" "}
            <strong className="text-[var(--foreground)]">Windows</strong>, and{" "}
            <strong className="text-[var(--foreground)]">Linux</strong>. Scan
            caches, remove clutter, and free up disk space — all from a clean,
            modern interface.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/downloads"
              className="rounded-lg bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Download Free
            </Link>
            <a
              href="https://github.com/RabinApps/PristineCleaner"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on GitHub
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=YEJ37WF4Q3HPC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md border bg-[var(--surface)] px-3 py-1.5 text-xs font-medium  transition-colors border-accent text-[#009cde]"
              aria-label="Donate via PayPal"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
              </svg>
              PayPal
            </a>
            <a
              href="https://www.buymeacoffee.com/rabinapps"
              target="_blank"
              aria-label="Buy me a coffee"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <Image
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me a Coffee"
                width={100}
                height={40}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <h2 className="mb-3 text-center text-3xl font-bold text-[var(--foreground)]">
          Everything you need
        </h2>
        <p className="mb-12 text-center text-[var(--muted)]">
          A full suite of tools to keep your system lean and fast.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/40"
            >
              <div className="text-[var(--accent)]">{f.icon}</div>
              <h3 className="font-semibold text-[var(--foreground)]">
                {f.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="w-full border-t border-[var(--border)] bg-[var(--surface)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-bold text-[var(--foreground)]">
            Screenshots
          </h2>
          <p className="mb-12 text-center text-[var(--muted)]">
            See PristineCleaner in action.
          </p>
          <div className="flex items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--background)] py-20 text-center">
            <div className="flex flex-col items-center gap-2 text-sm text-[var(--muted)]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--border)]"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>
                Screenshots coming soon — add images to{" "}
                <code className="font-mono text-xs">public/screenshots/</code>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative flex flex-col items-center gap-6 overflow-hidden px-6 py-24 text-center">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(16,132,191,0.10) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <h2 className="relative text-3xl font-bold text-[var(--foreground)]">
          Ready to clean up?
        </h2>
        <p className="relative max-w-md text-[var(--muted)]">
          Download PristineCleaner for free. No account required, no telemetry,
          no nonsense.
        </p>
        <Link
          href="/downloads"
          className="relative rounded-lg bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          Get the latest release →
        </Link>
      </section>
    </div>
  );
}
