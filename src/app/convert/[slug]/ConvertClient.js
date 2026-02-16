'use client';
import { useState } from 'react';
import { unitCategories, convert } from '@/data/units';

export default function ConvertClient({ params }) {
    const { slug } = params;
    const [from, to] = (slug || '').split('-to-');
    const [value, setValue] = useState('1');

    let category = null;
    let catKey = null;
    for (const [key, cat] of Object.entries(unitCategories)) {
        if (cat.units[from] && cat.units[to]) {
            category = cat;
            catKey = key;
            break;
        }
    }

    if (!category) {
        return (
            <div className="tool-page">
                <h1>Conversion Not Found</h1>
                <p>This conversion is not available.</p>
                <a href="/" className="btn btn-primary">Back to Home</a>
            </div>
        );
    }

    const fromUnit = category.units[from];
    const toUnit = category.units[to];
    const numVal = parseFloat(value) || 0;
    const result = convert(catKey, from, to, numVal);
    const sampleValues = [0.01, 0.1, 1, 2, 5, 10, 25, 50, 100, 500, 1000, 10000];
    const relatedUnits = Object.keys(category.units).filter(u => u !== from && u !== to).slice(0, 6);

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb">
                <a href="/">Home</a> <span>/</span> <a href="/convert">Convert</a> <span>/</span>
                <span>{fromUnit.plural} to {toUnit.plural}</span>
            </div>
            <h1>Convert {fromUnit.plural} to {toUnit.plural}</h1>
            <p className="subtitle">{fromUnit.name} ({fromUnit.abbr}) → {toUnit.name} ({toUnit.abbr}) converter with formula and table.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="stats-row" style={{ marginBottom: '1.5rem' }}>
                    <div className="stat" style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', opacity: 0.7 }}>{fromUnit.name} ({fromUnit.abbr})</label>
                        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} id="convert-input" style={{ width: '100%', textAlign: 'center', fontSize: '1.5rem' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', padding: '0 1rem', opacity: 0.5 }}>→</div>
                    <div className="stat" style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', opacity: 0.7 }}>{toUnit.name} ({toUnit.abbr})</label>
                        <div id="convert-result" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>
                            {result !== null ? result.toLocaleString(undefined, { maximumFractionDigits: 10 }) : 'N/A'}
                        </div>
                    </div>
                </div>
                <div style={{ background: 'rgba(99,102,241,0.08)', borderRadius: '12px', padding: '1.2rem', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>📐 Formula</h2>
                    <p style={{ margin: 0, fontFamily: 'monospace' }}>1 {fromUnit.abbr} = {convert(catKey, from, to, 1)?.toLocaleString(undefined, { maximumFractionDigits: 10 })} {toUnit.abbr}</p>
                    <p style={{ margin: 0, fontFamily: 'monospace', opacity: 0.7, marginTop: '0.3rem' }}>1 {toUnit.abbr} = {convert(catKey, to, from, 1)?.toLocaleString(undefined, { maximumFractionDigits: 10 })} {fromUnit.abbr}</p>
                </div>
                <h2 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>📊 Conversion Table</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{fromUnit.abbr}</th>
                                <th style={{ textAlign: 'right', padding: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{toUnit.abbr}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleValues.map(v => (
                                <tr key={v}>
                                    <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{v.toLocaleString()}</td>
                                    <td style={{ padding: '0.4rem 0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', textAlign: 'right', fontFamily: 'monospace' }}>{convert(catKey, from, to, v)?.toLocaleString(undefined, { maximumFractionDigits: 10 })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '1rem', marginBottom: '0.8rem' }}>🔗 Related Conversions</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
                    <a href={`/convert/${to}-to-${from}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(99,102,241,0.15)', borderRadius: '8px', fontSize: '0.85rem' }}>
                        {toUnit.plural} → {fromUnit.plural}
                    </a>
                    {relatedUnits.map(u => (
                        <a key={u} href={`/convert/${from}-to-${u}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
                            {fromUnit.plural} → {category.units[u].plural}
                        </a>
                    ))}
                    {relatedUnits.map(u => (
                        <a key={`r-${u}`} href={`/convert/${u}-to-${to}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
                            {category.units[u].plural} → {toUnit.plural}
                        </a>
                    ))}
                </div>
            </div>
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
