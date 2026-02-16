'use client';
import { useState, useRef, useEffect } from 'react';

export default function QrGenerator() {
    const [text, setText] = useState('https://mikanntool.com');
    const [size, setSize] = useState(256);
    const canvasRef = useRef(null);
    const [toast, setToast] = useState(false);

    // Minimal QR Code generator using Canvas API + external lib loaded from CDN
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.QRCode) {
            const s = document.createElement('script');
            s.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.4/build/qrcode.min.js';
            s.async = true;
            document.head.appendChild(s);
        }
    }, []);

    const generate = () => {
        if (!text.trim()) return;
        const canvas = canvasRef.current;
        if (canvas && window.QRCode) {
            window.QRCode.toCanvas(canvas, text, {
                width: size,
                margin: 2,
                color: { dark: '#ffffff', light: '#1a1a2e' },
            });
        }
    };

    const download = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL();
        link.click();
        setToast(true);
        setTimeout(() => setToast(false), 1500);
    };

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb"><a href="/">Home</a> <span>/</span> <span>QR Generator</span></div>
            <h1>QR Code Generator</h1>
            <p className="subtitle">Create QR codes from any text or URL. Download as PNG.</p>
            <div className="ad-slot" id="ad-top"></div>
            <div className="tool-area">
                <div className="field-group"><label>Text or URL</label>
                    <textarea rows={3} placeholder="Enter text or URL..." value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="field-group"><label>Size: {size}px</label>
                    <input type="range" min="128" max="512" step="32" value={size} onChange={(e) => setSize(+e.target.value)} style={{ width: '100%', accentColor: 'var(--accent)' }} />
                </div>
                <div className="btn-row">
                    <button className="btn btn-primary" onClick={generate}>📱 Generate QR</button>
                    <button className="btn btn-secondary" onClick={download}>⬇️ Download PNG</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                    <canvas ref={canvasRef} style={{ borderRadius: '12px' }}></canvas>
                </div>
            </div>
            {toast && <div className="copy-toast">✅ Downloaded!</div>}
            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
