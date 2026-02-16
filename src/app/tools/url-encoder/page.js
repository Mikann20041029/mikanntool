'use client';
import { useState } from 'react';

export default function UrlEncoder() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [toast, setToast] = useState(false);

    const encode = () => setResult(encodeURIComponent(input));
    const decode = () => { try { setResult(decodeURIComponent(input)); } catch { setResult('Error: Invalid encoded URL'); } };
    const copy = () => { navigator.clipboard.writeText(result); setToast(true); setTimeout(() => setToast(false), 1500); };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>URL Encoder</span></div>
            <h1>URL Encoder / Decoder</h1>
            <p className="subtitle">Encode or decode URL components for safe use in web addresses.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="field-group"><label>Input</label>
                    <textarea rows={4} placeholder="Enter URL or encoded string..." value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={encode}>🔗 Encode</button>
                    <button className="btn btn-primary" onClick={decode}>🔓 Decode</button>
                    <button className="btn btn-secondary" onClick={() => { setInput(''); setResult(''); }}>Clear</button>
                </div>
                {result && (<><label>Result</label><div className="result-box">{result}</div>
                    <div className="btn-row"><button className="btn btn-primary" onClick={copy}>📋 Copy</button></div></>)}
            </div>
            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
