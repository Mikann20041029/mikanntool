'use client';
import { useState } from 'react';

export default function LoremIpsum() {
    const [paragraphs, setParagraphs] = useState(3);
    const [result, setResult] = useState('');
    const [toast, setToast] = useState(false);

    const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum', 'ac', 'accumsan', 'lacus', 'vel', 'facilisis', 'volutpat', 'dictum', 'at', 'augue', 'eget', 'arcu', 'nunc', 'mattis', 'enim', 'faucibus', 'ornare', 'suspendisse', 'interdum', 'tristique', 'senectus', 'netus', 'malesuada', 'fames', 'turpis', 'egestas', 'maecenas', 'pharetra', 'convallis', 'posuere', 'morbi', 'leo', 'urna', 'molestie', 'viverra', 'pellentesque', 'habitant', 'massa'];

    const generate = () => {
        const paras = [];
        for (let p = 0; p < paragraphs; p++) {
            const len = 40 + Math.floor(Math.random() * 40);
            const sentences = [];
            let i = 0;
            while (i < len) {
                const slen = 8 + Math.floor(Math.random() * 12);
                const s = [];
                for (let j = 0; j < slen && i < len; j++, i++) {
                    s.push(words[Math.floor(Math.random() * words.length)]);
                }
                s[0] = s[0].charAt(0).toUpperCase() + s[0].slice(1);
                sentences.push(s.join(' ') + '.');
            }
            paras.push(sentences.join(' '));
        }
        setResult(paras.join('\n\n'));
    };

    const copy = () => { navigator.clipboard.writeText(result); setToast(true); setTimeout(() => setToast(false), 1500); };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Lorem Ipsum</span></div>
            <h1>Lorem Ipsum Generator</h1>
            <p className="subtitle">Generate placeholder text for design and development projects.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="field-group"><label>Paragraphs: {paragraphs}</label>
                    <input type="range" min="1" max="20" value={paragraphs} onChange={(e) => setParagraphs(+e.target.value)} style={{ width: '100%', accentColor: 'var(--accent)' }} />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={generate}>📄 Generate</button>
                    {result && <button className="btn btn-secondary" onClick={copy}>📋 Copy</button>}
                </div>
                {result && <div className="result-box" style={{ whiteSpace: 'pre-wrap', wordBreak: 'normal' }}>{result}</div>}
            </div>
            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
