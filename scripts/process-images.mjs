import sharp from 'sharp';
import { mkdir, stat, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const SRC_DIR = join(__dirname, '..', 'public');
const OUT_DIR = join(SRC_DIR, 'images');

const QUALITY = 80;
const STD_WIDTHS = [400, 800, 1200];
const HERO_WIDTHS = [400, 800, 1200, 1920];
// Wide cinematic ratio for hero backgrounds
const HERO_H_RATIO = 7 / 16;

async function getKB(p) {
  const s = await stat(p);
  return Math.round(s.size / 1024);
}

async function blurDataURL(inputPath) {
  const buf = await sharp(inputPath)
    .resize(8, 8, { fit: 'cover' })
    .webp({ quality: 20 })
    .toBuffer();
  return `data:image/webp;base64,${buf.toString('base64')}`;
}

const ENTRIES = [
  // ── HEROES ──────────────────────────────────────────────────────────────────
  {
    original: '2026-06-21.jpg',
    slug: 'hero-black-sedan-gloss-detail-north-port-fl-sansanich-car-detailing',
    category: 'hero',
    alt: 'Glossy black sedan with mirror-like paint finish after professional detailing by Sansanich Car Detailing in North Port, FL',
    pages: ['/', '/services', '/services/waxing-polishing', '/services/paint-correction', '/gallery'],
    isHero: true,
  },
  {
    original: '2026-04-09.jpg',
    slug: 'hero-lifted-black-truck-north-port-fl-sansanich-car-detailing',
    category: 'hero',
    alt: 'Lifted black Dodge Ram truck fully detailed by Sansanich Car Detailing in North Port, FL',
    pages: ['/services'],
    isHero: true,
  },

  // ── EXTERIOR AFTER ──────────────────────────────────────────────────────────
  {
    original: '2026-06-14.png',
    slug: 'exterior-detailing-silver-sedan-north-port-sansanich-car-detailing-01',
    category: 'exterior',
    alt: 'Silver Honda Civic sedan after exterior detailing by Sansanich Car Detailing in North Port, FL',
    pages: ['/services/exterior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-06-28 (1).jpg',
    slug: 'exterior-detailing-black-silverado-truck-north-port-sansanich-car-detailing-01',
    category: 'exterior',
    alt: 'Black Chevy Silverado 2500HD truck exterior detail completed at customer home in North Port, FL',
    pages: ['/services/exterior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-02 (1).jpg',
    slug: 'exterior-detailing-white-sedan-north-port-sansanich-car-detailing-01',
    category: 'exterior',
    alt: 'White Nissan Altima freshly exterior detailed at residential driveway in North Port, FL',
    pages: ['/services/exterior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-16.jpg',
    slug: 'exterior-detailing-gray-sedan-north-port-sansanich-car-detailing-02',
    category: 'exterior',
    alt: 'Gray Honda Civic exterior detail completed at customer home in North Port, FL',
    pages: ['/gallery'],
    isHero: false,
  },

  // ── MOBILE IN ACTION ────────────────────────────────────────────────────────
  {
    original: '2026-07-02 (3).jpg',
    slug: 'mobile-detailing-hand-wash-north-port-fl-sansanich-car-detailing-01',
    category: 'mobile',
    alt: 'Mobile car detailing in action — white Nissan covered in foam during hand wash at customer home in North Port, FL by Sansanich Car Detailing',
    pages: ['/about', '/services/hand-washing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-16 (4).jpg',
    slug: 'mobile-detailing-suv-foam-wash-north-port-sansanich-car-detailing-01',
    category: 'mobile',
    alt: 'Cadillac Escalade SUV being foam-washed during mobile detailing service at a North Port, FL residence by Sansanich Car Detailing',
    pages: ['/about', '/services/hand-washing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-04-02.jpg',
    slug: 'mobile-detailing-truck-foam-wash-north-port-sansanich-car-detailing-02',
    category: 'mobile',
    alt: 'Ford F-150 truck covered in foam soap suds during mobile hand wash detail in North Port, FL',
    pages: ['/gallery'],
    isHero: false,
  },

  // ── EXTERIOR CLOSE-UPS / PAINT ──────────────────────────────────────────────
  {
    original: '2026-06-21 (3).jpg',
    slug: 'paint-correction-gloss-detail-north-port-sansanich-car-detailing-01',
    category: 'exterior',
    alt: 'Deep gloss black Audi paint with mirror-like tree reflections after paint correction by Sansanich Car Detailing in North Port, FL',
    pages: ['/services/paint-correction', '/services/exterior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-06-21 (1).jpg',
    slug: 'wheel-tire-detail-truck-north-port-sansanich-car-detailing-01',
    category: 'exterior',
    alt: 'Detailed black off-road truck wheel and tire on white Ford truck, detailed by Sansanich Car Detailing in North Port, FL',
    pages: ['/services/exterior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-21 (3).jpg',
    slug: 'wheel-tire-detail-suv-north-port-sansanich-car-detailing-02',
    category: 'exterior',
    alt: 'Clean Nissan Murano wheel and Michelin tire after exterior detail in North Port, FL by Sansanich Car Detailing',
    pages: ['/gallery'],
    isHero: false,
  },

  // ── INTERIOR AFTER ──────────────────────────────────────────────────────────
  {
    original: '2026-06-14 (1).jpg',
    slug: 'interior-detailing-after-truck-black-leather-north-port-sansanich-01',
    category: 'interior',
    alt: 'Immaculate black leather interior of Ford F-250 Super Duty truck after professional interior detailing in North Port, FL by Sansanich Car Detailing',
    pages: ['/services/interior-detailing', '/services/upholstery-leather-cleaning', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-06-28 (2).jpg',
    slug: 'interior-detailing-after-truck-chevy-north-port-sansanich-02',
    category: 'interior',
    alt: 'Clean Chevrolet Silverado truck interior with black leather and wood trim after interior detailing in North Port, FL',
    pages: ['/services/interior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-06-28 (4).jpg',
    slug: 'interior-detailing-after-suv-mazda-north-port-sansanich-01',
    category: 'interior',
    alt: 'Mazda CX-5 black leather interior professionally cleaned and detailed in North Port, FL by Sansanich Car Detailing',
    pages: ['/services/interior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-06-28.jpg',
    slug: 'interior-detailing-after-suv-mazda-north-port-sansanich-02',
    category: 'interior',
    alt: 'Mazda CX-5 SUV interior seats and console after professional cleaning in North Port, FL',
    pages: ['/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-02.jpg',
    slug: 'interior-detailing-after-suv-nissan-north-port-sansanich-01',
    category: 'interior',
    alt: 'Nissan Murano SUV interior professionally detailed with clean dark leather in North Port, FL',
    pages: ['/services/interior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-02 (5).jpg',
    slug: 'interior-detailing-after-sedan-nissan-north-port-sansanich-02',
    category: 'interior',
    alt: 'Clean Nissan sedan interior after full interior detail in North Port, FL by Sansanich Car Detailing',
    pages: ['/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-16 (1).jpg',
    slug: 'interior-detailing-after-luxury-suv-audi-north-port-sansanich-01',
    category: 'interior',
    alt: 'Audi Q5 luxury SUV interior with leather seats professionally detailed in North Port, FL by Sansanich Car Detailing',
    pages: ['/services/interior-detailing', '/services/upholstery-leather-cleaning', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-16 (2).jpg',
    slug: 'interior-detailing-after-sedan-honda-north-port-sansanich-01',
    category: 'interior',
    alt: 'Honda Civic interior with clean black dash and seats after detailing in North Port, FL by Sansanich Car Detailing',
    pages: ['/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-21 (2).jpg',
    slug: 'interior-detailing-after-suv-beige-leather-north-port-sansanich-01',
    category: 'interior',
    alt: 'Nissan Murano beige tan leather interior cleaned and conditioned in North Port, FL by Sansanich Car Detailing',
    pages: ['/services/upholstery-leather-cleaning', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-06-14.jpg',
    slug: 'interior-detailing-after-sedan-honda-north-port-sansanich-02',
    category: 'interior',
    alt: 'Honda Civic dashboard and steering wheel cleaned and detailed in North Port, FL by Sansanich Car Detailing',
    pages: ['/gallery'],
    isHero: false,
  },

  // ── INTERIOR BEFORE ─────────────────────────────────────────────────────────
  {
    original: '2026-07-02 (4).jpg',
    slug: 'interior-detailing-before-truck-north-port-sansanich-car-detailing-01',
    category: 'interior-before',
    alt: 'Dodge Ram truck interior before professional cleaning — worn seats and dirty dash before interior detailing service',
    pages: ['/gallery'],
    isHero: false,
  },

  // ── INTERIOR CLOSE-UPS ──────────────────────────────────────────────────────
  {
    original: '2026-07-16 (3).jpg',
    slug: 'interior-carpet-clean-detail-north-port-sansanich-car-detailing-01',
    category: 'interior',
    alt: 'Vacuumed and shampooed rear carpet and floor mats in SUV after interior detailing in North Port, FL',
    pages: ['/services/interior-detailing', '/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-02 (2).jpg',
    slug: 'interior-door-sill-detail-north-port-sansanich-car-detailing-01',
    category: 'interior',
    alt: 'Clean door sill and carpeted floor of truck after interior detailing in North Port, FL by Sansanich Car Detailing',
    pages: ['/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-21 (1).jpg',
    slug: 'interior-cargo-area-clean-suv-north-port-sansanich-car-detailing-01',
    category: 'interior',
    alt: 'Clean cargo area and rear trunk of SUV after interior detailing in North Port, FL by Sansanich Car Detailing',
    pages: ['/gallery'],
    isHero: false,
  },
  {
    original: '2026-07-21.jpg',
    slug: 'interior-cargo-trunk-clean-suv-north-port-sansanich-car-detailing-02',
    category: 'interior',
    alt: 'Spotless cargo trunk and rear interior of Nissan Murano SUV after full interior detail in North Port, FL',
    pages: ['/services/interior-detailing', '/gallery'],
    isHero: false,
  },
];

// ── MAIN ────────────────────────────────────────────────────────────────────
await mkdir(OUT_DIR, { recursive: true });

const manifest = [];
let totalBefore = 0;
let totalAfter = 0;

console.log(`\nProcessing ${ENTRIES.length} images → ${OUT_DIR}\n`);

for (const entry of ENTRIES) {
  const inputPath = join(SRC_DIR, entry.original);
  const origKB = await getKB(inputPath);
  totalBefore += origKB;

  const meta = await sharp(inputPath).metadata();
  const blur = await blurDataURL(inputPath);

  const widths = entry.isHero ? HERO_WIDTHS : STD_WIDTHS;
  const variants = [];

  console.log(`▶ ${entry.original} (${origKB} KB, ${meta.width}×${meta.height})`);

  for (const w of widths) {
    const outName = `${entry.slug}-${w}w.webp`;
    const outPath = join(OUT_DIR, outName);

    let pipeline = sharp(inputPath);

    if (entry.isHero) {
      const h = Math.round(w * HERO_H_RATIO);
      pipeline = pipeline.resize({ width: w, height: h, fit: 'cover', position: 'centre' });
    } else {
      pipeline = pipeline.resize({ width: w, withoutEnlargement: true });
    }

    try {
      await pipeline
        .webp({ quality: QUALITY })
        .withMetadata({
          exif: {
            IFD0: {
              Copyright: 'Sansanich Car Detailing',
              ImageDescription: entry.alt.slice(0, 255),
              Artist: 'Sansanich Car Detailing — North Port, FL 34286',
            },
          },
        })
        .toFile(outPath);
    } catch {
      // Fallback: write without custom EXIF if metadata embedding fails
      await pipeline.webp({ quality: QUALITY }).toFile(outPath);
    }

    const outKB = await getKB(outPath);
    totalAfter += outKB;
    variants.push({ width: w, file: `/images/${outName}`, sizeKB: outKB });
    console.log(`  → ${outName}: ${origKB} KB → ${outKB} KB (${Math.round((1 - outKB / origKB) * 100)}% smaller)`);
  }

  manifest.push({
    original: entry.original,
    slug: entry.slug,
    category: entry.category,
    alt: entry.alt,
    pages: entry.pages,
    isHero: entry.isHero,
    blurDataURL: blur,
    variants,
  });
}

await writeFile(
  join(SRC_DIR, 'image-manifest.json'),
  JSON.stringify(manifest, null, 2),
);

console.log(`\n✅ Done — ${ENTRIES.length} images processed`);
console.log(`   Total before: ${Math.round(totalBefore / 1024 * 100) / 100} MB`);
console.log(`   Total after:  ${Math.round(totalAfter / 1024 * 100) / 100} MB`);
console.log(`   Saved:        ${Math.round((1 - totalAfter / totalBefore) * 100)}%`);
console.log(`   Manifest:     public/image-manifest.json`);
