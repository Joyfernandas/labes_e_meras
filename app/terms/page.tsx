import type { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Terms of Service · Libas‑e‑Miras',
  description: 'The terms governing your use of the Libas‑e‑Miras website and services.',
};

export default function TermsPage() {
  return (
    <PolicyLayout
      eyebrow="The terms, kept brief"
      title={
        <>
          A small handshake, <em className="italic text-teal">in writing.</em>
        </>
      }
      subtitle="By using libasemiras.com or commissioning a piece, you agree to the terms below. They are written to be reasonable, in both directions."
      updated="01 March 2026"
      sections={[
        {
          title: 'About Libas‑e‑Miras',
          body: (
            <p>
              Libas‑e‑Miras is a private boutique atelier based in New Delhi,
              India. Our website, libasemiras.com, is operated by the
              proprietor at the address listed on the contact page.
            </p>
          ),
        },
        {
          title: 'Orders & confirmation',
          body: (
            <p>
              An order is confirmed only after payment of the booking deposit
              and our written acceptance over WhatsApp or email. We reserve
              the right to refuse or refund an order — within 48 hours — if
              the requested piece, fabric or timeline is not feasible.
            </p>
          ),
        },
        {
          title: 'Pricing & payment',
          body: (
            <>
              <p>
                All prices are listed in Indian Rupees and include applicable
                GST. International orders are payable in INR; your card issuer
                will perform the conversion.
              </p>
              <p>
                For made-to-measure and bespoke pieces, a 50% non-refundable
                deposit secures your slot in the production calendar. The
                balance is due before dispatch.
              </p>
            </>
          ),
        },
        {
          title: 'The handmade nature of our work',
          body: (
            <p>
              Every piece is hand-woven, hand-printed or hand-embroidered.
              Slight variations in colour, weave and motif are inherent and
              not defects. Photographs are representative; actual pieces may
              differ subtly. This is, in our view, the point.
            </p>
          ),
        },
        {
          title: 'Intellectual property',
          body: (
            <p>
              All photography, copy, motifs and design language on this
              website are the property of Libas‑e‑Miras. Personal,
              non-commercial sharing is welcome. Redistribution or commercial
              reuse requires our written consent.
            </p>
          ),
        },
        {
          title: 'Limitation of liability',
          body: (
            <p>
              Our liability for any single transaction is limited to the value
              paid for that transaction. We are not liable for indirect or
              consequential losses, except where required by law.
            </p>
          ),
        },
        {
          title: 'Governing law',
          body: (
            <p>
              These terms are governed by the laws of India. Any disputes are
              subject to the exclusive jurisdiction of the courts of New
              Delhi.
            </p>
          ),
        },
      ]}
    />
  );
}
