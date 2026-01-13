import Link from 'next/link'

const services = [
  {
    title: 'Hair Renewal',
    description: 'Non-surgical hair restoration using specialized techniques and products to stimulate natural hair growth.',
    href: '/services/hair-renewal',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Wigs & Cranial Prosthesis',
    description: 'Custom-made medical grade hairpieces designed for individuals experiencing hair loss due to medical conditions.',
    href: '/services/wigs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Hair Pieces & Toppers',
    description: 'Natural-looking hair additions that blend seamlessly with your existing hair for added volume and coverage.',
    href: '/services/hair-pieces',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Scalp Treatments',
    description: 'Therapeutic scalp cleansing and treatments to create the optimal environment for healthy hair growth.',
    href: '/services/scalp-cleanse',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "Jamie changed my life. After years of struggling with hair loss, I finally found someone who understood and had real solutions. I feel like myself again.",
    author: "Sarah M.",
    location: "Orem, UT",
  },
  {
    quote: "The personalized approach at Renew is unlike anything else. They took the time to understand my specific situation and created a treatment plan that actually works.",
    author: "Michelle K.",
    location: "Provo, UT",
  },
  {
    quote: "I was skeptical at first, but the results speak for themselves. The team is professional, caring, and truly experts in their field.",
    author: "Jennifer L.",
    location: "Salt Lake City, UT",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Restore Your Hair.
              <span className="text-accent"> Renew Your Confidence.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8">
              Personalized hair loss solutions backed by science. Our certified trichologist
              provides customized treatments to help you look and feel your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-accent btn-lg text-white">
                Schedule Consultation
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose Renew?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There is no one-size-fits-all approach to hair renewal. We provide
              personalized solutions tailored to your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Certified Expertise</h3>
                <p className="text-gray-600">
                  Our trichologist is certified and trained in the latest hair restoration techniques and science.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Personalized Approach</h3>
                <p className="text-gray-600">
                  Every treatment plan is customized to your specific type and stage of hair loss.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="text-accent mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Science-Backed Results</h3>
                <p className="text-gray-600">
                  We use proven treatments and technologies that are backed by scientific research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive hair loss solutions for every situation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-base-300 group-hover:border-accent">
                  <div className="card-body">
                    <div className="text-accent mb-4">{service.icon}</div>
                    <h3 className="card-title text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    <div className="card-actions justify-end mt-4">
                      <span className="text-accent font-medium text-sm group-hover:underline">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Alma TED Feature */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-accent text-white mb-4">Featured Technology</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Alma TED Hair Restoration
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                A new reliable way to restore hair – without the hassle of daily treatments.
              </p>
              <p className="text-gray-300 mb-8">
                The Alma TED system uses acoustic sound waves to enhance the delivery of
                topical hair growth treatments, providing a non-invasive solution for
                hair restoration with minimal downtime.
              </p>
              <Link href="/alma-ted" className="btn btn-accent btn-lg text-white">
                Discover Alma TED
              </Link>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Non-invasive treatment with no needles</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comfortable procedure with no downtime</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Suitable for both men and women</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Clinically proven technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="text-accent mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Hair Renewal Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a consultation with our certified trichologist to discuss
            your personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-lg bg-white text-accent hover:bg-gray-100">
              Book Consultation
            </Link>
            <a href="tel:801-899-9183" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-accent">
              Call (801) 899-9183
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
