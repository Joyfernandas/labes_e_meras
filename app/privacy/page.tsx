import type { Metadata } from 'next';
import PolicyLayout from '@/components/PolicyLayout';

export const metadata: Metadata = {
  title: 'Privacy · Libas‑e‑Miras',
  description: 'How we collect, store and use your information.',
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      eyebrow="A short and quiet promise"
      title={
        <>
          We hold your details <em className="italic text-teal">lightly.</em>
        </>
      }
      subtitle="We collect very little. We sell nothing to anyone. Below is the long form, in plain language."
      updated="01 March 2026"
      sections={[
        {
          title: 'What we collect',
          body: (
            <ul className="list-disc list-inside space-y-1.5 marker:text-rose-400">
              <li>Your name, phone number, email and shipping address — to ship a garment.</li>
              <li>Your measurements, where given — to make a garment fit.</li>
              <li>Order history and WhatsApp conversations — to remember your preferences.</li>
              <li>Anonymous browsing analytics, via privacy-respecting tools (Plausible).</li>
            </ul>
          ),
        },
        {
          title: 'What we never collect',
          body: (
            <ul className="list-disc list-inside space-y-1.5 marker:text-rose-400">
              <li>Payment card numbers — these are handled by Razorpay / Stripe directly.</li>
              <li>Aadhaar, PAN or any government identity unless legally required.</li>
              <li>Anything we do not need to ship you a garment.</li>
            </ul>
          ),
        },
        {
          title: 'Who sees your information',
          body: (
            <>
              <p>
                Our two founders, the studio coordinator, and our shipping
                partner. That's it. We do not run paid retargeting ads and we
                do not sell, rent, or share customer data with any third party
                for marketing purposes.
              </p>
            </>
          ),
        },
        {
          title: 'Cookies & analytics',
          body: (
            <p>
              We use Plausible, a cookie-less, privacy-respecting analytics
              tool. It tells us what pages people visit; it does not identify
              you. We do not use Facebook Pixel, Google Ads or session-replay
              tools.
            </p>
          ),
        },
        {
          title: 'Your rights',
          body: (
            <p>
              You may write to <em className="italic">studio@libasemiras.com</em>{' '}
              at any time to ask what we have on file, edit it, or delete it
              entirely. We will respond within 7 working days, and we'll do as
              you ask.
            </p>
          ),
        },
      ]}
    />
  );
}
