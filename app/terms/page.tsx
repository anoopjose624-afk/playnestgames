import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for PlayNest free browser games.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">Terms of Use</h1>
      <p className="mt-2 text-sm text-white/50">Last updated: May 22, 2026</p>

      <div className="mt-8 space-y-6 text-white/80">
        <section>
          <h2 className="text-xl font-bold text-white">Using PlayNest</h2>
          <p>
            By using PlayNest, you agree to these terms. The site provides free
            games for personal, non-commercial entertainment unless we state
            otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Games and content</h2>
          <p>
            Games are provided &quot;as is.&quot; We do not guarantee uninterrupted
            access, high scores, or saved progress across devices. Do not attempt
            to hack, overload, or misuse the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Intellectual property</h2>
          <p>
            PlayNest branding, layout, and original game builds belong to the site
            operator. Do not copy, scrape, or redistribute the site for commercial
            use without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Third-party services</h2>
          <p>
            The site is hosted on Vercel. Future features (such as ads or
            analytics) may involve third-party services governed by their own
            policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, PlayNest is not liable for
            damages arising from use of the site or games, including loss of data
            stored in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Changes</h2>
          <p>
            We may update these terms. Continued use of the site after changes
            means you accept the updated terms.
          </p>
        </section>
      </div>

      <p className="mt-10">
        <Link href="/" className="text-violet-400 hover:text-violet-300">
          ← Back to games
        </Link>
      </p>
    </div>
  );
}
