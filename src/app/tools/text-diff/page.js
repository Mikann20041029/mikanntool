'use client';
import { useState } from 'react';

export default function TextDiff() {
    const [textA, setTextA] = useState('');
    const [textB, setTextB] = useState('');
    const [diff, setDiff] = useState(null);

    const compare = () => {
        const linesA = textA.split('\n');
        const linesB = textB.split('\n');
        const maxLen = Math.max(linesA.length, linesB.length);
        const result = [];
        let added = 0, removed = 0, unchanged = 0;

        for (let i = 0; i < maxLen; i++) {
            const a = linesA[i] ?? '';
            const b = linesB[i] ?? '';
            if (a === b) { result.push({ type: 'same', line: a, num: i + 1 }); unchanged++; }
            else {
                if (i < linesA.length) { result.push({ type: 'removed', line: a, num: i + 1 }); removed++; }
                if (i < linesB.length) { result.push({ type: 'added', line: b, num: i + 1 }); added++; }
            }
        }
        setDiff({ lines: result, added, removed, unchanged });
    };

    const colors = { added: '#22c55e22', removed: '#ef444422', same: 'transparent' };
    const prefixes = { added: '+', removed: '-', same: ' ' };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Text Diff</span></div>
            <h1>Text Diff Checker</h1>
            <p className="subtitle">Compare two texts side-by-side and highlight differences.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="field-group"><label>Original Text</label>
                        <textarea rows={8} placeholder="Paste original text..." value={textA} onChange={(e) => setTextA(e.target.value)} />
                    </div>
                    <div className="field-group"><label>Modified Text</label>
                        <textarea rows={8} placeholder="Paste modified text..." value={textB} onChange={(e) => setTextB(e.target.value)} />
                    </div>
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={compare}>📊 Compare</button>
                    <button className="btn btn-secondary" onClick={() => { setTextA(''); setTextB(''); setDiff(null); }}>Clear</button>
                </div>
                {diff && (<>
                    <div className="stats-row">
                        <div className="stat"><div className="stat-val" style={{ color: '#22c55e' }}>+{diff.added}</div><div className="stat-label">Added</div></div>
                        <div className="stat"><div className="stat-val" style={{ color: '#ef4444' }}>-{diff.removed}</div><div className="stat-label">Removed</div></div>
                        <div className="stat"><div className="stat-val">{diff.unchanged}</div><div className="stat-label">Unchanged</div></div>
                    </div>
                    <div className="result-box" style={{ marginTop: '16px' }}>
                        {diff.lines.map((l, i) => (
                            <div key={i} style={{ background: colors[l.type], padding: '2px 8px', margin: '1px 0', borderRadius: '4px', color: l.type === 'added' ? '#22c55e' : l.type === 'removed' ? '#ef4444' : 'inherit' }}>
                                {prefixes[l.type]} {l.line || ' '}
                            </div>
                        ))}
                    </div>
                </>)}
            </div>
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
