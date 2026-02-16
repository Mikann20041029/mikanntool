'use client';
import { useState, useEffect } from 'react';

export default function TimestampConverter() {
    const [unix, setUnix] = useState('');
    const [human, setHuman] = useState('');
    const [now, setNow] = useState(0);
    const [toast, setToast] = useState(false);

    useEffect(() => {
        const tick = () => setNow(Math.floor(Date.now() / 1000));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const toHuman = () => {
        const ts = +unix;
        if (isNaN(ts)) return;
        const d = new Date(ts > 1e12 ? ts : ts * 1000);
        setHuman(d.toISOString().replace('T', ' ').replace('Z', ' UTC'));
    };

    const toUnix = () => {
        const d = new Date(human);
        if (isNaN(d.getTime())) return;
        setUnix(Math.floor(d.getTime() / 1000).toString());
    };

    const copy = (v) => { navigator.clipboard.writeText(v); setToast(true); setTimeout(() => setToast(false), 1500); };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Timestamp Converter</span></div>
            <h1>Unix Timestamp Converter</h1>
            <p className="subtitle">Convert between Unix timestamps and human-readable dates.</p>
            <div className="ad-slot" id="ad-top"></div>

            <div className="tool-area">
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Current Unix Timestamp</div>
                    <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', fontFamily: 'monospace', cursor: 'pointer' }}
                        onClick={() => { copy(now.toString()); setUnix(now.toString()); }}>
                        {now}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Click to use</div>
                </div>
            </div>

            <div className="tool-area">
                <h3 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Unix → Human Date</h3>
                <div className="field-group"><label>Unix Timestamp</label>
                    <input type="text" value={unix} onChange={(e) => setUnix(e.target.value)} placeholder="1708000000" style={{ fontFamily: 'monospace' }} />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={toHuman}>🔄 Convert</button>
                    {unix && <button className="btn btn-secondary" onClick={() => copy(unix)}>📋 Copy</button>}
                </div>
            </div>

            <div className="tool-area">
                <h3 style={{ marginBottom: '16px', color: 'var(--accent)' }}>Human Date → Unix</h3>
                <div className="field-group"><label>Date String</label>
                    <input type="text" value={human} onChange={(e) => setHuman(e.target.value)} placeholder="2026-02-15 12:00:00" />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={toUnix}>🔄 Convert</button>
                    {human && <button className="btn btn-secondary" onClick={() => copy(human)}>📋 Copy</button>}
                </div>
            </div>

            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
