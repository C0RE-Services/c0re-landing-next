export const metadata = {
  title: "Privacy Policy - c0re",
  description: "Privacy Policy for C0RE Focus.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">
            <header className="text-center pb-10 md:pb-12">
              <h1 className="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                Privacy Policy
              </h1>
              <p className="text-sm text-slate-400">
                Privacy Policy for C0RE Focus
                <span className="mx-2 text-slate-600">•</span>
                Last Updated: December 15, 2025
              </p>
            </header>

            <div className="prose prose-invert prose-slate max-w-none">
              <p>
                C0RE Focus (“we,” “us,” or “our”) provides an application
                designed to help users track focus and interact with an
                AI-powered assistant. This Privacy Policy explains what
                information we collect, how we use it, and your rights.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect only information necessary to operate the app and
                provide its features.
              </p>

              <h3>Information you provide</h3>
              <ul>
                <li>
                  <strong>Account information:</strong> Information required to
                  create and manage your account, such as an email address.
                </li>
                <li>
                  <strong>Profile information (optional):</strong> Username,
                  first name, last name, avatar image, time zone, and onboarding
                  status.
                </li>
                <li>
                  <strong>User-created content:</strong> Reflections you choose
                  to write and save, including titles, body text, and optional
                  mood tags.
                </li>
                <li>
                  <strong>Safety reports:</strong> Information submitted when
                  reporting content or users, including the selected reason and
                  optional details.
                </li>
              </ul>

              <h3>Information collected through app usage</h3>
              <ul>
                <li>
                  <strong>Focus and activity data:</strong> Sessions you create,
                  including start and end times, duration, activity type,
                  optional notes, focus mode status, and daily aggregates.
                </li>
                <li>
                  <strong>Technical data:</strong> App version, timestamps, and
                  crash or performance diagnostics needed to maintain
                  reliability.
                </li>
              </ul>

              <p>
                We do not collect precise location data, contact lists,
                advertising identifiers, or data for targeted advertising.
              </p>

              <h2>2. How We Use Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Provide and operate core app functionality</li>
                <li>Save and display your sessions and reflections</li>
                <li>Authenticate users and secure accounts</li>
                <li>Enable reporting, blocking, and abuse prevention</li>
                <li>Improve app stability and performance</li>
              </ul>
              <p>We do not sell personal information.</p>

              <h2>3. AI Processing and Third-Party Services</h2>
              <p>
                When you use AI chat features in C0RE Focus, the text you submit
                is sent to OpenAI, a third-party AI service provider, solely to
                generate responses.
              </p>
              <p>
                We clearly disclose this sharing and obtain user consent before
                enabling AI features. C0RE Focus does not use your personal data
                to train AI models.
              </p>
              <p>
                We also use Supabase for authentication, database storage, and
                backend services. These providers process data only as required
                to deliver the service.
              </p>

              <h2>4. Data Retention</h2>
              <p>
                We retain information only as long as necessary to operate the
                app, comply with legal obligations, or resolve disputes.
              </p>
              <p>
                If you delete your account or request deletion, we will delete
                or anonymize your personal data unless retention is required for
                legal or security reasons.
              </p>

              <h2>5. Your Rights and Choices</h2>
              <p>You may:</p>
              <ul>
                <li>Update or remove optional profile information</li>
                <li>Delete reflections or sessions within the app</li>
                <li>Block and report users</li>
                <li>
                  Request account deletion by contacting us at{" "}
                  <a href="mailto:support@c0re.com">support@c0re.com</a>
                </li>
              </ul>

              <h2>6. Security</h2>
              <p>
                We use reasonable administrative and technical safeguards
                designed to protect your information. No system can guarantee
                absolute security.
              </p>

              <h2>7. Children’s Privacy</h2>
              <p>
                C0RE Focus is not intended for children under the age of 13. We
                do not knowingly collect personal information from children
                under 13.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Updates will be
                posted on this page with a revised “Last Updated” date.
              </p>

              <h2>9. Contact</h2>
              <p>
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <p>
                Email: <a href="mailto:support@c0re.com">support@c0re.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
