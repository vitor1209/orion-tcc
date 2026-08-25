import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useLojaAnimations = (pageRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (!pageRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const introTimeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      introTimeline
        .from(".store-orbit", {
          opacity: 0,
          scale: 0.72,
          rotate: -28,
          duration: 0.9,
        })
        .from(
          ".store-product-image",
          {
            opacity: 0,
            y: 42,
            scale: 0.9,
            duration: 0.85,
          },
          "-=0.58"
        )
        .from(
          ".store-gallery",
          {
            opacity: 0,
            y: 28,
            scale: 0.96,
            duration: 0.58,
          },
          "-=0.34"
        )
        .from(
          ".store-info > *",
          {
            opacity: 0,
            x: 34,
            duration: 0.58,
            stagger: 0.08,
          },
          "-=0.62"
        );

      gsap.to(".store-product-image", {
        y: -12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".store-benefits-header > *", {
        scrollTrigger: {
          trigger: ".store-benefits-header",
          start: "top 82%",
        },
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".store-benefit-card", {
        scrollTrigger: {
          trigger: ".store-benefits-grid",
          start: "top 82%",
        },
        opacity: 0,
        y: 34,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, pageRef);

    return () => context.revert();
  }, [pageRef]);
};

