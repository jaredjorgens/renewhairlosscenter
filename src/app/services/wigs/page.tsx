import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wigs & Cranial Prosthesis | Renew Hair Loss Center',
  description: 'Custom-made medical grade wigs and cranial prosthesis for individuals experiencing hair loss due to medical conditions. Professional fitting in Orem, Utah.',
}

export default function WigsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm breadcrumbs mb-4">
            <ul className="text-gray-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li className="text-white">Wigs & Cranial Prosthesis</li>
            </ul>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Wigs & Cranial Prosthesis</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Custom-made, medical-grade hairpieces designed for individuals who have
            lost their hair due to medical conditions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">
              What is a Cranial Prosthesis?
            </h2>
            <p className="text-gray-600 mb-6">
              A cranial prosthesis is a medical-grade hairpiece that is custom-made and
              designed specifically for individuals who have lost their hair due to a
              medical condition. Unlike standard wigs, cranial prostheses are constructed
              to meet medical specifications and provide maximum comfort for sensitive scalps.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Who Can Benefit?</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Individuals undergoing chemotherapy',
                'Those with alopecia areata or totalis',
                'People with trichotillomania',
                'Those experiencing hair loss from radiation therapy',
                'Individuals with scarring alopecia',
                'Anyone with medically-related hair loss',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-accent flex-shrink-0"
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
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-primary mb-4">Our Process</h3>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-primary">Consultation</h4>
                  <p className="text-gray-600">
                    Discuss your needs, preferences, and lifestyle to determine the
                    best options for you.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-primary">Custom Fitting</h4>
                  <p className="text-gray-600">
                    Precise measurements to ensure a comfortable, secure fit that
                    looks completely natural.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-primary">Color Matching</h4>
                  <p className="text-gray-600">
                    Expert color matching to achieve a natural look that complements
                    your skin tone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-primary">Styling & Care</h4>
                  <p className="text-gray-600">
                    Professional styling and thorough guidance on care and maintenance
                    for longevity.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-base-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Quality Options</h3>
              <p className="text-gray-600 mb-4">
                We offer both synthetic and real human hair options, each with their
                own benefits. During your consultation, we&apos;ll discuss which type
                is best suited for your lifestyle and preferences.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Schedule Your Fitting
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to schedule a private consultation and fitting appointment.
              </p>
              <Link href="/contact" className="btn btn-accent text-white btn-lg">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
