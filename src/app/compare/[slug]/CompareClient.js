'use client';
import { compareCategories } from '@/data/comparisons';

export default function CompareClient({ params }) {
    const { slug } = params;
    const parts = (slug || '').split('-vs-');
    if (parts.length < 2) {
        return <div className="tool-page"><h1>Comparison Not Found</h1><a href="/" className="btn btn-primary">Home</a></div>;
    }
    const [aKey, bKey] = parts;

    let aItem = null, bItem = null, catLabel = '';
    for (const cat of Object.values(compareCategories)) {
        if (cat.items[aKey]) { aItem = cat.items[aKey]; catLabel = cat.label; }
        if (cat.items[bKey]) bItem = cat.items[bKey];
    }

    if (!aItem || !bItem) {
        return <div className="tool-page"><h1>Comparison Not Found</h1><a href="/" className="btn btn-primary">Home</a></div>;
    }

    // Get all comparable properties
    const allKeys = [...new Set([...Object.keys(aItem), ...Object.keys(bItem)])].filter(k => k !== 'name');
    const labelMap = {
        type: 'Type', language: 'Language', year: 'Year Released', paradigm: 'Paradigm',
        typing: 'Typing', speed: 'Performance', learning: 'Learning Curve', popularity: 'Popularity',
        useCase: 'Use Cases', ecosystem: 'Package Manager', companies: 'Used By', maintainer: 'Maintainer',
        model: 'Data Model', scaling: 'Scaling', license: 'License',
    };

    const getWinner = (key) => {
        if (['year', 'name'].includes(key)) return null;
        const a = String(aItem[key] || '');
        const b = String(bItem[key] || '');
        if (key === 'speed' || key === 'popularity') {
            const rank = { 'Very Fast': 5, 'Fast': 4, 'Medium': 3, 'Slow': 2, 'Very Slow': 1, 'Very High': 5, 'High': 4, 'Growing': 3, 'Medium': 2, 'Low': 1, 'Declining': 0 };
            return (rank[a] || 0) > (rank[b] || 0) ? 'a' : (rank[a] || 0) < (rank[b] || 0) ? 'b' : null;
        }
        if (key === 'learning') {
            const rank = { 'Very Easy': 5, 'Easy': 4, 'Medium': 3, 'Hard': 2, 'Very Hard': 1 };
            return (rank[a] || 0) > (rank[b] || 0) ? 'a' : (rank[a] || 0) < (rank[b] || 0) ? 'b' : null;
        }
        return null;
    };

    // Find related comparisons
    const allItems = {};
    for (const cat of Object.values(compareCategories)) {
        for (const [k, v] of Object.entries(cat.items)) {
            allItems[k] = v;
        }
    }
    const otherKeys = Object.keys(allItems).filter(k => k !== aKey && k !== bKey).slice(0, 8);

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb">
                <a href="/">Home</a> <span>/</span> <a href="/compare">Compare</a> <span>/</span>
                <span>{aItem.name} vs {bItem.name}</span>
            </div>

            <h1>{aItem.name} vs {bItem.name}</h1>
            <p className="subtitle">Detailed comparison of {aItem.name} and {bItem.name}. Which one is right for your project?</p>

            <div className="ad-slot" id="ad-top"></div>

            <div className="tool-area">
                {/* Summary Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ background: 'rgba(99,102,241,0.12)', borderRadius: '12px', padding: '1.2rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🅰️</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{aItem.name}</div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.3rem' }}>{aItem.type}</div>
                    </div>
                    <div style={{ background: 'rgba(244,114,182,0.12)', borderRadius: '12px', padding: '1.2rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🅱️</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>{bItem.name}</div>
                        <div style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.3rem' }}>{bItem.type}</div>
                    </div>
                </div>

                {/* Comparison Table */}
                <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>📊 Feature Comparison</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '0.6rem', borderBottom: '2px solid rgba(255,255,255,0.15)', width: '25%' }}>Feature</th>
                                <th style={{ textAlign: 'center', padding: '0.6rem', borderBottom: '2px solid rgba(99,102,241,0.4)', width: '37.5%' }}>{aItem.name}</th>
                                <th style={{ textAlign: 'center', padding: '0.6rem', borderBottom: '2px solid rgba(244,114,182,0.4)', width: '37.5%' }}>{bItem.name}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allKeys.map(key => {
                                const winner = getWinner(key);
                                return (
                                    <tr key={key}>
                                        <td style={{ padding: '0.5rem 0.6rem', borderBottom: '1px solid rgba(255,255,255,0.06)', fontWeight: 600, fontSize: '0.85rem' }}>
                                            {labelMap[key] || key}
                                        </td>
                                        <td style={{
                                            padding: '0.5rem 0.6rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                                            textAlign: 'center',
                                            fontSize: '0.85rem',
                                            background: winner === 'a' ? 'rgba(99,102,241,0.1)' : 'transparent',
                                            fontWeight: winner === 'a' ? 700 : 400,
                                        }}>
                                            {winner === 'a' && '✅ '}{String(aItem[key] || 'N/A')}
                                        </td>
                                        <td style={{
                                            padding: '0.5rem 0.6rem',
                                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                                            textAlign: 'center',
                                            fontSize: '0.85rem',
                                            background: winner === 'b' ? 'rgba(244,114,182,0.1)' : 'transparent',
                                            fontWeight: winner === 'b' ? 700 : 400,
                                        }}>
                                            {winner === 'b' && '✅ '}{String(bItem[key] || 'N/A')}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* When to use */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                    <div style={{ background: 'rgba(99,102,241,0.08)', borderRadius: '12px', padding: '1rem' }}>
                        <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>✅ Choose {aItem.name} if:</h3>
                        <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', lineHeight: 1.7 }}>
                            <li>You need {aItem.useCase}</li>
                            <li>You prefer {aItem.typing} typing</li>
                            <li>{aItem.learning} learning curve is acceptable</li>
                            {aItem.speed && <li>You need {aItem.speed.toLowerCase()} performance</li>}
                        </ul>
                    </div>
                    <div style={{ background: 'rgba(244,114,182,0.08)', borderRadius: '12px', padding: '1rem' }}>
                        <h3 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>✅ Choose {bItem.name} if:</h3>
                        <ul style={{ fontSize: '0.8rem', paddingLeft: '1.2rem', lineHeight: 1.7 }}>
                            <li>You need {bItem.useCase}</li>
                            <li>You prefer {bItem.typing} typing</li>
                            <li>{bItem.learning} learning curve is acceptable</li>
                            {bItem.speed && <li>You need {bItem.speed.toLowerCase()} performance</li>}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Related */}
            <div style={{ marginTop: '2rem' }}>
                <h2 style={{ fontSize: '1rem', marginBottom: '0.8rem' }}>🔗 Related Comparisons</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
                    <a href={`/compare/${bKey}-vs-${aKey}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(99,102,241,0.15)', borderRadius: '8px', fontSize: '0.85rem' }}>
                        {bItem.name} vs {aItem.name}
                    </a>
                    {otherKeys.map(k => (
                        <a key={k} href={`/compare/${aKey}-vs-${k}`} style={{ padding: '0.5rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.85rem' }}>
                            {aItem.name} vs {allItems[k].name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
