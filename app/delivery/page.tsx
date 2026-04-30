import type { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Shipping · Libas‑e‑Miras',
  description: 'Domestic and international shipping policy.',
};

export default function DeliveryPage() {
  return (
    <PolicyLayout
      eyebrow="The fine print, kindly"
      title={
        <>
          Shipping & <em className="italic text-teal">arrival.</em>
        </>
      }
      subtitle="Most pieces are made-to-order. Below are the timelines, the carriers, and what to expect when the parcel finally lands at your door."
      updated="01 March 2026"
      sections={[
        {
          title: 'Production timelines',
          body: (
            <>
              <p>
                Every garment is cut and sewn after you place the order. Standard
                ready-to-ship pieces leave the studio in 7–10 working days.
                Bridal lehengas and fully-embroidered Anarkalis can take up to
                eight weeks — we'll always confirm a delivery date over WhatsApp
                before you commit.
              </p>
              <p>
                Made-to-measure pieces add roughly 5–7 days to the timeline, for
                pattern-making and a final fitting check.
              </p>
            </>
          ),
        },
        {
          title: 'Within India',
          body: (
            <>
              <p>
                We ship via Blue Dart and DTDC, fully insured. Domestic shipping
                takes 3–6 working days from dispatch.
              </p>
              <ul className="list-disc list-inside space-y-1.5 marker:text-rose-400">
                <li>Complimentary on orders above ₹4,999</li>
                <li>₹250 flat below ₹4,999</li>
                <li>All parcels are signature-required</li>
              </ul>
            </>
          ),
        },
        {
          title: 'International',
          body: (
            <>
              <p>
                We ship worldwide via DHL Express. Transit takes 5–9 working
                days from dispatch.
              </p>
              <p>
                Shipping is calculated by weight and destination — we'll share a
                quote on WhatsApp before processing the order. Customs duties
                and import taxes, where applicable, are paid by the recipient
                on delivery.
              </p>
            </>
          ),
        },
        {
          title: 'Tracking & care in transit',
          body: (
            <>
              <p>
                You'll receive a tracking link the day your parcel leaves the
                studio. Each piece is folded into a hand-stitched silk
                dust-bag, wrapped in mulmul cotton, and packed in a recycled
                kraft box.
              </p>
              <p>
                If your parcel looks damaged on arrival, please refuse delivery
                or photograph it before opening — and write to us within 48
                hours.
              </p>
            </>
          ),
        },
        {
          title: 'Festive season',
          body: (
            <p>
              In the weeks before Karva Chauth, Diwali and the wedding season
              (October–February), production timelines may extend by 7–10 days.
              We will always tell you, plainly, before taking a deposit.
            </p>
          ),
        },
      ]}
    />
  );
}
