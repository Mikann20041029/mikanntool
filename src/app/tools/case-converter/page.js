'use client';
import { useState } from 'react';

export default function CaseConverter() {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const [toast, setToast] = useState(false);

    const convert = (fn) => {
        setResult(fn(text));
    };

    const copy = () => {
        navigator.clipboard.writeText(result);
        setToast(true);
        setTimeout(() => setToast(false), 1500);
    };

    const toTitleCase = (s) => s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
    const toSentenceCase = (s) => s.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
    const toAlternating = (s) => s.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
    const toInverse = (s) => s.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb">
                <a href="/">Home</a> <span>/</span> <span>Case Converter</span>
            </div>
            <h1>Case Converter</h1>
            <p className="subtitle">Convert text between uppercase, lowercase, title case, sentence case, and more.</p>

            <div className="ad-slot" id="ad-top"></div>

            <div className="tool-area">
                <div className="field-group">
                    <label>Input Text</label>
                    <textarea
                        rows={6}
                        placeholder="Type or paste your text here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className="btn-row">
                    <button className="btn btn-primary" onClick={() => convert(s => s.toUpperCase())}>UPPER CASE</button>
                    <button className="btn btn-primary" onClick={() => convert(s => s.toLowerCase())}>lower case</button>
                    <button className="btn btn-primary" onClick={() => convert(toTitleCase)}>Title Case</button>
                    <button className="btn btn-primary" onClick={() => convert(toSentenceCase)}>Sentence case</button>
                    <button className="btn btn-secondary" onClick={() => convert(toAlternating)}>aLtErNaTiNg</button>
                    <button className="btn btn-secondary" onClick={() => convert(toInverse)}>InVeRsE</button>
                </div>

                {result && (
                    <>
                        <label>Result</label>
                        <div className="result-box">{result}</div>
                        <div className="btn-row">
                            <button className="btn btn-primary" onClick={copy}>📋 Copy</button>
                            <button className="btn btn-secondary" onClick={() => { setText(result); setResult(''); }}>↩ Use as Input</button>
                        </div>
                    </>
                )}
            </div>

            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
