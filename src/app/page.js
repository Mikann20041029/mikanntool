const tools = {
    text: {
        id: 'text-tools',
        label: '📝 Text Tools',
        items: [
            { slug: 'word-counter', icon: '🔢', title: 'Word Counter', desc: 'Count words, characters, sentences, and paragraphs instantly.' },
            { slug: 'case-converter', icon: '🔤', title: 'Case Converter', desc: 'Convert text to uppercase, lowercase, title case, and more.' },
            { slug: 'lorem-ipsum', icon: '📄', title: 'Lorem Ipsum Generator', desc: 'Generate placeholder text for design and development.' },
            { slug: 'duplicate-remover', icon: '🧹', title: 'Duplicate Line Remover', desc: 'Remove duplicate lines from your text instantly.' },
            { slug: 'text-diff', icon: '📊', title: 'Text Diff Checker', desc: 'Compare two texts and highlight differences.' },
        ],
    },
    dev: {
        id: 'dev-tools',
        label: '⚙️ Developer Tools',
        items: [
            { slug: 'json-formatter', icon: '{ }', title: 'JSON Formatter', desc: 'Format, validate, and beautify JSON data.' },
            { slug: 'base64', icon: '🔐', title: 'Base64 Encoder / Decoder', desc: 'Encode or decode Base64 strings instantly.' },
            { slug: 'url-encoder', icon: '🔗', title: 'URL Encoder / Decoder', desc: 'Encode or decode URL components.' },
            { slug: 'hash-generator', icon: '🛡️', title: 'Hash Generator', desc: 'Generate MD5, SHA-1, SHA-256 hashes from text.' },
            { slug: 'uuid-generator', icon: '🆔', title: 'UUID Generator', desc: 'Generate random UUIDs (v4) instantly.' },
        ],
    },
    generators: {
        id: 'generators',
        label: '🎲 Generators',
        items: [
            { slug: 'password-generator', icon: '🔑', title: 'Password Generator', desc: 'Create strong, random passwords with custom rules.' },
            { slug: 'qr-generator', icon: '📱', title: 'QR Code Generator', desc: 'Create QR codes from any text or URL.' },
            { slug: 'color-picker', icon: '🎨', title: 'Color Picker & Converter', desc: 'Pick colors and convert between HEX, RGB, HSL.' },
        ],
    },
    calculators: {
        id: 'calculators',
        label: '🧮 Calculators',
        items: [
            { slug: 'percentage-calc', icon: '💯', title: 'Percentage Calculator', desc: 'Calculate percentages, increases, decreases easily.' },
            { slug: 'timestamp-converter', icon: '⏰', title: 'Unix Timestamp Converter', desc: 'Convert between Unix timestamps and human dates.' },
        ],
    },
};

export default function Home() {
    return (
        <>
            <section className="hero">
                <h1>Free Online <span>Tools</span> — No Signup</h1>
                <p>Fast, private, browser-based tools for everyone. Your data never leaves your device.</p>
            </section>

            <div className="categories">
                {Object.values(tools).map((cat) => (
                    <section key={cat.id} id={cat.id} className="category-section">
                        <h2 className="category-title">{cat.label}</h2>
                        <div className="tools-grid">
                            {cat.items.map((tool) => (
                                <a key={tool.slug} href={`/tools/${tool.slug}/`} className="tool-card">
                                    <div className="tool-card-icon">{tool.icon}</div>
                                    <h3>{tool.title}</h3>
                                    <p>{tool.desc}</p>
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
