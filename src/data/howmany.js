import { unitCategories } from '@/data/units';

// Generate "how many X in Y" pairs from unit data
export function getAllHowManyPairs() {
    const pairs = [];
    for (const [catKey, cat] of Object.entries(unitCategories)) {
        if (cat.customConvert) continue; // skip temperature
        const unitKeys = Object.keys(cat.units);
        for (const from of unitKeys) {
            for (const to of unitKeys) {
                if (from !== to) {
                    pairs.push({
                        category: catKey,
                        from,
                        to,
                        slug: `${from}-in-${to}`,
                    });
                }
            }
        }
    }
    return pairs;
}
