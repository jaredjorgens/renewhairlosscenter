import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Renew Hair Loss Center',
  description: 'Privacy policy for Renew Hair Loss Center website.',
}

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-200">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <h2>Information We Collect</h2>
          <p>
            When you visit our website or contact us, we may collect personal information
            that you voluntarily provide, such as your name, email address, phone number,
            and any other information you choose to share.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and schedule appointments</li>
            <li>Provide you with information about our services</li>
            <li>Improve our website and services</li>
            <li>Send you updates or promotional materials (with your consent)</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to
            outside parties. This does not include trusted third parties who assist us
            in operating our website or conducting our business, so long as those parties
            agree to keep this information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to request access to the personal information we hold about
            you, request corrections, or request deletion of your data. Contact us at
            support@renewhairlosscenter.com to exercise these rights.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            Renew Hair Loss Center<br />
            373 E 800 S, Orem, UT 84097<br />
            Phone: (801) 899-9183<br />
            Email: support@renewhairlosscenter.com
          </p>
        </div>
      </section>
    </div>
  )
}
