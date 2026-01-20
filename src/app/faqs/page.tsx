import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs | Renew Hair Loss Center',
  description: 'Frequently asked questions about hair loss treatments, wigs, cranial prosthesis, and our services at Renew Hair Loss Center in Orem, Utah.',
}

const faqs = [
  {
    question: 'What causes hair loss?',
    answer: 'Hair loss can be caused by many factors including genetics (androgenetic alopecia), hormonal changes, medical conditions, medications, stress, and nutritional deficiencies. During your consultation, we\'ll help identify potential causes and recommend appropriate treatments.',
  },
  {
    question: 'What is a trichologist?',
    answer: 'A trichologist is a specialist who studies and treats conditions affecting the hair and scalp. They have specialized training in the science of hair and can diagnose hair loss conditions, recommend treatments, and help you understand your options.',
  },
  {
    question: 'How much do treatments cost?',
    answer: 'Treatment costs vary depending on the type and extent of your hair loss, as well as the solutions recommended. We encourage you to schedule a consultation where we can assess your situation and provide accurate pricing for your personalized treatment plan.',
  },
  {
    question: 'What is the difference between a wig and a cranial prosthesis?',
    answer: 'A cranial prosthesis is a medical-grade hairpiece custom-made for individuals who have lost hair due to medical conditions. It\'s designed to be more comfortable for sensitive scalps and may be covered by insurance. Regular wigs are designed for fashion or convenience and are typically not covered by insurance.',
  },
  {
    question: 'Does insurance cover wigs or cranial prostheses?',
    answer: 'Many insurance plans do cover cranial prostheses for medical hair loss. Coverage varies by plan, so we recommend contacting your insurance provider directly. We can provide documentation to support your claim if needed.',
  },
  {
    question: 'What is Alma TED and how does it work?',
    answer: 'Alma TED is a non-invasive hair restoration treatment that uses acoustic sound waves to enhance the delivery of hair growth formulations into the scalp. It\'s painless, requires no needles, and has no downtime.',
  },
  {
    question: 'How long before I see results from treatments?',
    answer: 'Results vary depending on the treatment and individual factors. Some clients notice improvements within a few months, while others may take longer. During your consultation, we\'ll set realistic expectations based on your specific situation.',
  },
  {
    question: 'Can men and women both receive treatment?',
    answer: 'Yes! Hair loss affects both men and women, and we offer solutions for everyone. Our treatments are customized to address the specific patterns and causes of hair loss that differ between genders.',
  },
  {
    question: 'How do I care for a wig or hair piece?',
    answer: 'Proper care is essential for longevity. We provide detailed care instructions with every purchase, including washing techniques, storage recommendations, and styling tips. We also offer maintenance services to keep your piece looking its best.',
  },
  {
    question: 'What should I expect at my first appointment?',
    answer: 'Your first appointment is a consultation where we\'ll discuss your hair loss history, examine your scalp, and talk about your goals. We\'ll explain your options, answer questions, and if you\'re ready, we can begin creating your treatment plan.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we understand that hair restoration is an investment. We offer financing options to help make treatments more accessible. Ask about payment plans during your consultation.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling us at (801) 899-9183, emailing support@renewhairlosscenter.com, or using the contact form on our website. We\'ll get back to you promptly to confirm your appointment.',
  },
]

export default function FAQsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Find answers to common questions about hair loss, our treatments, and
            what to expect when you visit Renew Hair Loss Center.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                <div className="collapse-title text-lg font-semibold text-primary">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600 pt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-base-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re here to help. Contact us directly and we&apos;ll be happy to answer
            any questions you have about our services.
          </p>
          <a href="tel:801-899-9183" className="btn btn-accent btn-lg text-white">
            Call (801) 899-9183
          </a>
        </div>
      </section>
    </div>
  )
}
