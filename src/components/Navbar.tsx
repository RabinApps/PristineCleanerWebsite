"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon.png"
            alt="PristineCleaner"
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="text-lg">PristineCleaner</span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-1 text-sm font-medium">
          <li>
            <Link
              href="/"
              className={`rounded-md px-3 py-1.5 transition-colors ${
                pathname === "/"
                  ? "bg-[var(--surface-elevated)] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/downloads"
              className={`rounded-md px-3 py-1.5 transition-colors ${
                pathname === "/downloads"
                  ? "bg-[var(--surface-elevated)] text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              Downloads
            </Link>
          </li>
        </ul>

        {/* Donate buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=YEJ37WF4Q3HPC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[#009cde] hover:text-[#009cde]"
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
            href="https://buymeacoffee.com/rabinapps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[#FFDD00] hover:text-[#FFDD00]"
            aria-label="Buy me a coffee"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768.22-.817.624a.52.52 0 00.43.594l.024.004c.314.054.627.112.945.153 1.455.07 2.91.102 4.366.094.982-.007 1.963-.052 2.944-.1.164-.008.327-.017.49-.028.228-.019.454-.044.68-.074.55-.074.922-.65.776-1.185zm-4.742 6.047c-.507.038-1.013.073-1.52.1-.506.026-1.013.044-1.52.044a24.5 24.5 0 01-1.52-.044 24.5 24.5 0 01-1.52-.1l-.132-.01a.25.25 0 00-.268.22l-.662 4.854a.25.25 0 00.248.283h7.708a.25.25 0 00.248-.283l-.662-4.854a.25.25 0 00-.268-.22l-.132.01z" />
            </svg>
            Buy me a coffee
          </a>
        </div>
      </nav>
    </header>
  );
}
