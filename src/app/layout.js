import './globals.css';
import Script from 'next/script';

export const metadata = {
    title: {
        default: 'MikannTool — Free Online Tools',
        template: '%s | MikannTool',
    },
    description: 'Free online tools for text, developers, generators, and calculators. No signup required. Fast, private, runs in your browser.',
    metadataBase: new URL('https://mikanntool.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mikanntool.com',
        siteName: 'MikannTool',
        title: 'MikannTool — Free Online Tools',
        description: 'Free online tools for text, developers, generators, and calculators.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MikannTool — Free Online Tools',
        description: 'Free online tools for text, developers, generators, and calculators.',
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <header className="site-header">
                    <div className="header-inner">
                        <a href="/" className="logo">
                            <span className="logo-icon">🍊</span>
                            <span>MikannTool</span>
                        </a>
                        <nav style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
                            <a href="/#text-tools">Text</a>
                            <a href="/#dev-tools">Developer</a>
                            <a href="/#generators">Generators</a>
                            <a href="/#calculators">Calculators</a>
                        </nav>
                    </div>
                </header>
                <main>{children}</main>
                <footer className="site-footer">
                    <p>© 2026 MikannTool. All tools run locally in your browser — your data never leaves your device.</p>
                </footer>

                {/* Adsterra monetization */}
                <Script
                    src="https://pl28593834.effectivegatecpm.com/bf/0c/41/bf0c417e61a02af02bb4fab871651c1b.js"
                    strategy="lazyOnload"
                />
            </body>
        </html>
    );
}
