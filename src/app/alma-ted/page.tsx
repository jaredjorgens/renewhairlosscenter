import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alma TED Hair Restoration | Renew Hair Loss Center',
  description: 'Discover Alma TED - a non-invasive hair restoration technology using acoustic sound waves. No needles, no downtime. Available in Orem, Utah.',
}

export default function AlmaTedPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/ted-logo.png"
                alt="Alma TED Logo"
                width={200}
                height={40}
                className="mb-6"
              />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Alma TED Hair Restoration
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                A new reliable way to restore hair – without the hassle of daily
                treatments or the discomfort of needles.
              </p>
              <Link href="/contact" className="btn btn-accent btn-lg text-white">
                Learn If TED Is Right For You
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/ted-hero.png"
                alt="Alma TED Device"
                width={400}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Alma TED */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">What is Alma TED?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Alma TED (TransEpidermal Delivery) is a cutting-edge, non-invasive hair
            restoration treatment that uses acoustic sound waves combined with air
            pressure to enhance the delivery of topical hair growth formulations
            directly to the scalp.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Unlike traditional hair restoration methods that may involve needles,
            surgery, or lengthy daily treatments, Alma TED offers a comfortable,
            effective alternative with minimal to no downtime.
          </p>

          <div className="bg-base-200 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Acoustic Sound Waves</h4>
                  <p className="text-gray-600">
                    The TED device emits acoustic sound waves that create temporary
                    microchannels in the outer layer of the scalp.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Enhanced Delivery</h4>
                  <p className="text-gray-600">
                    These microchannels allow hair growth formulations to penetrate
                    more deeply and effectively than topical application alone.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Stimulated Growth</h4>
                  <p className="text-gray-600">
                    The increased absorption of growth factors helps stimulate hair
                    follicles and promote healthier, thicker hair growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/images/ted-tech.png"
              alt="Alma TED Technology"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Clinical Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100 shadow-lg overflow-hidden">
              <figure className="relative h-72">
                <Image
                  src="/images/ted-case-1.png"
                  alt="TED Case Study 1"
                  fill
                  className="object-contain"
                />
              </figure>
            </div>
            <div className="card bg-base-100 shadow-lg overflow-hidden">
              <figure className="relative h-72">
                <Image
                  src="/images/ted-case-2.png"
                  alt="TED Case Study 2"
                  fill
                  className="object-contain"
                />
              </figure>
            </div>
            <div className="card bg-base-100 shadow-lg overflow-hidden">
              <figure className="relative h-72">
                <Image
                  src="/images/ted-case-3.png"
                  alt="TED Case Study 3"
                  fill
                  className="object-contain"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Benefits of Alma TED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="text-accent mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Non-Invasive</h3>
                <p className="text-gray-600">
                  No needles, no injections, no surgery. The treatment is completely
                  non-invasive and comfortable.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="text-accent mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">No Downtime</h3>
                <p className="text-gray-600">
                  Resume your normal activities immediately after treatment.
                  No recovery period needed.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="text-accent mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Comfortable</h3>
                <p className="text-gray-600">
                  Patients describe the treatment as relaxing, similar to a
                  scalp massage with a warm sensation.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="text-accent mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">For Everyone</h3>
                <p className="text-gray-600">
                  Suitable for both men and women experiencing various types
                  of hair loss or thinning.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="text-accent mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Clinically Proven</h3>
                <p className="text-gray-600">
                  Backed by clinical studies demonstrating improved hair density
                  and thickness.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="text-accent mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="card-title text-primary">Quick Sessions</h3>
                <p className="text-gray-600">
                  Treatment sessions typically last about 20-30 minutes,
                  easily fitting into your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Is Alma TED Right for You?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Alma TED may be an excellent option if you:
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Are experiencing early to moderate hair thinning',
              'Want a non-invasive alternative to hair transplant surgery',
              'Are looking for a treatment with no downtime',
              'Have been disappointed with topical treatments alone',
              'Want to enhance results from other hair restoration treatments',
              'Prefer to avoid needles and injections',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-accent flex-shrink-0 mt-0.5"
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
          <p className="text-gray-600">
            The best way to determine if Alma TED is right for you is through a
            personal consultation. We&apos;ll assess your hair loss, discuss your goals,
            and create a customized treatment plan.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience the Alma TED Difference
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Schedule a consultation to learn if Alma TED is the right solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-accent btn-lg text-white">
              Book Consultation
            </Link>
            <a href="tel:801-899-9183" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary">
              Call (801) 899-9183
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
