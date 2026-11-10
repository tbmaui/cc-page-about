import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import office from "@/assets/jennifer-office.jpg.asset.json";
import outdoor from "@/assets/jennifer-outdoor.jpg.asset.json";
import hammock from "@/assets/jennifer-hammock.jpg.asset.json";
import bookCover from "@/assets/from-cubicle-to-cloud-cover.jpg.asset.json";
import portrait from "@/assets/jennifer-portrait.jpg.asset.json";
import logo from "@/assets/logo-long.png.asset.json";

const CC = "https://www.completecontroller.com";
const LINKS = {
  services: `${CC}/services/`,
  industries: `${CC}/services/`,
  reputation: `${CC}/reputation-clients/`,
  book: "https://jenniferbrazer.com/#book",
  jennifer: "https://jenniferbrazer.com/",
  calendly: "#", // TODO: Round-robin Calendly link pending from client
};

const TITLE = "About Complete Controller | Our Founder Story & Financial Clarity Mission";
const DESC =
  "Learn the story behind Complete Controller, founded by Jennifer Brazer to help business owners gain financial clarity through reliable people, technology, and bookkeeping support.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <OurStory />
        <Beliefs />
        <Journey />
        <BookFeature />
        <NextChapter />
      </main>
      <SiteFooter />
    </div>
  );
}

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function SiteHeader() {
  const nav = [
    ["Services", LINKS.services],
    ["Industries", LINKS.industries],
    ["Pricing", `${CC}/pricing/`],
    ["Clients", LINKS.reputation],
    ["Blog", `${CC}/blog/`],
  ];
  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
      <div className="container-cc flex h-20 items-center justify-between gap-6">
        <a href={CC} className="shrink-0" aria-label="Complete Controller — America's Bookkeeping Experts">
          <img src={logo.url} alt="Complete Controller — America's Bookkeeping Experts" width={1720} height={320} className="h-9 w-auto md:h-10" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm md:flex">
          {nav.map(([l, h]) => (
            <a key={l} href={h} className="text-foreground/80 hover:text-primary">{l}</a>
          ))}
          <span aria-current="page" className="font-semibold text-primary">About</span>
        </nav>
        <a href={LINKS.calendly} className="btn btn-accent hidden sm:inline-flex">Talk With an Expert</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container-cc grid items-center gap-14 py-28 md:grid-cols-[1.1fr_0.9fr] md:py-40">
        <div>
          <a href={LINKS.reputation} className="eyebrow text-primary hover:text-brand-deep">About Complete Controller</a>
          <h1 className="sr-only">About Complete Controller</h1>
          <p role="heading" aria-level={2} className="mt-5 font-display text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.14] tracking-[-0.015em] text-brand-deep">
            A better way to help business owners <em className="text-brand-soft">understand their numbers.</em>
          </p>
          <div className="mt-10 max-w-xl space-y-4 text-lg text-muted-foreground">
            <p>
              Before founding Complete Controller, Jennifer Brazer worked as a CFO, where she saw firsthand how difficult it could be for business owners to make confident decisions without timely, reliable financial information. She believed small businesses deserved better access to bookkeeping, accounting support, and financial insight they could actually use.
            </p>
            <p className="font-medium text-foreground">That belief became Complete Controller.</p>
          </div>
          <p className="mt-6 max-w-xl border-l-2 border-brand-soft pl-4 text-base text-foreground">
            Complete Controller provides cloud-based bookkeeping, accounting support, and financial clarity for business owners who need reliable numbers and a team they can count on.
          </p>
          <a href="#our-story" className="btn btn-primary mt-9">
            Read Our Story <ArrowRight className="size-4" />
          </a>
        </div>
        <a href={LINKS.jennifer} {...ext} className="relative block">
          <div className="absolute -inset-3 -z-0 translate-x-6 translate-y-6 rounded-lg bg-brand-tint" aria-hidden />
          <img
            src={portrait.url}
            width={1024}
            height={1280}
            alt="Jennifer Brazer, founder of Complete Controller"
            className="relative aspect-[4/5] w-full rounded-lg object-cover object-bottom shadow-floating"
          />
        </a>
      </div>
    </section>
  );
}

function Social() {
  const items = [
    ["LinkedIn", "in"],
    ["Facebook", "f"],
    ["Instagram", "ig"],
    ["X", "x"],
  ];
  return (
    <ul className="mt-6 flex gap-3" aria-label="Follow Complete Controller">
      {items.map(([n, s]) => (
        <li key={n}>
          {/* TODO: social profile URLs pending from client */}
          <a href="#" aria-label={n} className="grid size-10 place-items-center rounded-full border text-sm font-semibold text-primary transition hover:border-primary hover:text-primary">
            {s}
          </a>
        </li>
      ))}
    </ul>
  );
}

function OurStory() {
  return (
    <section id="our-story" className="section-t scroll-mt-20">
      <div className="container-cc grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-24">
        <div className="md:sticky md:top-28 md:self-start">
          <a href={CC}>
            <img src={office.url} width={1920} height={1282} loading="lazy" alt="Jennifer Brazer seated in her office with From Cubicle to Cloud displayed behind her" className="aspect-[4/3] w-full rounded-lg object-cover shadow-card" />
          </a>
          <Social />
        </div>
        <div>
          <p className="eyebrow text-primary">Our Story</p>
          <h2 className="mt-4 text-[clamp(2.1rem,3.4vw,3.4rem)] text-brand-deep">From CFO to Founder</h2>

          <h3 className="mt-12 font-sans text-lg font-medium leading-relaxed tracking-normal text-brand-deep">Business Owners Needed Financial Information They Could Trust</h3>
          <div className="mt-5 space-y-5 text-[1.075rem] font-normal text-muted-foreground">
            <p>
              Jennifer spent years working alongside{" "}
              <a href={LINKS.industries} className="text-link">small business owners</a>{" "}
              who were doing everything they could to grow their companies... serving customers, managing employees, solving problems, and carrying the constant responsibility that comes with owning a business.
            </p>
            <p>But behind the scenes, she kept seeing the same challenge.</p>
            <p>
              Too many capable business owners were making important decisions without truly trusting their numbers.
            </p>
            <p>Larger companies had accounting departments, controllers, and CFOs helping leadership understand what was happening financially. Small businesses rarely had access to that same level of support.</p>
          </div>

          <p className="mt-12 max-w-lg text-xl italic leading-relaxed text-brand-deep">Jennifer saw an opportunity to change that.</p>

          <h3 className="mt-16 font-sans text-lg font-medium leading-relaxed tracking-normal text-brand-deep">Building a Better Bookkeeping and Accounting Support Model</h3>
          <div className="mt-5 space-y-5 text-[1.075rem] font-normal text-muted-foreground">
            <p>In 2007, Jennifer founded Complete Controller around a simple idea: small business owners deserved more than a record of what had already happened.</p>
            <p>
              They deserved{" "}
              <a href={LINKS.services} className="text-link">financial information they could understand</a>, people they could rely on, and greater visibility into where their business was going.
            </p>
            <p>Complete Controller was built to bring those pieces together.</p>
            <p>As technology changed, the company evolved with it, embracing cloud-based systems and developing a team-centered approach that could support business owners beyond the limits of a traditional bookkeeping relationship.</p>
            <p>What started as Jennifer's idea grew into Complete Controller: a company built around people, financial clarity, and the belief that better information helps business owners make better decisions.</p>
          </div>
        </div>
      </div>

      <div className="mt-24 bg-brand-deep md:mt-32">
        <div className="bleed-panel grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <figure className="flex flex-col justify-center py-24 pr-[clamp(20px,4vw,64px)] text-inverse md:py-36 md:pr-12 lg:pr-20">
            <Quote className="size-10 text-brand-mist" aria-hidden />
            <blockquote className="mt-6 font-display text-[clamp(1.9rem,3.1vw,3rem)] leading-[1.18]">
              Always learn. Always evolve. <em className="text-brand-mist">Always innovate.</em>
            </blockquote>
            <figcaption className="mt-8 text-sm text-inverse-muted">
              <span className="font-semibold text-inverse">Jennifer Brazer</span>
              <br />Founder & CEO, Complete Controller
            </figcaption>
          </figure>
          <a
            href={LINKS.book}
            {...ext}
            className="relative -ml-[clamp(20px,4vw,64px)] block aspect-[3/2] overflow-hidden md:ml-0 md:aspect-auto md:min-h-80"
          >
            <img
              src={hammock.url}
              width={1920}
              height={1280}
              loading="lazy"
              alt="Jennifer Brazer reading in a hammock on a sunny patio"
              className="absolute inset-0 size-full object-cover"
            />
            <span
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-linear-to-r from-brand-deep via-brand-deep/25 to-transparent md:block"
              aria-hidden
            />
          </a>
        </div>
      </div>
    </section>
  );
}

const BELIEFS = [
  ["Financial Clarity Helps Business Owners Make Better Decisions", "Your books shouldn't simply tell you what happened. They should help you understand your business and make more informed decisions about what comes next."],
  ["Technology Should Support People, Not Replace Them", "We believe technology works best when it gives people better information, removes unnecessary friction, and creates more time for meaningful work and conversations."],
  ["Small Businesses Deserve Big-Business Financial Insight", "The size of your company shouldn't determine whether you have access to reliable financial information and experienced support."],
  ["Relationships Matter Behind the Numbers", "Behind every set of books is a business someone worked hard to build. Understanding the people, goals, and challenges behind the numbers has always mattered to us."],
];

function Beliefs() {
  return (
    <section className="section-y bg-secondary">
      <div className="container-cc">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary">What We Believe</p>
          <h2 className="mt-4 text-[clamp(2.1rem,3.4vw,3.4rem)] text-brand-deep">
            What started as an idea became <em className="text-brand-soft">how we work.</em>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">The lessons that inspired Complete Controller still shape the way we work today.</p>
        </div>

        <ol className="mt-16 grid gap-x-16 md:mt-20 md:grid-cols-2">
          {BELIEFS.map(([t, b], i) => (
            <li key={t} className="grid grid-cols-[auto_1fr] gap-6 border-t border-foreground/15 py-10 md:py-12">
              <span className="font-display text-4xl text-brand-soft">0{i + 1}</span>
              <div>
                <h3 className="text-2xl text-brand-deep">{t}</h3>
                <p className="mt-3 text-muted-foreground">{b}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="mt-16 grid gap-8 rounded-lg bg-card p-8 shadow-card md:mt-20 md:grid-cols-[1fr_auto] md:items-end md:p-12">
          <div>
            <Quote className="size-8 text-brand-soft" aria-hidden />
            <blockquote className="mt-4 font-display text-[clamp(1.4rem,2.2vw,2rem)] leading-snug text-brand-deep">
              “I love working with my Complete Controller accounting team because it feels like they are in my
              office with me.”
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Lori Coria</span>
              <br />
              Business Owner, Afters Ice Cream
            </figcaption>
          </div>
          <a href={LINKS.reputation} className="btn btn-outline text-primary">
            What Clients Say <ArrowRight className="size-4" />
          </a>
        </figure>
      </div>
    </section>
  );
}

const TIMELINE = [
  ["CFO", "Jennifer Sees the Gap", "Working as a CFO gave Jennifer a firsthand look at the difference reliable financial information could make... and how difficult that level of support was for many small businesses to access."],
  ["2007", "Complete Controller Begins in 2007", "Jennifer turns that experience into Complete Controller, creating a new approach to helping business owners gain greater clarity and confidence in their financials."],
  ["The Cloud", "Cloud Technology Changes the Model", "As cloud technology changed what was possible, Complete Controller embraced new ways for accounting professionals and business owners to work together."],
  ["Growth", "The Company Grows Across Industries", "The Complete Controller model grows to support business owners across industries and across the country while remaining grounded in Jennifer's original vision."],
  ["Today", "Financial Support Keeps Evolving", "Complete Controller continues bringing together experienced people, financial expertise, and evolving technology to help business owners better understand the financial side of their companies."],
];

function Journey() {
  return (
    <section className="section-y bg-brand-deep text-inverse">
      <div className="container-cc">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-mist">The Journey</p>
          <h2 className="mt-4 text-[clamp(2.1rem,3.4vw,3.4rem)]">
            From Cubicle to Cloud: <em className="text-brand-mist">The Complete Controller Journey</em>
          </h2>
          <p className="mt-5 text-lg text-inverse-muted">
            Complete Controller has changed a lot since 2007, but the problem we set out to solve has remained remarkably consistent: business owners need financial information they can trust and a team they can count on.
          </p>
        </div>

        <ol className="relative mt-20 grid gap-12 border-l border-inverse/20 pl-8 md:mt-24 md:grid-cols-5 md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-12">
          {TIMELINE.map(([tag, t, b]) => (
            <li key={tag} className="relative">
              <span className="absolute -left-[37px] top-1 size-3 rounded-full bg-brand-mist ring-4 ring-brand-deep md:-top-[46px] md:left-0" aria-hidden />
              <span className="eyebrow text-brand-mist">{tag}</span>
              <h3 className="mt-3 text-xl">{t}</h3>
              <p className="mt-3 text-sm text-inverse-muted">{b}</p>
            </li>
          ))}
        </ol>

        <a href={LINKS.services} className="btn btn-accent mt-16 md:mt-20">
          Learn More About Our Approach <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function BookFeature() {
  return (
    <section className="section-y">
      <div className="container-cc grid items-center gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
        <a href={LINKS.book} {...ext} className="mx-auto block w-full max-w-sm">
          <img src={bookCover.url} width={1280} height={1920} loading="lazy" alt="From Cubicle to Cloud by Jennifer Brazer with Liz Gold — official book cover" className="w-full rounded-lg shadow-floating transition duration-300 hover:-rotate-1" />
        </a>
        <div>
          <p className="eyebrow text-primary">The Founder Story, in Her Own Words</p>
          <h3 className="mt-4 text-[clamp(1.9rem,3vw,3rem)] text-brand-deep">
            The Founder Story Behind <a href={LINKS.book} {...ext} className="italic text-primary hover:text-brand-deep">From Cubicle to Cloud</a>
          </h3>
          <div className="mt-8 max-w-xl space-y-4 text-lg text-muted-foreground">
            <p>Jennifer's journey from CFO to entrepreneur, and the lessons learned while building Complete Controller, became the story behind <em>From Cubicle to Cloud</em>.</p>
            <p>The book takes readers behind the scenes of entrepreneurship, leadership, innovation, and the experiences that shaped both Jennifer and Complete Controller along the way.</p>
          </div>
          <a href={LINKS.book} {...ext} className="btn btn-primary mt-9">
            Explore <em>From Cubicle to Cloud</em> <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function NextChapter() {
  return (
    <section className="section-t bg-secondary">
      <div className="container-cc grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-24">
        <div>
          <p className="eyebrow text-primary">The Next Chapter</p>
          <h2 className="mt-4 text-[clamp(2.1rem,3.4vw,3.4rem)] text-brand-deep">
            The tools will change. <em className="text-primary">Our purpose won't.</em>
          </h2>
          <div className="mt-10 space-y-5 text-[1.075rem] text-muted-foreground">
            <p>Complete Controller began with an idea about giving business owners better access to their financial information.</p>
            <p>Nearly two decades later, the tools available to accomplish that are changing faster than ever.</p>
            <p>Cloud technology changed how businesses and accounting teams could work together. Today, automation and artificial intelligence are opening another chapter.</p>
            <p>
              We're embracing that evolution while staying grounded in the principles that brought us here: experienced people, meaningful relationships, reliable financial information, and{" "}
              <a href={LINKS.services} className="text-link">technology that makes all three stronger</a>.
            </p>
            <p>CAS-i and the tools we're building today represent the next step in that journey, not replacing the human side of accounting, but helping make financial information more accessible, useful, and easier to understand.</p>
            <p className="font-medium text-foreground">
              As bookkeeping, accounting systems, automation, and cloud-based financial tools continue to evolve, Complete Controller remains focused on the same purpose: helping business owners gain clarity, confidence, and support from the people and technology behind their numbers.
            </p>
            <p className="font-display text-2xl leading-snug text-brand-deep">
              Because technology will continue to change.<br />Our reason for using it won't.
            </p>
          </div>
        </div>
        <img src={outdoor.url} width={1280} height={1920} loading="lazy" alt="Jennifer Brazer looking ahead to the future of Complete Controller" className="aspect-[4/5] w-full rounded-lg object-cover object-bottom shadow-card md:self-center" />
      </div>

      <div className="mt-24 bg-brand-deep text-inverse md:mt-32">
        <div className="bleed-panel py-24 pr-[clamp(20px,4vw,64px)] md:py-36">
          <figure>
            <Quote className="size-10 text-brand-mist" aria-hidden />
            <blockquote className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2.4rem)] leading-snug">
              Complete Controller was built on the belief that every business owner deserves the confidence that comes from understanding their numbers. Nearly two decades later, that belief continues to shape who we are, how we serve, and where we're going.
            </blockquote>
            <figcaption className="mt-8 text-sm text-inverse-muted">
              <span className="font-semibold text-inverse">Jennifer Brazer</span>
              <br />Founder & CEO, Complete Controller
            </figcaption>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={LINKS.calendly} className="btn btn-accent">Talk With an Expert <ArrowRight className="size-4" /></a>
              <a href={LINKS.industries} className="btn btn-outline text-inverse">Explore Industries</a>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t py-14">
      <div className="container-cc flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <span className="font-display text-lg text-brand-deep">Complete <span className="italic text-primary">Controller</span></span>
        <span>© {new Date().getFullYear()} Complete Controller. All rights reserved.</span>
      </div>
    </footer>
  );
}
