import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scalp Cleanse Treatments | Renew Hair Loss Center',
  description: 'Professional scalp cleansing and treatments to create the optimal environment for healthy hair growth. Trichology services in Orem, Utah.',
}

export default function ScalpCleansePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm breadcrumbs mb-4">
            <ul className="text-gray-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li className="text-white">Scalp Cleanse</li>
            </ul>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Scalp Cleanse Treatments</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Therapeutic scalp treatments designed to create the optimal environment
            for healthy hair growth.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Healthy Scalp, Healthy Hair
            </h2>
            <p className="text-gray-600 mb-6">
              The foundation of healthy hair growth starts with a healthy scalp. Our
              scalp cleanse treatments remove buildup, balance oil production, and
              create the ideal environment for your hair to thrive.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">What We Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Product Buildup</h4>
                  <p className="text-gray-600">
                    Remove residue from styling products, dry shampoos, and
                    other hair care products that can clog follicles.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Excess Oil</h4>
                  <p className="text-gray-600">
                    Balance sebum production to prevent oily scalp conditions
                    that can contribute to hair loss.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Dry Scalp</h4>
                  <p className="text-gray-600">
                    Hydrate and nourish dry, flaky scalp conditions to
                    reduce irritation and promote healthy growth.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Poor Circulation</h4>
                  <p className="text-gray-600">
                    Massage techniques stimulate blood flow to the scalp,
                    bringing nutrients to hair follicles.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Treatment Process</h3>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-primary">Scalp Analysis</h4>
                  <p className="text-gray-600">
                    Detailed examination of your scalp condition to identify
                    specific concerns and tailor treatment accordingly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-primary">Deep Cleansing</h4>
                  <p className="text-gray-600">
                    Professional-grade cleansing to remove buildup and
                    prepare the scalp for treatment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-primary">Treatment Application</h4>
                  <p className="text-gray-600">
                    Customized treatment products applied to address your
                    specific scalp concerns.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-primary">Home Care Plan</h4>
                  <p className="text-gray-600">
                    Recommendations for products and routines to maintain
                    scalp health between treatments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Give Your Scalp the Care It Deserves
              </h3>
              <p className="text-gray-600 mb-6">
                Book a scalp treatment session and start your journey to healthier hair.
              </p>
              <Link href="/contact" className="btn btn-accent text-white btn-lg">
                Book Treatment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
