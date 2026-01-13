import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hair Pieces & Toppers | Renew Hair Loss Center',
  description: 'Natural-looking hair pieces and toppers that blend seamlessly with your existing hair. Professional fitting and color matching in Orem, Utah.',
}

export default function HairPiecesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm breadcrumbs mb-4">
            <ul className="text-gray-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li className="text-white">Hair Pieces & Toppers</li>
            </ul>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hair Pieces & Toppers</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Natural-looking hair additions that blend seamlessly with your existing
            hair for added volume and coverage.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Enhance Your Natural Hair
            </h2>
            <p className="text-gray-600 mb-6">
              Hair pieces and toppers are an excellent solution for those experiencing
              partial hair loss or thinning. They provide additional volume and coverage
              while working with your existing hair to create a completely natural look.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Types of Hair Pieces</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Toppers</h4>
                  <p className="text-gray-600">
                    Ideal for crown thinning or part widening. Clips securely to
                    existing hair and provides natural-looking coverage.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Integration Pieces</h4>
                  <p className="text-gray-600">
                    Your natural hair is woven through the piece for a seamless
                    blend and added volume throughout.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Extensions</h4>
                  <p className="text-gray-600">
                    Add length and fullness to your existing hair with
                    professional-grade extensions.
                  </p>
                </div>
              </div>
              <div className="card bg-base-200">
                <div className="card-body">
                  <h4 className="card-title text-primary">Custom Pieces</h4>
                  <p className="text-gray-600">
                    Specially made to address your specific coverage needs
                    and match your hair perfectly.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Benefits</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Instant volume and coverage',
                'Natural, undetectable look when properly fitted',
                'Works with your existing hair',
                'Can be styled, curled, and colored',
                'Easy to apply and remove',
                'Less commitment than full wigs',
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

            <div className="bg-accent/10 border border-accent rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Find Your Perfect Match
              </h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation to explore hair piece options and find the
                perfect solution for your needs.
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
