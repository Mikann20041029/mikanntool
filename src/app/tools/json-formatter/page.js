'use client';
import { useState } from 'react';

export default function JsonFormatter() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [toast, setToast] = useState(false);

    const format = () => {
        try {
            const parsed = JSON.parse(input);
            setResult(JSON.stringify(parsed, null, 2));
            setError('');
        } catch (e) {
            setError(`❌ Invalid JSON: ${e.message}`);
            setResult('');
        }
    };

    const minify = () => {
        try {
            const parsed = JSON.parse(input);
            setResult(JSON.stringify(parsed));
            setError('');
        } catch (e) {
            setError(`❌ Invalid JSON: ${e.message}`);
            setResult('');
        }
    };

    const copy = () => {
        navigator.clipboard.writeText(result);
        setToast(true);
        setTimeout(() => setToast(false), 1500);
    };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb">
                <a href="/">Home</a> <span>/</span> <span>JSON Formatter</span>
            </div>
            <h1>JSON Formatter & Validator</h1>
            <p className="subtitle">Format, beautify, minify, and validate JSON data instantly.</p>

            <div className="ad-slot" id="ad-top"></div>

            <div className="tool-area">
                <div className="field-group">
                    <label>Paste JSON</label>
                    <textarea
                        rows={10}
                        placeholder='{"key": "value", "number": 42}'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace", fontSize: '0.85rem' }}
                    />
                </div>

                <div className="btn-row">
                    <button className="btn btn-primary" onClick={format}>✨ Format</button>
                    <button className="btn btn-secondary" onClick={minify}>🗜️ Minify</button>
                    <button className="btn btn-secondary" onClick={() => { setInput(''); setResult(''); setError(''); }}>Clear</button>
                </div>

                {error && <div style={{ color: 'var(--red)', marginTop: '12px', fontWeight: 600 }}>{error}</div>}

                {result && (
                    <>
                        <label>Result</label>
                        <div className="result-box">{result}</div>
                        <div className="btn-row">
                            <button className="btn btn-primary" onClick={copy}>📋 Copy</button>
                        </div>
                    </>
                )}
            </div>

            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
