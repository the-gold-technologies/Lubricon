"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
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
  }, [pathname, searchParams]);

  return null;
}

export default function ScrollToTopOnNavigation() {
  return (
    <Suspense fallback={null}>
      <ScrollHandler />
    </Suspense>
  );
}
