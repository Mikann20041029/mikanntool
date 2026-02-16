'use client';
import { useState } from 'react';

export default function PasswordGenerator() {
    const [length, setLength] = useState(16);
    const [upper, setUpper] = useState(true);
    const [lower, setLower] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [passwords, setPasswords] = useState([]);
    const [toast, setToast] = useState(false);

    const generate = () => {
        let chars = '';
        if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) chars += '0123456789';
        if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';

        const results = [];
        for (let i = 0; i < 5; i++) {
            let pw = '';
            const arr = new Uint32Array(length);
            crypto.getRandomValues(arr);
            for (let j = 0; j < length; j++) pw += chars[arr[j] % chars.length];
            results.push(pw);
        }
        setPasswords(results);
    };

    const copy = (pw) => { navigator.clipboard.writeText(pw); setToast(true); setTimeout(() => setToast(false), 1500); };

    const strength = length >= 16 && upper && lower && numbers && symbols ? 'Strong 🟢' :
        length >= 12 && (upper || lower) && numbers ? 'Good 🟡' : 'Weak 🔴';

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Password Generator</span></div>
            <h1>Password Generator</h1>
            <p className="subtitle">Generate strong, cryptographically random passwords with custom rules.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="field-group">
                    <label>Length: {length}</label>
                    <input type="range" min="4" max="64" value={length} onChange={(e) => setLength(+e.target.value)}
                        style={{ width: '100%', accentColor: 'var(--accent)' }} />
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {[['Uppercase A-Z', upper, setUpper], ['Lowercase a-z', lower, setLower],
                    ['Numbers 0-9', numbers, setNumbers], ['Symbols !@#$', symbols, setSymbols]].map(([label, val, fn]) => (
                        <label key={label} style={{ display: 'flex', gap: '6px', cursor: 'pointer', color: 'var(--text-primary)' }}>
                            <input type="checkbox" checked={val} onChange={() => fn(!val)} /> {label}
                        </label>
                    ))}
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={generate}>🔑 Generate Passwords</button>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '8px' }}>Strength: {strength}</div>

                {passwords.length > 0 && (
                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {passwords.map((pw, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div className="result-box" style={{ flex: 1, margin: 0, minHeight: 'auto', padding: '10px 14px', fontSize: '0.85rem' }}>{pw}</div>
                                <button className="btn btn-secondary" onClick={() => copy(pw)} style={{ whiteSpace: 'nowrap' }}>📋</button>
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
