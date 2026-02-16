'use client';
import { unitCategories, countTotalPairs } from '@/data/units';
import { compareCategories, countComparePairs } from '@/data/comparisons';

const tools = [
    { name: 'Word Counter', href: '/tools/word-counter', icon: '📝', desc: 'Count words, characters, sentences' },
    { name: 'JSON Formatter', href: '/tools/json-formatter', icon: '{ }', desc: 'Format & validate JSON' },
    { name: 'Password Generator', href: '/tools/password-generator', icon: '🔑', desc: 'Generate secure passwords' },
    { name: 'Color Picker', href: '/tools/color-picker', icon: '🎨', desc: 'Pick & convert colors' },
    { name: 'QR Generator', href: '/tools/qr-generator', icon: '📱', desc: 'Generate QR codes' },
    { name: 'Hash Generator', href: '/tools/hash-generator', icon: '🔒', desc: 'SHA-1, SHA-256, SHA-512' },
    { name: 'Base64', href: '/tools/base64', icon: '🔄', desc: 'Encode & decode Base64' },
    { name: 'UUID Generator', href: '/tools/uuid-generator', icon: '🆔', desc: 'Generate UUID v4' },
    { name: 'Text Diff', href: '/tools/text-diff', icon: '📄', desc: 'Compare text differences' },
    { name: 'Case Converter', href: '/tools/case-converter', icon: 'Aa', desc: 'Convert text case' },
    { name: 'URL Encoder', href: '/tools/url-encoder', icon: '🔗', desc: 'Encode & decode URLs' },
    { name: 'Lorem Ipsum', href: '/tools/lorem-ipsum', icon: '📜', desc: 'Generate placeholder text' },
    { name: 'Timestamp', href: '/tools/timestamp-converter', icon: '🕐', desc: 'Unix timestamp converter' },
    { name: 'Percentage', href: '/tools/percentage-calc', icon: '%', desc: 'Percentage calculator' },
    { name: 'Duplicates', href: '/tools/duplicate-remover', icon: '🗑️', desc: 'Remove duplicate lines' },
];

// Popular conversion examples
const popularConversions = [
    { from: 'kilometer', to: 'mile', label: 'Kilometers → Miles' },
    { from: 'pound', to: 'kilogram', label: 'Pounds → Kilograms' },
    { from: 'celsius', to: 'fahrenheit', label: 'Celsius → Fahrenheit' },
    { from: 'gallon_us', to: 'liter', label: 'Gallons → Liters' },
    { from: 'inch', to: 'centimeter', label: 'Inches → Centimeters' },
    { from: 'mile', to: 'kilometer', label: 'Miles → Kilometers' },
    { from: 'foot', to: 'meter', label: 'Feet → Meters' },
    { from: 'kilowatt_hour', to: 'joule', label: 'kWh → Joules' },
];

const popularComparisons = [
    { a: 'python', b: 'javascript', label: 'Python vs JavaScript' },
    { a: 'react', b: 'vue', label: 'React vs Vue' },
    { a: 'mysql', b: 'postgresql', label: 'MySQL vs PostgreSQL' },
    { a: 'rust', b: 'go', label: 'Rust vs Go' },
    { a: 'typescript', b: 'javascript', label: 'TypeScript vs JavaScript' },
    { a: 'nextjs', b: 'nuxt', label: 'Next.js vs Nuxt.js' },
    { a: 'mongodb', b: 'postgresql', label: 'MongoDB vs PostgreSQL' },
    { a: 'flutter', b: 'react_native', label: 'Flutter vs React Native' },
];

const popularHowMany = [
    { slug: 'centimeter-in-inch', label: 'How many cm in an inch?' },
    { slug: 'meter-in-mile', label: 'How many meters in a mile?' },
    { slug: 'gram-in-ounce', label: 'How many grams in an ounce?' },
    { slug: 'milliliter-in-cup', label: 'How many mL in a cup?' },
    { slug: 'minute-in-day', label: 'How many minutes in a day?' },
    { slug: 'second-in-year', label: 'How many seconds in a year?' },
    { slug: 'inch-in-foot', label: 'How many inches in a foot?' },
    { slug: 'centimeter-in-meter', label: 'How many cm in a meter?' },
];

export default function Home() {
    const totalConversions = countTotalPairs();
    const totalComparisons = countComparePairs();
    const totalPages = totalConversions * 2 + totalComparisons + tools.length;

    return (
        <div className="home-page">
            {/* Hero */}
            <section style={{ textAlign: 'center', padding: '3rem 1rem 2rem' }}>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
                    <span style={{ background: 'linear-gradient(135deg, var(--accent), #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {totalPages.toLocaleString()}+
                    </span>{' '}
                    Free Online Tools
                </h1>
                <p style={{ fontSize: '1.1rem', opacity: 0.7, maxWidth: 600, margin: '0 auto' }}>
                    Unit converters, tech comparisons, developer tools, and calculators. Fast, free, no signup.
                </p>
            </section>

            <div className="ad-slot" id="ad-top"></div>

            {/* Unit Converters */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1rem 2rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>📏 Unit Converters <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>({totalConversions.toLocaleString()} pairs)</span></h2>
                <div className="card-grid">
                    {popularConversions.map(c => (
                        <a key={`${c.from}-${c.to}`} href={`/convert/${c.from}-to-${c.to}`} className="tool-card">
                            <div className="card-icon">🔄</div>
                            <div className="card-title">{c.label}</div>
                        </a>
                    ))}
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <h3 style={{ fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.5rem' }}>All Categories:</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {Object.entries(unitCategories).map(([key, cat]) => (
                            <span key={key} style={{ padding: '0.3rem 0.8rem', background: 'rgba(99,102,241,0.1)', borderRadius: '20px', fontSize: '0.8rem' }}>
                                {cat.icon} {cat.label} ({Object.keys(cat.units).length} units)
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Many */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1rem 2rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>❓ How Many X in Y? <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>({totalConversions.toLocaleString()} answers)</span></h2>
                <div className="card-grid">
                    {popularHowMany.map(h => (
                        <a key={h.slug} href={`/how-many/${h.slug}`} className="tool-card">
                            <div className="card-icon">🔢</div>
                            <div className="card-title">{h.label}</div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Tech Comparisons */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1rem 2rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>⚔️ Tech Comparisons <span style={{ fontSize: '0.8rem', opacity: 0.5 }}> ({totalComparisons.toLocaleString()} pairs)</span></h2>
                <div className="card-grid">
                    {popularComparisons.map(c => (
                        <a key={`${c.a}-${c.b}`} href={`/compare/${c.a}-vs-${c.b}`} className="tool-card">
                            <div className="card-icon">⚡</div>
                            <div className="card-title">{c.label}</div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Developer Tools */}
            <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1rem 2rem' }}>
                <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>🛠️ Developer Tools <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>({tools.length})</span></h2>
                <div className="card-grid">
                    {tools.map(t => (
                        <a key={t.href} href={t.href} className="tool-card">
                            <div className="card-icon">{t.icon}</div>
                            <div className="card-title">{t.name}</div>
                            <div className="card-desc">{t.desc}</div>
                        </a>
                    ))}
                </div>
            </section>

            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
