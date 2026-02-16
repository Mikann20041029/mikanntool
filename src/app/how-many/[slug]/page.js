import { unitCategories, convert } from '@/data/units';
import { getAllHowManyPairs } from '@/data/howmany';

export function generateStaticParams() {
    const all = getAllHowManyPairs();
    return all.slice(0, 500).map(p => ({ slug: p.slug }));
}

export const dynamicParams = true;
export const revalidate = 86400;

export function generateMetadata({ params }) {
    const { slug } = params;
    const [from, , to] = (slug || '').split('-');
    if (!from || !to) return { title: 'How Many | MikannTool' };

    let fromUnit = null, toUnit = null;
    for (const cat of Object.values(unitCategories)) {
        if (cat.units[from]) fromUnit = cat.units[from];
        if (cat.units[to]) toUnit = cat.units[to];
    }
    if (!fromUnit || !toUnit) return { title: 'How Many | MikannTool' };

    const result = (() => {
        for (const [k, cat] of Object.entries(unitCategories)) {
            if (cat.units[from] && cat.units[to]) return convert(k, to, from, 1);
        }
        return null;
    })();

    return {
        title: `How Many ${fromUnit.plural} in a ${toUnit.name}? — Answer & Calculator`,
        description: `There are ${result?.toLocaleString(undefined, { maximumFractionDigits: 6 })} ${fromUnit.plural.toLowerCase()} in one ${toUnit.name.toLowerCase()}. Free calculator with conversion table.`,
    };
}

export { default } from './HowManyClient';
