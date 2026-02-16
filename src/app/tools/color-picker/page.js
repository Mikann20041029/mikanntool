'use client';
import { useState } from 'react';

export default function ColorPicker() {
    const [hex, setHex] = useState('#6366f1');
    const [toast, setToast] = useState(false);

    const hexToRgb = (h) => {
        const r = parseInt(h.slice(1, 3), 16);
        const g = parseInt(h.slice(3, 5), 16);
        const b = parseInt(h.slice(5, 7), 16);
        return { r, g, b };
    };

    const rgbToHsl = (r, g, b) => {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) { h = s = 0; }
        else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    };

    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const rgbStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const hslStr = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;

    const copy = (v) => { navigator.clipboard.writeText(v); setToast(true); setTimeout(() => setToast(false), 1500); };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>Color Picker</span></div>
            <h1>Color Picker & Converter</h1>
            <p className="subtitle">Pick a color and convert between HEX, RGB, and HSL formats.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div>
                        <label>Pick Color</label>
                        <input type="color" value={hex} onChange={(e) => setHex(e.target.value)}
                            style={{ width: '120px', height: '120px', border: 'none', borderRadius: '12px', cursor: 'pointer', background: 'none', padding: 0 }} />
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{ width: '100%', height: '80px', borderRadius: '12px', background: hex, marginBottom: '16px', border: '1px solid var(--border)' }}></div>
                        {[['HEX', hex.toUpperCase()], ['RGB', rgbStr], ['HSL', hslStr]].map(([label, val]) => (
                            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <span style={{ width: '40px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{label}</span>
                                <div className="result-box" style={{ flex: 1, margin: 0, minHeight: 'auto', padding: '8px 14px' }}>{val}</div>
                                <button className="btn btn-secondary" style={{ padding: '8px 12px' }} onClick={() => copy(val)}>📋</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="field-group" style={{ marginTop: '16px' }}>
                    <label>Or enter HEX code</label>
                    <input type="text" value={hex} onChange={(e) => { const v = e.target.value; if (/^#[0-9A-Fa-f]{0,6}$/.test(v)) setHex(v); }}
                        placeholder="#6366f1" style={{ width: '200px' }} />
                </div>
            </div>
            {toast && <div className="copy-toast">✅ Copied!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
