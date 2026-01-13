import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Renew Hair Loss Center',
  description: 'Meet Jamie, our certified trichologist. Learn about our mission to provide evidence-based hair loss solutions in Orem, Utah.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Renew</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Our mission is to provide evidence-based education and practical solutions
            for individuals experiencing hair loss.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Renew Hair Loss Center was founded by Jamie after witnessing countless clients
              struggle with hair loss and the overwhelming array of unproven solutions
              available in the market. Frustrated by empty promises and marketing hype,
              she pursued certification as a Trichologist and received specialized training
              in hair pieces and toppers.
            </p>
            <p className="mb-6">
              This education enabled her to distinguish between treatments backed by
              scientific research and those that were simply marketing narratives.
              Today, Renew Hair Loss Center stands as a trusted resource for anyone
              seeking honest, effective solutions for hair loss.
            </p>
            <p>
              We believe that everyone deserves access to professional expertise and
              compassionate care when dealing with the physical and emotional challenges
              of hair loss. Our evidence-based approach ensures that every recommendation
              we make is grounded in science and tailored to your individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet the Team</h2>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-48 h-48 bg-base-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Jamie</h3>
                  <p className="text-accent font-medium mb-4">Certified Trichologist & Cosmetologist</p>
                  <p className="text-gray-600 mb-4">
                    Jamie brings a unique combination of expertise to Renew Hair Loss Center.
                    As a certified Trichologist, she understands the science of hair and scalp
                    health. As a licensed Cosmetologist, she can also teach styling techniques
                    and tricks to make your hair appear fuller during the growth process.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Her dual credentials allow her to address both the medical and aesthetic
                    aspects of hair loss, providing comprehensive care that goes beyond
                    traditional approaches.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="badge badge-primary badge-outline">Certified Trichologist</span>
                    <span className="badge badge-primary badge-outline">Licensed Cosmetologist</span>
                    <span className="badge badge-primary badge-outline">Hair Piece Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <div className="text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Evidence-Based</h3>
                <p className="text-gray-600">
                  We prioritize solutions grounded in scientific research rather than
                  marketing narratives.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <div className="text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Education First</h3>
                <p className="text-gray-600">
                  We help clients navigate complex decisions through informed guidance
                  rather than pressure-based sales.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <div className="text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Compassionate Care</h3>
                <p className="text-gray-600">
                  We understand the emotional challenges of hair loss and provide
                  supportive, judgment-free care.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <div className="text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Personalized Approach</h3>
                <p className="text-gray-600">
                  Every treatment plan is customized to your unique situation,
                  goals, and lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a consultation and let us help you find the right solution.
          </p>
          <Link href="/contact" className="btn btn-lg bg-white text-accent hover:bg-gray-100">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
