import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hair Renewal Treatment | Renew Hair Loss Center',
  description: 'Non-surgical hair restoration services using specialized techniques and products to stimulate natural hair growth. Certified trichologist in Orem, Utah.',
}

export default function HairRenewalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm breadcrumbs mb-4">
            <ul className="text-gray-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li className="text-white">Hair Renewal</li>
            </ul>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hair Renewal Treatment</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Non-surgical hair restoration that stimulates natural growth for thicker,
            fuller, healthier-looking hair.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">
              A Scientific Approach to Hair Restoration
            </h2>
            <p className="text-gray-600 mb-6">
              Our hair renewal services offer a non-surgical alternative to traditional hair
              transplant surgery. Using specialized techniques and products backed by scientific
              research, we help stimulate your natural hair growth process.
            </p>
            <p className="text-gray-600 mb-8">
              What sets us apart is our personalized approach. Jamie, our Certified Trichologist,
              combines her expertise in hair science with cosmetology credentials, allowing her
              to address hair growth possibilities while also teaching you styling techniques
              to make your hair appear fuller during the growth process.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Initial Consultation</h4>
                  <p className="text-gray-600">
                    Meet with Jamie to discuss your hair loss history, goals, and
                    determine the best treatment direction for your specific situation.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Customized Plan</h4>
                  <p className="text-gray-600">
                    Receive a personalized treatment plan tailored to your type and
                    stage of hair loss, with realistic expectations and timelines.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Ongoing Treatment</h4>
                  <p className="text-gray-600">
                    Regular sessions using specialized techniques and products to
                    stimulate and support healthy hair growth.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Progress Monitoring</h4>
                  <p className="text-gray-600">
                    Track your results over time and adjust your treatment plan
                    as needed for optimal outcomes.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Pricing</h3>
            <p className="text-gray-600 mb-8">
              Costs vary depending on the extent and type of hair loss. We recommend
              scheduling an initial consultation to determine the best treatment
              direction and receive accurate pricing for your specific situation.
            </p>

            <div className="bg-accent/10 border border-accent rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ready to Start Your Hair Renewal Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation to discuss your options with our certified trichologist.
              </p>
              <Link href="/contact" className="btn btn-accent text-white btn-lg">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
