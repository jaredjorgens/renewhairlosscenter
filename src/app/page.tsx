import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Hair Renewal',
    description: 'Non-surgical hair restoration using specialized techniques and products to stimulate natural hair growth.',
    href: '/services/hair-renewal',
    image: '/images/service-1.jpg',
  },
  {
    title: 'Wigs & Cranial Prosthesis',
    description: 'Custom-made medical grade hairpieces designed for individuals experiencing hair loss due to medical conditions.',
    href: '/services/wigs',
    image: '/images/wigs-1.jpg',
  },
  {
    title: 'Hair Pieces & Toppers',
    description: 'Natural-looking hair additions that blend seamlessly with your existing hair for added volume and coverage.',
    href: '/services/hair-pieces',
    image: '/images/topper-ba.jpg',
  },
  {
    title: 'Scalp Treatments',
    description: 'Therapeutic scalp cleansing and treatments to create the optimal environment for healthy hair growth.',
    href: '/services/scalp-cleanse',
    image: '/images/service-2.jpg',
  },
]

const results = [
  {
    image: '/images/testimonial-jon.png',
    name: 'Jon',
    description: '6 months of treatment',
  },
  {
    image: '/images/testimonial-james.png',
    name: 'James',
    description: 'Hair renewal client',
  },
  {
    image: '/images/testimonial-susie.png',
    name: 'Susie',
    description: 'Transformation results',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner-2.jpg"
            alt="Hair restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl text-white">
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

      {/* Results Section */}
      <section className="py-16 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Real Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the transformations our clients have experienced with our personalized hair renewal treatments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="card bg-base-200 shadow-lg overflow-hidden">
                <figure className="relative h-80">
                  <Image
                    src={result.image}
                    alt={result.name}
                    fill
                    className="object-cover object-top"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-primary">{result.name}</h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              </div>
            ))}
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
                <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-base-300 group-hover:border-accent overflow-hidden">
                  <figure className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </figure>
                  <div className="card-body">
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
            <div className="relative">
              <Image
                src="/images/ted-hero.png"
                alt="Alma TED Device"
                width={500}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              See Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to creation, watch the transformational process
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/FbpipZxPgZg"
              title="Renew Hair Loss Center"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from our clients about their experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/oYmg817IzII"
                title="Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/fc6q2gVSuMw"
                title="Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Transformations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-lg overflow-hidden">
              <figure className="relative h-64">
                <Image
                  src="/images/before-after-1.jpg"
                  alt="Before and after transformation"
                  fill
                  className="object-cover"
                />
              </figure>
            </div>
            <div className="card bg-base-100 shadow-lg overflow-hidden">
              <figure className="relative h-64">
                <Image
                  src="/images/before-after-2.jpg"
                  alt="Before and after transformation"
                  fill
                  className="object-cover"
                />
              </figure>
            </div>
            <div className="card bg-base-100 shadow-lg overflow-hidden">
              <figure className="relative h-64">
                <Image
                  src="/images/before-after-3.jpg"
                  alt="Before and after transformation"
                  fill
                  className="object-cover"
                />
              </figure>
            </div>
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
