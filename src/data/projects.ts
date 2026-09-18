export interface Link {
  label: string;
  href: string;
}

export interface Project {
  /** Media is read from src/assets/projects/<slug>.mp4 (looping demo) or <slug>.(png|jpg|webp) (screenshot, also the video poster); without either the card shows a name tile. */
  slug: string;
  title: string;
  tag: string;
  links: Link[];
  description: string;
  meta: string;
  color: string;
  /** How the media is dressed: inside a desktop browser window, inside a phone body, or bare. */
  frame?: 'browser' | 'phone';
}

export const projects: Project[] = [
  {
    slug: 'mightclick',
    title: 'MightClick',
    tag: 'Shipped',
    links: [
      { label: 'Live', href: 'https://mightclick.ai/' },
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/mightclickai/dielkjboapplhgedebdnekamgklihfnh',
      },
    ],
    description:
      'Led an AI Chrome extension from a half-migrated backend to public launch, rebuilding the in-page panel and setting up live payments and CI. 37 installs, up to 4 people using it at once.',
    meta: 'DevTech.Pro · 2026',
    color: '#4B4FC4',
    frame: 'browser',
  },
  {
    slug: 'cooriroo',
    title: 'Cooriroo',
    tag: 'Shipped',
    links: [{ label: 'Live', href: 'https://cooriroo.com/' }],
    description:
      'Built the trip-creation wizard, destinations heat map and live-fleet map for a fleet-management SaaS, across the Go backend and Next.js frontend. All three shipped to production in one release.',
    meta: 'DevTech.Pro · 2026',
    color: '#2F6B58',
    frame: 'browser',
  },
  {
    slug: 'kamocomo',
    title: 'KamoComo',
    tag: 'Live',
    links: [
      { label: 'Demo', href: 'https://kamocomo.vercel.app' },
      {
        label: 'Case study',
        href: 'https://docs.google.com/presentation/d/1uBzjtzy4lVQJ-pYMo_XD9Un__vCdnv1kZeoFxwDLTag/mobilepresent?slide=id.g3f94c9a7a84_0_0',
      },
      { label: 'GitHub', href: 'https://github.com/NaimiNafis/kamocomo' },
    ],
    description:
      "Led engineering and design with five Japanese students on a bilingual app that teaches the unwritten etiquette of Kyoto's Kamogawa riverbank, reached through QR codes on duck figures.",
    meta: 'KIT course · 2026',
    color: '#34688C',
    frame: 'phone',
  },
  {
    slug: 'lyrika',
    title: 'Lyrika',
    tag: 'Hackathon 3rd / 24 teams',
    links: [{ label: 'GitHub', href: 'https://github.com/NaimiNafis/Lyrika' }],
    description:
      'Built a browser extension that names the song playing in any tab and shows its lyrics, translations and similar songs. Placed 3rd of 24 teams at Giiku CAMP Vol. 6.',
    meta: 'Giiku CAMP Vol. 6 · 2025',
    color: '#A8416A',
  },
  {
    slug: 'qrious',
    title: 'QRious',
    tag: 'Hackathon',
    links: [{ label: 'GitHub', href: 'https://github.com/NaimiNafis/QRious' }],
    description:
      'Built a Flutter QR scanner that checks links for safety entirely on-device, so it works offline and never sends your data anywhere.',
    meta: 'KIT-ISEL · 2025',
    color: '#8C5A14',
    frame: 'phone',
  },
  {
    slug: 'readoku',
    title: 'Readoku',
    tag: 'Hackathon',
    links: [{ label: 'GitHub', href: 'https://github.com/NaimiNafis/readoku' }],
    description:
      'Built a browser extension that translates selected Japanese in place, so learners never switch tabs. Caching and batching made it 30% faster than the first prototype.',
    meta: 'TrackJob · 2025',
    color: '#6E54A8',
  },
];
