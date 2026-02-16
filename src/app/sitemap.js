import { getAllConversionPairs } from '@/data/units';
import { getAllComparePairs } from '@/data/comparisons';
import { getAllHowManyPairs } from '@/data/howmany';

const BASE = 'https://mikanntool.vercel.app';

const staticTools = [
    'word-counter', 'case-converter', 'lorem-ipsum', 'duplicate-remover', 'text-diff',
    'json-formatter', 'base64', 'url-encoder', 'hash-generator', 'uuid-generator',
    'password-generator', 'qr-generator', 'color-picker', 'percentage-calc', 'timestamp-converter',
];

export default function sitemap() {
    const now = new Date().toISOString();
    const pages = [];

    // Home
    pages.push({ url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 });

    // Static tools
    for (const slug of staticTools) {
        pages.push({ url: `${BASE}/tools/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 });
    }

    // Unit conversions (top 5000)
    const conversions = getAllConversionPairs();
    for (const p of conversions.slice(0, 5000)) {
        pages.push({ url: `${BASE}/convert/${p.from}-to-${p.to}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 });
    }

    // How many (top 5000)
    const howmany = getAllHowManyPairs();
    for (const p of howmany.slice(0, 5000)) {
        pages.push({ url: `${BASE}/how-many/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 });
    }

    // Comparisons (all)
    const comparisons = getAllComparePairs();
    for (const p of comparisons) {
        pages.push({ url: `${BASE}/compare/${p.a}-vs-${p.b}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 });
    }

    return pages;
}
