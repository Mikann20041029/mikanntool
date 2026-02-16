const BASE = 'https://mikanntool.com';

const tools = [
    'word-counter', 'case-converter', 'lorem-ipsum', 'duplicate-remover', 'text-diff',
    'json-formatter', 'base64', 'url-encoder', 'hash-generator', 'uuid-generator',
    'password-generator', 'qr-generator', 'color-picker',
    'percentage-calc', 'timestamp-converter',
];

export default function sitemap() {
    const now = new Date().toISOString();

    const pages = [
        { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        ...tools.map((slug) => ({
            url: `${BASE}/tools/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
    ];

    return pages;
}
