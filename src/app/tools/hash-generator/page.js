'use client';
import { useState } from 'react';

export default function HashGenerator() {
    const [input, setInput] = useState('');
    const [hashes, setHashes] = useState({});
    const [toast, setToast] = useState(false);

    const generate = async () => {
        const enc = new TextEncoder();
        const data = enc.encode(input);
        const results = {};
        for (const algo of ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512']) {
            const buf = await crypto.subtle.digest(algo, data);
            results[algo] = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
        }
        setHashes(results);
    };

    const copy = (v) => { navigator.clipboard.writeText(v); setToast(true); setTimeout(() => setToast(false), 1500); };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Hash Generator</span></div>
            <h1>Hash Generator</h1>
            <p className="subtitle">Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes from any text.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="field-group"><label>Input Text</label>
                    <textarea rows={4} placeholder="Enter text to hash..." value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={generate}>🛡️ Generate Hashes</button>
                </div>
                {Object.entries(hashes).map(([algo, hash]) => (
                    <div key={algo} style={{ marginTop: '12px' }}>
                        <label>{algo}</label>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <div className="result-box" style={{ flex: 1, margin: 0, minHeight: 'auto', padding: '10px 14px', fontSize: '0.8rem' }}>{hash}</div>
                            <button className="btn btn-secondary" onClick={() => copy(hash)}>📋</button>
                        </div>
                    </div>
                ))}
            </div>
            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
