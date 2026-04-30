import type { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Returns & Exchanges · Libas‑e‑Miras',
  description: 'Our returns, exchanges, alterations and lifetime repair policy.',
};

export default function ReturnsPage() {
  return (
    <PolicyLayout
      eyebrow="Mended, exchanged, returned"
      title={
        <>
          On the long <em className="italic text-teal">life</em> of a garment.
        </>
      }
      subtitle="Most of our customers don't return their pieces — they alter them, mend them, hand them down. But here are the rules, plainly written."
      updated="01 March 2026"
      sections={[
        {
          title: 'Free first alteration',
          body: (
            <p>
              Every piece comes with one complimentary alteration. Send the
              garment back within 30 days of arrival and we'll re-fit, re-hem,
              or re-sleeve at no charge. Return shipping is on us, in India.
            </p>
          ),
        },
        {
          title: 'Returns',
          body: (
            <>
              <p>
                We accept returns on ready-to-ship pieces within 7 days of
                delivery, in unworn condition with all tags and the dust-bag
                intact. Refunds are processed to the original payment method
                within 7–10 working days of receipt.
              </p>
              <p>
                Made-to-measure, bespoke and sale items are not eligible for
                return. We are happy to alter them indefinitely.
              </p>
            </>
          ),
        },
        {
          title: 'Exchanges',
          body: (
            <p>
              Exchanges (size, colour or piece) are accepted within 14 days of
              delivery on ready-to-ship items. Reach out on WhatsApp; we'll
              arrange a reverse pickup, send the new piece, and refund or
              charge the difference.
            </p>
          ),
        },
        {
          title: 'Lifetime repairs',
          body: (
            <>
              <p>
                Every Libas‑e‑Miras garment carries a lifetime repair promise.
                A torn pleat, a loose mirror, a fading dye — send it back, and
                we'll fix it, free of charge, for as long as you wear it.
              </p>
              <p>
                For repairs after the first year, only return shipping is
                charged. We will write back with a delivery estimate within 48
                hours.
              </p>
            </>
          ),
        },
        {
          title: 'How to begin',
          body: (
            <>
              <p>
                Message us on WhatsApp with your order number and a photo of
                the piece. We'll send you a reverse-pickup link or our address,
                whichever is faster, and walk you through the rest.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
