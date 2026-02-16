'use client';
import { useState } from 'react';

export default function PercentageCalc() {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [pctOf, setPctOf] = useState('');
    const [pctOfTotal, setPctOfTotal] = useState('');
    const [incFrom, setIncFrom] = useState('');
    const [incTo, setIncTo] = useState('');

    const r1 = v1 && v2 ? ((+v1 / 100) * +v2).toFixed(4) : '';
    const r2 = pctOf && pctOfTotal ? ((+pctOf / +pctOfTotal) * 100).toFixed(2) + '%' : '';
    const r3 = incFrom && incTo ? (((+incTo - +incFrom) / +incFrom) * 100).toFixed(2) + '%' : '';

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Percentage Calculator</span></div>
            <h1>Percentage Calculator</h1>
            <p className="subtitle">Calculate percentages, percentage of a number, and percentage change.</p>
            <div className="ad-slot" id="ad-top"></div>

            <div className="tool-area">
                <h3 style={{ marginBottom: '16px', color: 'var(--accent)' }}>What is X% of Y?</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span>What is</span>
                    <input type="number" value={v1} onChange={(e) => setV1(e.target.value)} placeholder="25" style={{ width: '100px' }} />
                    <span>% of</span>
                    <input type="number" value={v2} onChange={(e) => setV2(e.target.value)} placeholder="200" style={{ width: '100px' }} />
                    <span>= <strong style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>{r1}</strong></span>
                </div>
            </div>

            <div className="tool-area">
                <h3 style={{ marginBottom: '16px', color: 'var(--accent)' }}>X is what % of Y?</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <input type="number" value={pctOf} onChange={(e) => setPctOf(e.target.value)} placeholder="50" style={{ width: '100px' }} />
                    <span>is what % of</span>
                    <input type="number" value={pctOfTotal} onChange={(e) => setPctOfTotal(e.target.value)} placeholder="200" style={{ width: '100px' }} />
                    <span>= <strong style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>{r2}</strong></span>
                </div>
            </div>

            <div className="tool-area">
                <h3 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Percentage Change</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span>From</span>
                    <input type="number" value={incFrom} onChange={(e) => setIncFrom(e.target.value)} placeholder="100" style={{ width: '100px' }} />
                    <span>to</span>
                    <input type="number" value={incTo} onChange={(e) => setIncTo(e.target.value)} placeholder="150" style={{ width: '100px' }} />
                    <span>= <strong style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>{r3}</strong></span>
                </div>
            </div>

            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
