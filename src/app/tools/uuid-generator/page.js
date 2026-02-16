'use client';
import { useState } from 'react';

export default function UuidGenerator() {
    const [uuids, setUuids] = useState([]);
    const [count, setCount] = useState(5);
    const [toast, setToast] = useState(false);

    const generate = () => {
        const results = [];
        for (let i = 0; i < count; i++) results.push(crypto.randomUUID());
        setUuids(results);
    };

    const copy = (v) => { navigator.clipboard.writeText(v); setToast(true); setTimeout(() => setToast(false), 1500); };
    const copyAll = () => { navigator.clipboard.writeText(uuids.join('\n')); setToast(true); setTimeout(() => setToast(false), 1500); };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>UUID Generator</span></div>
            <h1>UUID Generator</h1>
            <p className="subtitle">Generate random UUIDs (v4) instantly using cryptographic randomness.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="field-group"><label>How many?</label>
                    <input type="number" min="1" max="100" value={count} onChange={(e) => setCount(Math.max(1, Math.min(100, +e.target.value)))} style={{ width: '120px' }} />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={generate}>🆔 Generate</button>
                    {uuids.length > 0 && <button className="btn btn-secondary" onClick={copyAll}>📋 Copy All</button>}
                </div>
                {uuids.length > 0 && (
                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {uuids.map((u, i) => (
                            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                <div className="result-box" style={{ flex: 1, margin: 0, minHeight: 'auto', padding: '8px 14px', fontSize: '0.85rem' }}>{u}</div>
                                <button className="btn btn-secondary" style={{ padding: '8px 12px' }} onClick={() => copy(u)}>📋</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
