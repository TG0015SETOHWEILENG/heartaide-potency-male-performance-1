import { useEffect, useRef } from "react";

type AnimationType = "fade-down" | "fade-up" | "scale-in" | "slide-in-left" | "slide-in-right";

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  animation: AnimationType = "fade-up",
  options?: { threshold?: number; delay?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("scroll-hidden", `scroll-${animation}`);
    if (options?.delay) {
      el.style.transitionDelay = `${options.delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-visible");
          observer.unobserve(el);
        }
      },
      { threshold: options?.threshold ?? 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, options?.threshold, options?.delay]);

  return ref;
}

// For applying to multiple children with staggered delays
export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  className = "",
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useScrollAnimation<HTMLElement>(animation, { threshold, delay });
  // @ts-ignore
  return <Tag ref={ref} className={className} style={style}>{children}</Tag>;
}
