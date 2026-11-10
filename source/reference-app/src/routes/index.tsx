import { createFileRoute, redirect } from "@tanstack/react-router";

// Only the About page exists so far; send visitors there.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Complete Controller | Meet Our Founder" },
      { name: "description", content: "Meet Jennifer Brazer and discover the story behind Complete Controller." },
      { property: "og:title", content: "Complete Controller | Meet Our Founder" },
      { property: "og:description", content: "Meet Jennifer Brazer and discover the story behind Complete Controller." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
});
