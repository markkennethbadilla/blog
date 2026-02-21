import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for blog.elunari.uk",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Elunari Blog
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-[var(--color-text-muted)] mb-8">
          Last updated: February 21, 2026
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="leading-relaxed">
            This website (blog.elunari.uk) is a technical blog operated by Mark
            Kenneth Badilla. Your privacy is important, and this policy explains
            what information is collected and how it is used.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="leading-relaxed mb-4">
            This site does not collect personal information directly. However,
            the following third-party services may collect data automatically:
          </p>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>
              <strong>Google AdSense</strong> — displays advertisements and may
              use cookies to serve ads based on your browsing history.
              Google&apos;s use of advertising cookies enables it and its
              partners to serve ads based on visits to this and other sites. You
              may opt out of personalized advertising at{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-purple-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
              .
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Cookies</h2>
          <p className="leading-relaxed">
            This site may set cookies through third-party services (Google
            AdSense). Cookies are small text files stored on your device that
            help provide a better browsing experience. You can control cookies
            through your browser settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Third-Party Links</h2>
          <p className="leading-relaxed">
            This site contains links to external websites. We are not
            responsible for the privacy practices of those sites and encourage
            you to read their privacy policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <p className="leading-relaxed">
            You have the right to opt out of personalized advertising, disable
            cookies in your browser, and request information about what data has
            been collected. For any privacy-related concerns, please contact us
            using the information below.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="leading-relaxed">
            If you have questions about this privacy policy, you can reach the
            site owner at:{" "}
            <a
              href="mailto:iammkb2002@gmail.com"
              className="text-purple-400 hover:underline"
            >
              iammkb2002@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            This privacy policy may be updated from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
        </section>
      </main>
    </div>
  )
}
