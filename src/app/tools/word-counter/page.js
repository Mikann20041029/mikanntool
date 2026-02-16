'use client';
import { useState } from 'react';

export default function WordCounter() {
    const [text, setText] = useState('');

    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;
    const sentences = text.trim() ? (text.match(/[.!?]+/g) || []).length || (text.trim() ? 1 : 0) : 0;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
    const readingTime = Math.ceil(words / 200);

    return (
        <div className="tool-page">
            <div className="tool-breadcrumb">
                <a href="/">Home</a> <span>/</span> <span>Word Counter</span>
            </div>
            <h1>Word Counter</h1>
            <p className="subtitle">Count words, characters, sentences, paragraphs, and estimate reading time.</p>

            <div className="ad-slot" id="ad-top"></div>

            <div className="tool-area">
                <textarea
                    rows={10}
                    placeholder="Paste or type your text here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    id="word-counter-input"
                />

                <div className="stats-row">
                    <div className="stat">
                        <div className="stat-val">{words.toLocaleString()}</div>
                        <div className="stat-label">Words</div>
                    </div>
                    <div className="stat">
                        <div className="stat-val">{chars.toLocaleString()}</div>
                        <div className="stat-label">Characters</div>
                    </div>
                    <div className="stat">
                        <div className="stat-val">{charsNoSpace.toLocaleString()}</div>
                        <div className="stat-label">No Spaces</div>
                    </div>
                    <div className="stat">
                        <div className="stat-val">{sentences}</div>
                        <div className="stat-label">Sentences</div>
                    </div>
                    <div className="stat">
                        <div className="stat-val">{paragraphs}</div>
                        <div className="stat-label">Paragraphs</div>
                    </div>
                    <div className="stat">
                        <div className="stat-val">{readingTime}</div>
                        <div className="stat-label">Min Read</div>
                    </div>
                </div>

                <div className="btn-row">
                    <button className="btn btn-secondary" onClick={() => setText('')}>Clear</button>
                </div>
            </div>

            <div className="ad-slot" id="ad-bottom"></div>
        </div>
    );
}
