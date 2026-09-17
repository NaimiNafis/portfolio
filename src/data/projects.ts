export interface Link {
  label: string;
  href: string;
}

export interface Project {
  /** Image is read from src/assets/projects/<slug>.(png|jpg|webp); without it the card shows a name tile. */
  slug: string;
  title: string;
  tag: string;
  links: Link[];
  description: string;
  meta: string;
  color: string;
}

export const projects: Project[] = [
  {
    slug: 'mightclick',
    title: 'MightClick',
    tag: 'Work',
    links: [
      { label: 'Live', href: 'https://mightclick.ai/' },
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/mightclickai/dielkjboapplhgedebdnekamgklihfnh',
      },
    ],
    description:
      'AI assistant Chrome extension. Joined mid-migration and owned the path to public release: MD3 panel rewrite, production Azure/Stripe setup, store listing, and a CI pipeline from zero (ruff, pytest, strict mypy, staged deploys).',
    meta: 'DevTech.Pro · 2026',
    color: '#4B4FC4',
  },
  {
    slug: 'cooriroo',
    title: 'Cooriroo',
    tag: 'Work',
    links: [{ label: 'Live', href: 'https://cooriroo.com/' }],
    description:
      'Fleet-management SaaS in Go and Next.js. Shipped a rebuilt trip wizard, a destinations heat map on a new Go endpoint, live-fleet map/list interaction, and one aggregated endpoint replacing per-row fetches. Now building its AI agent.',
    meta: 'DevTech.Pro · 2026',
    color: '#2F6B58',
  },
  {
    slug: 'kamogawa-commons',
    title: 'Kamogawa Commons',
    tag: 'Class',
    links: [
      { label: 'Demo', href: 'https://kamocomo.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/NaimiNafis/kamocomo' },
    ],
    description:
      'Bilingual web app teaching the unwritten etiquette of the Kamogawa riverbank, reached through QR codes on duck figures. Vote limits, auto-hide and geofenced stamps live in Postgres behind RLS, triggers and RPCs, so the client cannot bypass them.',
    meta: 'Case study · 2026',
    color: '#34688C',
  },
  {
    slug: 'lyrika',
    title: 'Lyrika',
    tag: 'Hackathon 3rd / 24 teams',
    links: [{ label: 'GitHub', href: 'https://github.com/NaimiNafis/Lyrika' }],
    description:
      'Browser extension that recognises the song playing in any tab and shows lyrics, translations and similar songs, using ACRCloud, Genius and Gemini with a Flask backend.',
    meta: 'Giiku CAMP Vol. 6 · 2025',
    color: '#A8416A',
  },
  {
    slug: 'qrious',
    title: 'QRious',
    tag: 'Hackathon',
    links: [{ label: 'GitHub', href: 'https://github.com/NaimiNafis/QRious' }],
    description:
      'Flutter QR scanner that checks URLs for safety entirely on-device, so it works offline and keeps data private.',
    meta: 'KIT-ISEL · 2025',
    color: '#8C5A14',
  },
  {
    slug: 'readoku',
    title: 'Readoku',
    tag: 'Hackathon',
    links: [{ label: 'GitHub', href: 'https://github.com/NaimiNafis/readoku' }],
    description:
      'Browser extension that translates selected Japanese text in place, with caching and batching that cut translation time by 30%.',
    meta: 'TrackJob · 2025',
    color: '#6E54A8',
  },
];
