"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // useSearchParams() returns a new object on every router refresh / HMR update even when the
  // URL is unchanged, so compare the actual URL to avoid yanking the user back to the top.
  const search = searchParams?.toString() ?? "";
  const routeKey = `${pathname}?${search}`;
  const lastRouteKey = useRef<string | null>(null);

  useEffect(() => {
    if (lastRouteKey.current === routeKey) return;
    lastRouteKey.current = routeKey;

    // Only scroll to top if there is no anchor hash target
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // Safeguard for asynchronous DOM mounting or hydration shifts
      const timer = setTimeout(() => {
        if (!window.location.hash && window.scrollY > 0) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [routeKey]);

  return null;
}

export default function ScrollToTopOnNavigation() {
  return (
    <Suspense fallback={null}>
      <ScrollHandler />
    </Suspense>
  );
}
