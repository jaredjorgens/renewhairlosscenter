import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Renew Hair Loss Center',
  description: 'Privacy policy for Renew Hair Loss Center website.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Clean Header */}
      <section className="py-16 lg:py-24 border-b border-base-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-base-300 text-sm uppercase tracking-widest">
            Effective Date: January 1, 2023
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Overview */}
          <div className="mb-16">
            <p className="text-gray-600 leading-relaxed text-lg">
              Renew Hair Loss Center operates renewhairlosscenter.com. This policy explains how
              personal information is collected, stored, used, and shared.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Policy Updates
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The company may modify this policy at any time, alerting users by updating the
              date at the top of this page.
            </p>
          </div>

          {/* Children Under 13 */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Children Under 13
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This service does not knowingly collect information from anyone under 13. Parents
              suspecting collection should contact{' '}
              <a href="mailto:support@renewhairlosscenter.com" className="text-accent hover:underline">
                support@renewhairlosscenter.com
              </a>.
            </p>
          </div>

          {/* Information Collected */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Personal Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We may collect the following types of information:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span><strong className="text-primary">Personal Data:</strong> Name, address, email, phone, demographics</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span><strong className="text-primary">Derivative Data:</strong> IP address, browser type, access times, pages viewed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span><strong className="text-primary">Financial Data:</strong> Payment methods (processed through PayPal)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span><strong className="text-primary">Social Media Data:</strong> Information from Facebook, Instagram, LinkedIn, Twitter, Pinterest</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span><strong className="text-primary">Mobile Device Data:</strong> Device ID, model, manufacturer, location</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span><strong className="text-primary">Other Data:</strong> Contest/survey entries</span>
              </li>
            </ul>
          </div>

          {/* Use of Information */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Data supports account creation, order fulfillment, correspondence, personalized
              recommendations, targeted advertising, and fraud prevention.
            </p>
          </div>

          {/* Information Sharing */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Information Sharing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Data may be disclosed to third-party processors, advertisers, affiliates, and as
              required by law. The company may share information during corporate restructuring
              or bankruptcy.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              Cookies and Tracking
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We make use of log files which include internet protocol (IP) addresses, browser
              type, Internet Service Provider (ISP), date/time stamps, referring/exit pages,
              and number of clicks to analyze trends, administer the site, track user&apos;s movement
              around the site, and gather demographic information. Users can disable cookies
              through browser settings, though this may affect website functionality.
            </p>
          </div>

          {/* State-Specific Rights */}
          <div className="mb-14">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-base-300">
              State-Specific Rights
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span>California residents may request annual disclosure of third-party data sharing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span>EU residents have GDPR rights to access or delete personal data</span>
              </li>
            </ul>
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
