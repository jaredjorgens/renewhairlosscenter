import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Renew Hair Loss Center',
  description: 'Terms of use for Renew Hair Loss Center website.',
}

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-gray-200">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using the Renew Hair Loss Center website, you accept and agree
            to be bound by the terms and conditions of this agreement.
          </p>

          <h2>Use of Website</h2>
          <p>
            This website is provided for informational purposes about our hair loss treatment
            services. The content is not intended to be a substitute for professional medical
            advice, diagnosis, or treatment.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the
            property of Renew Hair Loss Center and is protected by copyright laws. You may
            not reproduce, distribute, or create derivative works without our written consent.
          </p>

          <h2>Disclaimer</h2>
          <p>
            The information provided on this website is for general informational purposes only.
            Results from hair loss treatments vary by individual and are not guaranteed. We make
            no representations or warranties about the accuracy or completeness of any information
            on this site.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Renew Hair Loss Center shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of or inability to use
            this website or our services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the
            website following any changes indicates your acceptance of the new terms.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms of Use, please contact us at:
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
