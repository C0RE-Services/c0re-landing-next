export const metadata = {
  title: "Support - c0re",
  description: "Support for C0RE Focus and Osca.",
};

export default function SupportPage() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <header className="text-center pb-10 md:pb-12">
              <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Support
              </h1>
              <p className="text-lg text-slate-400">
                Help and troubleshooting for C0RE Focus and Osca.
              </p>
            </header>

            <div className="prose prose-invert prose-slate max-w-none">
              <section id="osca" className="mb-12 scroll-mt-32 border-b border-slate-800 pb-10">
                <h2>Osca Support</h2>
                <p>
                  Email <a href="mailto:support@c0re.com?subject=Osca%20Support">support@c0re.com</a>{" "}
                  for help with Osca. Include your iOS and Osca versions and a short
                  description of what happened.
                </p>
                <p>
                  To report or block someone, open their safety menu in Friends.
                  Include the report reference if you follow up by email. To delete
                  your account, open Account settings in Osca.
                </p>
                <p><a href="/privacy-policy#osca">Osca Privacy Policy</a></p>
              </section>

              <h2>C0RE Focus Support</h2>
              <p>
                For support requests, bug reports, billing questions, and
                account deletion requests, email{" "}
                <a href="mailto:support@c0re.com">support@c0re.com</a>.
              </p>
              <p>
                When possible, include your device model, iOS version, and the
                C0RE Focus app version, plus a short description of what you
                expected vs what happened.
              </p>

              <h2>Common help topics</h2>
              <h3>Account &amp; sign-in</h3>
              <ul>
                <li>
                  <strong>Forgot password:</strong> Use “Reset password” on the
                  sign-in screen.
                </li>
                <li>
                  <strong>Account deletion:</strong> Email{" "}
                  <a href="mailto:support@c0re.com">support@c0re.com</a> from the
                  email address on your account.
                </li>
              </ul>

              <h3>AI chat</h3>
              <ul>
                <li>
                  <strong>How it works:</strong> When AI features are enabled,
                  your chat text is sent to a third-party provider (OpenAI)
                  solely to generate responses.
                </li>
                <li>
                  <strong>Important:</strong> AI responses may be inaccurate and
                  aren’t medical, legal, or professional advice.
                </li>
              </ul>

              <h3>Safety</h3>
              <ul>
                <li>
                  <strong>Report content/users:</strong> Use the in-app report
                  and block tools when available, or email{" "}
                  <a href="mailto:support@c0re.com">support@c0re.com</a>.
                </li>
              </ul>

              <h2>Legal</h2>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


