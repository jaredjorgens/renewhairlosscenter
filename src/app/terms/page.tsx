import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Renew Hair Loss Center',
  description: 'Terms of use for Renew Hair Loss Center website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Clean Header */}
      <section className="py-16 lg:py-24 border-b border-base-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-base-300 text-sm uppercase tracking-widest">
            Last Updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Eligibility */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Who Can Use Our Service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This Service is intended for residents of the United States who are at least
              18 years of age or older.
            </p>
          </div>

          {/* Modifications */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Modifications to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The company reserves the right to update these terms at any time. Your continued
              use of the website following any changes indicates your acceptance of the new terms.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All site content, images, text, designs, and trademarks belong to Renew Hair Loss
              Center. Users may share content with clear and obvious credit back to our site but
              cannot claim ownership of any materials.
            </p>
          </div>

          {/* User Communications */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              User Communications
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The company owns all submitted communications and may republish them. Users should
              not submit illegal, libelous, obscene, or harmful content.
            </p>
          </div>

          {/* Advertising */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Advertising and Affiliates
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The company disclaims liability for purchases made through affiliate links and
              maintains the right to use advertising on the website.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Testimonials
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Results vary by individual. The company makes no guarantees about accuracy or
              likelihood of success from testimonials, though quoted customers have verified
              their information as truthful.
            </p>
          </div>

          {/* Medical Disclaimer */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Medical Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Content on this website is educational only. The site does not diagnose or treat
              medical conditions. Users with medical questions should consult licensed healthcare
              professionals.
            </p>
          </div>

          {/* Liability */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Liability Limitations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The site operates &quot;as is&quot; with limited liability. The company disclaims warranties
              of merchantability and fitness for particular purposes. Renew Hair Loss Center
              shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use this website
              or our services.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Dispute Resolution
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Binding arbitration applies to any disputes; jury trials are waived. Exceptions
              exist for small claims and intellectual property disputes. Utah law governs all
              matters relating to these terms and the use of this website.
            </p>
          </div>

          {/* Termination */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The company may terminate your access to the website immediately for violations
              of these terms.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-10 border-t border-base-300">
            <h2 className="text-xl font-semibold text-primary mb-6">
              Contact Us
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-1">
              <p className="font-medium text-primary">Renew Hair Loss Center</p>
              <p>373 E 800 S, Orem, UT 84097</p>
              <p>Phone: <a href="tel:801-899-9183" className="text-accent hover:underline">(801) 899-9183</a></p>
              <p>Email: <a href="mailto:support@renewhairlosscenter.com" className="text-accent hover:underline">support@renewhairlosscenter.com</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
