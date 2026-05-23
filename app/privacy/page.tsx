import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PlayNest handles your data when you play free browser games.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
      <p className="mt-2 text-sm text-white/50">Last updated: May 22, 2026</p>

      <div className="prose prose-invert mt-8 max-w-none space-y-6 text-white/80">
        <section>
          <h2 className="text-xl font-bold text-white">Overview</h2>
          <p>
            PlayNest ({`https://playnestgames.vercel.app`}) offers free browser
            games. We collect minimal data and do not require an account to play.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Data stored on your device</h2>
          <p>
            Favorites and recently played games are saved in your browser using{" "}
            <strong>localStorage</strong>. This data stays on your device and is
            not sent to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Analytics</h2>
          <p>
            We may use privacy-friendly analytics (such as Vercel Web Analytics)
            to understand page views and improve the site. These tools do not sell
            your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Cookies</h2>
          <p>
            The site may use essential cookies or similar technologies for
            analytics and hosting. Game pages run in embedded players on the same
            site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Children</h2>
          <p>
            PlayNest is intended for general audiences. If you are under 13, ask a
            parent or guardian before using the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white">Contact</h2>
          <p>
            Questions about this policy? Contact the site owner through the
            contact details listed on the About page or your hosting provider
            account.
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
