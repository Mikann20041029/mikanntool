import { compareCategories, getAllComparePairs } from '@/data/comparisons';

export function generateStaticParams() {
    const all = getAllComparePairs();
    return all.slice(0, 300).map(p => ({ slug: `${p.a}-vs-${p.b}` }));
}

export const dynamicParams = true;
export const revalidate = 86400;

export function generateMetadata({ params }) {
    const { slug } = params;
    const parts = (slug || '').split('-vs-');
    if (parts.length < 2) return { title: 'Comparison | MikannTool' };
    const [aKey, bKey] = parts;

    let aItem = null, bItem = null;
    for (const cat of Object.values(compareCategories)) {
        if (cat.items[aKey]) aItem = cat.items[aKey];
        if (cat.items[bKey]) bItem = cat.items[bKey];
    }

    if (!aItem || !bItem) return { title: 'Comparison | MikannTool' };

    return {
        title: `${aItem.name} vs ${bItem.name} — Detailed Comparison`,
        description: `${aItem.name} vs ${bItem.name}: comprehensive comparison of features, performance, popularity, and use cases. Which one should you choose?`,
    };
}

export { default } from './CompareClient';
