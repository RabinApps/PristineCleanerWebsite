"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type ScreenshotSlide = {
  key: "home" | "cleanup" | "clutter" | "applications" | "spaceView" | "tools";
  src: string;
};

const SLIDES: ScreenshotSlide[] = [
  { key: "home", src: "/screenshots/home.png" },
  { key: "cleanup", src: "/screenshots/cleanup.png" },
  { key: "clutter", src: "/screenshots/clutter.png" },
  { key: "applications", src: "/screenshots/applications.png" },
  { key: "spaceView", src: "/screenshots/space_view.png" },
  { key: "tools", src: "/screenshots/tools.png" },
];

function normalizeIndex(index: number, total: number): number {
  return ((index % total) + total) % total;
}

export default function ScreenshotsCarousel() {
  const t = useTranslations("HomePage.screenshots");
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = SLIDES.length;

  const scrollToSlide = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const container = containerRef.current;
      const target = slideRefs.current[index];
      if (!container || !target) return;

      const paddingLeft = Number.parseFloat(
        window.getComputedStyle(container).paddingLeft,
      );

      container.scrollTo({
        left: Math.max(0, target.offsetLeft - paddingLeft),
        behavior,
      });

      setCurrentIndex(index);
    },
    [],
  );

  const goTo = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const nextIndex = normalizeIndex(index, totalSlides);
      scrollToSlide(nextIndex, behavior);
    },
    [scrollToSlide, totalSlides],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const paddingLeft = Number.parseFloat(
        window.getComputedStyle(container).paddingLeft,
      );
      const targetLeft = container.scrollLeft + paddingLeft;

      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const distance = Math.abs(slide.offsetLeft - targetLeft);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setCurrentIndex(nearestIndex);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      goTo(currentIndex + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [currentIndex, goTo, isPaused]);

  const statusLabel = useMemo(
    () =>
      t("slideLabel", {
        index: currentIndex + 1,
        total: totalSlides,
      }),
    [currentIndex, t, totalSlides],
  );

  return (
    <div
      className="flex flex-col gap-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        const nextFocused = event.relatedTarget as Node | null;
        if (!event.currentTarget.contains(nextFocused)) {
          setIsPaused(false);
        }
      }}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative">
        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label={t("title")}
        >
          {SLIDES.map((slide, index) => (
            <div
              key={slide.key}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              className="w-full shrink-0 snap-start rounded-2xl p-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={slide.src}
                  alt={t(`alt.${slide.key}`)}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 76vw, 68vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(currentIndex - 1)}
          aria-label={t("previous")}
          className="absolute left-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 text-[var(--foreground)] shadow-sm backdrop-blur transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:left-3"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => goTo(currentIndex + 1)}
          aria-label={t("next")}
          className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 text-[var(--foreground)] shadow-sm backdrop-blur transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:right-3"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-[var(--muted)]" aria-live="polite">
          {statusLabel}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.key}
                type="button"
                onClick={() => goTo(index)}
                aria-label={t("goTo", { index: index + 1 })}
                aria-current={isActive}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isActive
                    ? "w-7 bg-[var(--accent)]"
                    : "w-2.5 bg-[var(--border)] hover:bg-[var(--muted)]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
