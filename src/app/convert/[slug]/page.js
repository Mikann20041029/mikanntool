import { unitCategories, getAllConversionPairs } from '@/data/units';

export function generateStaticParams() {
    // Pre-generate the top 500 most common conversions at build time
    const all = getAllConversionPairs();
    return all.slice(0, 500).map(p => ({ slug: `${p.from}-to-${p.to}` }));
}

export const dynamicParams = true;
export const revalidate = 86400; // Re-generate every 24h

export function generateMetadata({ params }) {
    const { slug } = params;
    const [from, to] = (slug || '').split('-to-');

    let fromUnit = null, toUnit = null;
    for (const cat of Object.values(unitCategories)) {
        if (cat.units[from]) fromUnit = cat.units[from];
        if (cat.units[to]) toUnit = cat.units[to];
    }

    if (!fromUnit || !toUnit) {
        return { title: 'Unit Converter | MikannTool' };
    }

    return {
        title: `Convert ${fromUnit.plural} to ${toUnit.plural} — Unit Converter`,
        description: `Free online converter: ${fromUnit.plural} (${fromUnit.abbr}) to ${toUnit.plural} (${toUnit.abbr}). Conversion formula, table, and examples. Fast and accurate.`,
    };
}

export { default } from './ConvertClient';
