export const metadata = {
  title: "Privacy Policy - c0re",
  description: "Privacy policies for C0RE Focus and Osca.",
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
                <a href="#c0re-focus" className="underline">C0RE Focus</a>
                <span className="mx-2 text-slate-600">·</span>
                <a href="#osca" className="underline">Osca</a>
              </p>
            </header>

            <div className="prose prose-invert prose-slate max-w-none">
              <section id="osca" className="mb-12 scroll-mt-32 border-b border-slate-800 pb-10">
                <h2>Osca Privacy Policy</h2>
                <p>Last updated November 22, 2026.</p>
                <p>
                  Osca is a music player with optional account and friend features.
                  C0RE Services uses the information below to provide those features,
                  protect accounts, and respond to support and safety requests.
                </p>
                <h3>Accounts and music services</h3>
                <p>
                  When you sign in, Osca uses Supabase for authentication and account
                  storage. This includes your account identifier, email address,
                  and sign-in information from Apple if you choose Sign in with Apple.
                  If you connect Apple Music or a compatible music server, Osca
                  accesses the music and playlists you authorize to provide browsing
                  and playback. Music-server credentials are stored in your device’s
                  Keychain. If you request account-based processing for a song or
                  album, Osca stores the identifiers, job status, and saved results
                  needed to deliver it to your account.
                </p>
                <p>
                  If you enable ListenBrainz scrobbling, Osca sends track details
                  and play times to the ListenBrainz service you configure. You
                  can pause scrobbling or remove your credentials in Settings.
                  ListenBrainz handles the activity it receives under its own
                  privacy policy.
                </p>
                <h3>Friends and contact matching</h3>
                <p>
                  If you create a Friends profile, your chosen display name and
                  optional username can be seen by people who find or connect
                  with you. If you choose Find Friends in Contacts and grant access,
                  Osca sends hashes of email addresses from your selected contacts
                  to match verified Osca accounts that opted into discovery.
                  Contact names stay on your device. You can use username search
                  without granting Contacts access and turn off discovery in your
                  listening profile.
                </p>
                <h3>Listening activity</h3>
                <p>
                  Your private recently played list is stored on your device. If
                  you enable listening sharing, accepted friends can see the
                  song and artist, available cover art, and playback timing you
                  share. Live status expires when it is no longer refreshed.
                  Shared history is cleaned up after about two days and is
                  removed when you turn off history sharing. If you separately
                  turn on online status, other signed-in Osca users can see that
                  you are online.
                </p>
                <h3>Safety, retention, and your choices</h3>
                <p>
                  Osca uses friend connections, blocks, and the reports you
                  submit to provide the Friends feature and respond to abuse.
                  A report can include the accounts involved, your reason and
                  optional details, and the profile or shared activity reported.
                  Reports are private to the support team and ordinarily cleared
                  after 90 days.
                </p>
                <p>
                  You can change sharing or discovery in your listening profile,
                  revoke Contacts or Apple Music access in device settings, and
                  delete your Osca account from Account settings. We keep account
                  data while you use the service and delete associated information
                  when you delete your account, except where we need to retain
                  information for security or legal obligations. We do not sell
                  personal information.
                </p>
                <p>
                  For privacy questions or data requests, contact{" "}
                  <a href="mailto:support@c0re.com">support@c0re.com</a>.
                </p>
              </section>

              <h2 id="c0re-focus" className="scroll-mt-32">C0RE Focus Privacy Policy</h2>
              <p>Last updated December 15, 2025.</p>
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
