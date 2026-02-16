'use client';
import { useState } from 'react';

export default function DuplicateRemover() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [removed, setRemoved] = useState(0);
    const [toast, setToast] = useState(false);

    const removeDuplicates = () => {
        const lines = input.split('\n');
        const seen = new Set();
        const unique = [];
        lines.forEach(line => {
            if (!seen.has(line)) { seen.add(line); unique.push(line); }
        });
        setResult(unique.join('\n'));
        setRemoved(lines.length - unique.length);
    };

    const removeEmpty = () => {
        const lines = input.split('\n').filter(l => l.trim());
        setResult(lines.join('\n'));
        setRemoved(input.split('\n').length - lines.length);
    };

    const copy = () => { navigator.clipboard.writeText(result); setToast(true); setTimeout(() => setToast(false), 1500); };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Duplicate Remover</span></div>
            <h1>Duplicate Line Remover</h1>
            <p className="subtitle">Remove duplicate or empty lines from your text instantly.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="field-group"><label>Input (one item per line)</label>
                    <textarea rows={8} placeholder="Paste your text with duplicate lines..." value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={removeDuplicates}>🧹 Remove Duplicates</button>
                    <button className="btn btn-secondary" onClick={removeEmpty}>Remove Empty Lines</button>
                </div>
                {result && (<>
                    <div style={{ color: 'var(--green)', fontWeight: 600, margin: '12px 0' }}>✅ Removed {removed} lines</div>
                    <label>Result</label><div className="result-box" style={{ whiteSpace: 'pre-wrap' }}>{result}</div>
                    <div className="btn-row"><button className="btn btn-primary" onClick={copy}>📋 Copy</button></div>
                </>)}
            </div>
            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
