'use client';
import { unitCategories, convert } from '@/data/units';

export default function HowManyClient({ params }) {
    const { slug } = params;
    const match = (slug || '').match(/^(.+)-in-(.+)$/);
    if (!match) return <div className="tool-page"><h1>Not Found</h1><a href="/" className="btn btn-primary">Home</a></div>;

    const [, fromKey, toKey] = match;
    let category = null, catKey = null;
    for (const [key, cat] of Object.entries(unitCategories)) {
        if (cat.units[fromKey] && cat.units[toKey]) { category = cat; catKey = key; break; }
    }
    if (!category) return <div className="tool-page"><h1>Not Found</h1><a href="/" className="btn btn-primary">Home</a></div>;

    const fromUnit = category.units[fromKey];
    const toUnit = category.units[toKey];
    const answer = convert(catKey, toKey, fromKey, 1);
    const sampleValues = [0.5, 1, 2, 3, 5, 10, 20, 50, 100];
    const related = Object.keys(category.units).filter(u => u !== fromKey && u !== toKey).slice(0, 6);

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb">
                <a href="/">Home</a> <span>/</span> <a href="/how-many">How Many</a> <span>/</span>
                <span>{fromUnit.plural} in {toUnit.plural}</span>
            </div>

            <h1>How Many {fromUnit.plural} in a {toUnit.name}?</h1>

            <div className="ad-slot" id="ad-top"></div>

            <div className="tool-area">
                {/* Big Answer */}
                <div style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(244,114,182,0.1))', borderRadius: '16px', padding: '2rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.5rem' }}>There are</div>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1.2 }}>
                        {answer?.toLocaleString(undefined, { maximumFractionDigits: 8 })}
                    </div>
                    <div style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>
                        {fromUnit.plural.toLowerCase()} in one {toUnit.name.toLowerCase()}
                    </div>
                </div>

                {/* Formula */}
                <div style={{ background: 'rgba(99,102,241,0.08)', borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>📐 Quick Formula</h2>
                    <p style={{ fontFamily: 'monospace', margin: 0 }}>1 {toUnit.abbr} = {answer?.toLocaleString(undefined, { maximumFractionDigits: 8 })} {fromUnit.abbr}</p>
                    <p style={{ fontFamily: 'monospace', margin: '0.3rem 0 0 0', opacity: 0.7 }}>1 {fromUnit.abbr} = {convert(catKey, fromKey, toKey, 1)?.toLocaleString(undefined, { maximumFractionDigits: 8 })} {toUnit.abbr}</p>
                </div>

                {/* Table */}
                <h2 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>📊 Reference Table</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{toUnit.plural}</th>
                            <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{fromUnit.plural}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sampleValues.map(v => (
                            <tr key={v}>
                                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{v}</td>
                                <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', textAlign: 'right', fontFamily: 'monospace' }}>
                                    {convert(catKey, toKey, fromKey, v)?.toLocaleString(undefined, { maximumFractionDigits: 6 })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Related */}
            <div style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '1rem', marginBottom: '0.8rem' }}>🔗 Related Questions</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.5rem' }}>
                    <a href={`/how-many/${toKey}-in-${fromKey}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(99,102,241,0.15)', borderRadius: '8px', fontSize: '0.85rem' }}>
                        How many {toUnit.plural} in a {fromUnit.name}?
                    </a>
                    {related.map(u => (
                        <a key={u} href={`/how-many/${fromKey}-in-${u}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
                            How many {fromUnit.plural} in a {category.units[u].name}?
                        </a>
                    ))}
                    {related.map(u => (
                        <a key={`r-${u}`} href={`/how-many/${u}-in-${toKey}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
                            How many {category.units[u].plural} in a {toUnit.name}?
                        </a>
                    ))}
                </div>
            </div>

            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
