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
          <p className="text-gray-200">Last Updated: January 1, 2024</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <h2>Eligibility</h2>
          <p>
            This Service is intended for residents of the United States who are at least
            18 years of age or older.
          </p>

          <h2>Modifications</h2>
          <p>
            The company reserves the right to update these terms at any time. Your continued
            use of the website following any changes indicates your acceptance of the new terms.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All site content, images, text, designs, and trademarks belong to Renew Hair Loss
            Center. Users may share content with clear and obvious credit back to our site but
            cannot claim ownership of any materials.
          </p>

          <h2>User Communications</h2>
          <p>
            The company owns all submitted communications and may republish them. Users should
            not submit illegal, libelous, obscene, or harmful content.
          </p>

          <h2>Advertising and Affiliates</h2>
          <p>
            The company disclaims liability for purchases made through affiliate links and
            maintains the right to use advertising on the website.
          </p>

          <h2>Testimonials</h2>
          <p>
            Results vary by individual. The company makes no guarantees about accuracy or
            likelihood of success from testimonials, though quoted customers have verified
            their information as truthful.
          </p>

          <h2>Medical Disclaimer</h2>
          <p>
            Content on this website is educational only. The site does not diagnose or treat
            medical conditions. Users with medical questions should consult licensed healthcare
            professionals.
          </p>

          <h2>Liability Limitations</h2>
          <p>
            The site operates &quot;as is&quot; with limited liability. The company disclaims warranties
            of merchantability and fitness for particular purposes. Renew Hair Loss Center
            shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages resulting from your use of or inability to use this website
            or our services.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            Binding arbitration applies to any disputes; jury trials are waived. Exceptions
            exist for small claims and intellectual property disputes. Utah law governs all
            matters relating to these terms and the use of this website.
          </p>

          <h2>Termination</h2>
          <p>
            The company may terminate your access to the website immediately for violations
            of these terms.
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
