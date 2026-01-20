import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | Renew Hair Loss Center',
  description: 'Comprehensive hair loss solutions including hair renewal treatments, wigs, cranial prosthesis, hair pieces, and scalp treatments.',
}

const services = [
  {
    title: 'Hair Renewal',
    description: 'Non-surgical hair restoration services that serve as an alternative to traditional hair transplant surgery. Using specialized techniques and products to stimulate hair growth, we help you achieve thicker, fuller, healthier-looking hair.',
    features: [
      'Personalized treatment plans',
      'Science-backed approaches',
      'Ongoing progress monitoring',
      'Styling tips during growth',
    ],
    href: '/services/hair-renewal',
  },
  {
    title: 'Wigs & Cranial Prosthesis',
    description: 'Medical grade hairpieces that are custom-made and designed for individuals who have lost their hair due to medical conditions. Each piece is carefully fitted and styled to look natural.',
    features: [
      'Custom fitting and styling',
      'Real human hair options',
      'Medical-grade construction',
      'Care and maintenance guidance',
    ],
    href: '/services/wigs',
  },
  {
    title: 'Hair Pieces & Toppers',
    description: 'Natural-looking hair additions that blend seamlessly with your existing hair. Perfect for adding volume, coverage, or length while maintaining a natural appearance.',
    features: [
      'Seamless blending',
      'Various coverage options',
      'Color matching services',
      'Easy maintenance',
    ],
    href: '/services/hair-pieces',
  },
  {
    title: 'Scalp Cleanse Treatments',
    description: 'Therapeutic scalp treatments designed to create the optimal environment for healthy hair growth. Remove buildup, balance oil production, and nourish your scalp.',
    features: [
      'Deep cleansing therapy',
      'Scalp analysis',
      'Customized treatment',
      'Take-home care products',
    ],
    href: '/services/scalp-cleanse',
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive hair loss solutions tailored to your unique needs. From non-surgical
            restoration to custom hairpieces, we have options for every situation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
                <div
                  className={`bg-base-200 rounded-2xl h-64 lg:h-80 flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="text-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p>Service Image</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a consultation with our certified trichologist. We&apos;ll assess your
            situation and recommend the best treatment options for your needs.
          </p>
          <a href="tel:801-899-9183" className="btn btn-accent btn-lg text-white">
            Call (801) 899-9183
          </a>
        </div>
      </section>
    </div>
  )
}
