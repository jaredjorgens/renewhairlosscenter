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
          <p className="text-gray-200">Effective Date: January 1, 2023</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <h2>Overview</h2>
          <p>
            Renew Hair Loss Center operates renewhairlosscenter.com. This policy explains how
            personal information is collected, stored, used, and shared.
          </p>

          <h2>Policy Updates</h2>
          <p>
            The company may modify this policy at any time, alerting users by updating the
            date at the top of this page.
          </p>

          <h2>Children Under 13</h2>
          <p>
            This service does not knowingly collect information from anyone under 13. Parents
            suspecting collection should contact support@renewhairlosscenter.com.
          </p>

          <h2>Information Collected</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, address, email, phone, demographics</li>
            <li><strong>Derivative Data:</strong> IP address, browser type, access times, pages viewed</li>
            <li><strong>Financial Data:</strong> Payment methods (processed through PayPal)</li>
            <li><strong>Social Media Data:</strong> Information from Facebook, Instagram, LinkedIn, Twitter, Pinterest</li>
            <li><strong>Mobile Device Data:</strong> Device ID, model, manufacturer, location</li>
            <li><strong>Other Data:</strong> Contest/survey entries</li>
          </ul>

          <h2>Use of Information</h2>
          <p>
            Data supports account creation, order fulfillment, correspondence, personalized
            recommendations, targeted advertising, and fraud prevention.
          </p>

          <h2>Information Sharing</h2>
          <p>
            Data may be disclosed to third-party processors, advertisers, affiliates, and as
            required by law. The company may share information during corporate restructuring
            or bankruptcy.
          </p>

          <h2>Cookies and Tracking</h2>
          <p>
            We make use of log files which include internet protocol (IP) addresses, browser
            type, Internet Service Provider (ISP), date/time stamps, referring/exit pages,
            and number of clicks to analyze trends, administer the site, track user&apos;s movement
            around the site, and gather demographic information. Users can disable cookies
            through browser settings, though this may affect website functionality.
          </p>

          <h2>State-Specific Rights</h2>
          <ul>
            <li>California residents may request annual disclosure of third-party data sharing</li>
            <li>EU residents have GDPR rights to access or delete personal data</li>
          </ul>

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
