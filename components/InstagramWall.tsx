import { Instagram } from 'lucide-react';
import { SITE } from '@/lib/site';

const POSTS = [
  { src: '/images/models/yellow-saree.jpg', alt: 'A festive saree, captured close', tilt: '-rotate-1' },
  { src: '/images/models/mehndi-marigolds.jpg', alt: 'Hands marked in mehndi, holding marigolds', tilt: 'rotate-2' },
  { src: '/images/models/sangeet-pair.jpg', alt: 'A sangeet evening, gifts in hand', tilt: '-rotate-2' },
  { src: '/images/models/diwali-trio.jpg', alt: 'A trio dressed for Diwali', tilt: 'rotate-1' },
  { src: '/images/models/green-lehenga-quiet.jpg', alt: 'A quiet moment in green and yellow', tilt: '-rotate-1' },
  { src: '/images/models/festive-trio.jpg', alt: 'Three friends, mid-laugh', tilt: 'rotate-2' },
];

export default function InstagramWall() {
  return (
    <section className="bg-ivory py-20 sm:py-24 md:py-32 lg:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal">
          <div>
            <p className="text-[10px] tracking-widest-3 uppercase text-teal/70 mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-teal/60" />
              Studio Diaries
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.96] text-charcoal tracking-tight">
              Behind the loom,<br />
              <em className="italic text-teal">on Instagram.</em>
            </h2>
          </div>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest-2 uppercase text-charcoal/85 link-underline self-start md:self-end"
          >
            <Instagram size={14} strokeWidth={1.4} />
            @{SITE.instagram}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {POSTS.map((post, i) => (
            <a
              key={i}
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden bg-sand reveal transition-transform duration-500 hover:!rotate-0 hover:scale-105 ${post.tilt}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/35 transition-colors flex items-center justify-center">
                <Instagram
                  size={24}
                  strokeWidth={1.2}
                  className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
