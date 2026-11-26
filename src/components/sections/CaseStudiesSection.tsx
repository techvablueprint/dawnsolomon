import faqSectionImage from "@/assets/projects/portfolio-faq-section.png.asset.json";
import quickAnswerImage from "@/assets/projects/portfolio-quick-answer.png.asset.json";

const assetBaseUrl = import.meta.env.DEV
  ? "https://id-preview--f2d73e63-d1e7-42df-960c-04f787d3205c.lovable.app"
  : "";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Case Studies</h2>
        </header>

        <article className="mx-auto max-w-4xl rounded-xl border border-primary/15 bg-card/60 p-6 backdrop-blur-sm md:p-9">
          <h3 className="mb-8 text-2xl font-bold leading-tight text-foreground md:text-3xl">
            SEO, AEO and Entity Optimization for an Automotive Coaching Company
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <section>
              <h4 className="mb-2 text-lg font-semibold text-primary">Overview</h4>
              <p className="leading-relaxed text-muted-foreground">
                Ongoing on-page, technical and entity optimization for a WordPress website with a large article library.
              </p>
            </section>

            <section>
              <h4 className="mb-2 text-lg font-semibold text-primary">Challenge</h4>
              <p className="leading-relaxed text-muted-foreground">
                Inconsistent organization data, low-value pages open to indexing, off-site canonical tags and articles competing for similar keywords.
              </p>
            </section>
          </div>

          <section className="mt-8 border-t border-border/60 pt-7">
            <h4 className="mb-4 text-lg font-semibold text-primary">What I did</h4>
            <ul className="list-disc space-y-3 pl-5 pr-14 leading-relaxed text-muted-foreground marker:text-primary sm:pr-0">
              <li>Cleaned up organization and podcast schema and strengthened entity signals</li>
              <li>Noindexed 13 low-value pages and fixed duplicate H1 headings on key pages</li>
              <li>Corrected 17 off-site canonical tags in a library of 770 articles</li>
              <li>Optimized 24 articles with quick answers, FAQs, internal links, metadata and image alt text</li>
              <li>Addressed keyword cannibalization in priority topic clusters through keyphrase differentiation and 301 redirects</li>
            </ul>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <figure>
                <img
                  src={`${assetBaseUrl}${faqSectionImage.url}`}
                  alt="Frequently asked questions section example"
                  className="h-auto w-full rounded-md border border-border/60"
                />
              </figure>
              <figure>
                <img
                  src={`${assetBaseUrl}${quickAnswerImage.url}`}
                  alt="Quick answer content example"
                  className="h-auto w-full rounded-md border border-border/60"
                />
              </figure>
            </div>
          </section>

          <div className="mt-8 grid gap-6 border-t border-border/60 pt-6 sm:grid-cols-2">
            <section>
              <h4 className="mb-2 text-sm font-semibold uppercase text-primary">Tools</h4>
              <p className="text-muted-foreground">WordPress, Yoast SEO</p>
            </section>
            <section>
              <h4 className="mb-2 text-sm font-semibold uppercase text-primary">Status</h4>
              <p className="leading-relaxed text-muted-foreground">
                Implementation work is ongoing. Performance measurement is still to follow.
              </p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}