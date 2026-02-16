// ── Unit conversion data ──
// Each category has units with conversion factors relative to a base unit

export const unitCategories = {
    length: {
        label: 'Length',
        icon: '📏',
        base: 'meter',
        units: {
            millimeter: { name: 'Millimeter', abbr: 'mm', factor: 0.001, plural: 'Millimeters' },
            centimeter: { name: 'Centimeter', abbr: 'cm', factor: 0.01, plural: 'Centimeters' },
            meter: { name: 'Meter', abbr: 'm', factor: 1, plural: 'Meters' },
            kilometer: { name: 'Kilometer', abbr: 'km', factor: 1000, plural: 'Kilometers' },
            inch: { name: 'Inch', abbr: 'in', factor: 0.0254, plural: 'Inches' },
            foot: { name: 'Foot', abbr: 'ft', factor: 0.3048, plural: 'Feet' },
            yard: { name: 'Yard', abbr: 'yd', factor: 0.9144, plural: 'Yards' },
            mile: { name: 'Mile', abbr: 'mi', factor: 1609.344, plural: 'Miles' },
            nautical_mile: { name: 'Nautical Mile', abbr: 'nmi', factor: 1852, plural: 'Nautical Miles' },
            micrometer: { name: 'Micrometer', abbr: 'μm', factor: 0.000001, plural: 'Micrometers' },
            nanometer: { name: 'Nanometer', abbr: 'nm', factor: 0.000000001, plural: 'Nanometers' },
            lightyear: { name: 'Light Year', abbr: 'ly', factor: 9.461e15, plural: 'Light Years' },
            fathom: { name: 'Fathom', abbr: 'ftm', factor: 1.8288, plural: 'Fathoms' },
        },
    },
    weight: {
        label: 'Weight',
        icon: '⚖️',
        base: 'kilogram',
        units: {
            milligram: { name: 'Milligram', abbr: 'mg', factor: 0.000001, plural: 'Milligrams' },
            gram: { name: 'Gram', abbr: 'g', factor: 0.001, plural: 'Grams' },
            kilogram: { name: 'Kilogram', abbr: 'kg', factor: 1, plural: 'Kilograms' },
            metric_ton: { name: 'Metric Ton', abbr: 't', factor: 1000, plural: 'Metric Tons' },
            ounce: { name: 'Ounce', abbr: 'oz', factor: 0.0283495, plural: 'Ounces' },
            pound: { name: 'Pound', abbr: 'lb', factor: 0.453592, plural: 'Pounds' },
            stone: { name: 'Stone', abbr: 'st', factor: 6.35029, plural: 'Stones' },
            short_ton: { name: 'Short Ton (US)', abbr: 'ton', factor: 907.185, plural: 'Short Tons' },
            long_ton: { name: 'Long Ton (UK)', abbr: 'long ton', factor: 1016.05, plural: 'Long Tons' },
            microgram: { name: 'Microgram', abbr: 'μg', factor: 1e-9, plural: 'Micrograms' },
            carat: { name: 'Carat', abbr: 'ct', factor: 0.0002, plural: 'Carats' },
            grain: { name: 'Grain', abbr: 'gr', factor: 0.0000648, plural: 'Grains' },
        },
    },
    temperature: {
        label: 'Temperature',
        icon: '🌡️',
        base: 'celsius',
        units: {
            celsius: { name: 'Celsius', abbr: '°C', plural: 'Celsius' },
            fahrenheit: { name: 'Fahrenheit', abbr: '°F', plural: 'Fahrenheit' },
            kelvin: { name: 'Kelvin', abbr: 'K', plural: 'Kelvin' },
            rankine: { name: 'Rankine', abbr: '°R', plural: 'Rankine' },
        },
        customConvert: true,
    },
    volume: {
        label: 'Volume',
        icon: '🧪',
        base: 'liter',
        units: {
            milliliter: { name: 'Milliliter', abbr: 'mL', factor: 0.001, plural: 'Milliliters' },
            liter: { name: 'Liter', abbr: 'L', factor: 1, plural: 'Liters' },
            cubic_meter: { name: 'Cubic Meter', abbr: 'm³', factor: 1000, plural: 'Cubic Meters' },
            gallon_us: { name: 'US Gallon', abbr: 'gal', factor: 3.78541, plural: 'US Gallons' },
            gallon_uk: { name: 'UK Gallon', abbr: 'imp gal', factor: 4.54609, plural: 'UK Gallons' },
            quart: { name: 'Quart', abbr: 'qt', factor: 0.946353, plural: 'Quarts' },
            pint: { name: 'Pint', abbr: 'pt', factor: 0.473176, plural: 'Pints' },
            cup: { name: 'Cup', abbr: 'cup', factor: 0.236588, plural: 'Cups' },
            fluid_ounce: { name: 'Fluid Ounce', abbr: 'fl oz', factor: 0.0295735, plural: 'Fluid Ounces' },
            tablespoon: { name: 'Tablespoon', abbr: 'tbsp', factor: 0.0147868, plural: 'Tablespoons' },
            teaspoon: { name: 'Teaspoon', abbr: 'tsp', factor: 0.00492892, plural: 'Teaspoons' },
            cubic_inch: { name: 'Cubic Inch', abbr: 'in³', factor: 0.0163871, plural: 'Cubic Inches' },
            cubic_foot: { name: 'Cubic Foot', abbr: 'ft³', factor: 28.3168, plural: 'Cubic Feet' },
        },
    },
    area: {
        label: 'Area',
        icon: '📐',
        base: 'square_meter',
        units: {
            square_millimeter: { name: 'Square Millimeter', abbr: 'mm²', factor: 0.000001, plural: 'Square Millimeters' },
            square_centimeter: { name: 'Square Centimeter', abbr: 'cm²', factor: 0.0001, plural: 'Square Centimeters' },
            square_meter: { name: 'Square Meter', abbr: 'm²', factor: 1, plural: 'Square Meters' },
            square_kilometer: { name: 'Square Kilometer', abbr: 'km²', factor: 1000000, plural: 'Square Kilometers' },
            square_inch: { name: 'Square Inch', abbr: 'in²', factor: 0.00064516, plural: 'Square Inches' },
            square_foot: { name: 'Square Foot', abbr: 'ft²', factor: 0.092903, plural: 'Square Feet' },
            square_yard: { name: 'Square Yard', abbr: 'yd²', factor: 0.836127, plural: 'Square Yards' },
            square_mile: { name: 'Square Mile', abbr: 'mi²', factor: 2589988, plural: 'Square Miles' },
            acre: { name: 'Acre', abbr: 'ac', factor: 4046.86, plural: 'Acres' },
            hectare: { name: 'Hectare', abbr: 'ha', factor: 10000, plural: 'Hectares' },
        },
    },
    speed: {
        label: 'Speed',
        icon: '🏎️',
        base: 'meter_per_second',
        units: {
            meter_per_second: { name: 'Meter per Second', abbr: 'm/s', factor: 1, plural: 'Meters per Second' },
            kilometer_per_hour: { name: 'Kilometer per Hour', abbr: 'km/h', factor: 0.277778, plural: 'Kilometers per Hour' },
            mile_per_hour: { name: 'Mile per Hour', abbr: 'mph', factor: 0.44704, plural: 'Miles per Hour' },
            knot: { name: 'Knot', abbr: 'kn', factor: 0.514444, plural: 'Knots' },
            foot_per_second: { name: 'Foot per Second', abbr: 'ft/s', factor: 0.3048, plural: 'Feet per Second' },
            mach: { name: 'Mach', abbr: 'Ma', factor: 343, plural: 'Mach' },
            speed_of_light: { name: 'Speed of Light', abbr: 'c', factor: 299792458, plural: 'Speed of Light' },
        },
    },
    time: {
        label: 'Time',
        icon: '⏰',
        base: 'second',
        units: {
            nanosecond: { name: 'Nanosecond', abbr: 'ns', factor: 1e-9, plural: 'Nanoseconds' },
            microsecond: { name: 'Microsecond', abbr: 'μs', factor: 0.000001, plural: 'Microseconds' },
            millisecond: { name: 'Millisecond', abbr: 'ms', factor: 0.001, plural: 'Milliseconds' },
            second: { name: 'Second', abbr: 's', factor: 1, plural: 'Seconds' },
            minute: { name: 'Minute', abbr: 'min', factor: 60, plural: 'Minutes' },
            hour: { name: 'Hour', abbr: 'hr', factor: 3600, plural: 'Hours' },
            day: { name: 'Day', abbr: 'd', factor: 86400, plural: 'Days' },
            week: { name: 'Week', abbr: 'wk', factor: 604800, plural: 'Weeks' },
            month: { name: 'Month', abbr: 'mo', factor: 2629800, plural: 'Months' },
            year: { name: 'Year', abbr: 'yr', factor: 31557600, plural: 'Years' },
            decade: { name: 'Decade', abbr: 'dec', factor: 315576000, plural: 'Decades' },
            century: { name: 'Century', abbr: 'cent', factor: 3155760000, plural: 'Centuries' },
        },
    },
    digital: {
        label: 'Digital Storage',
        icon: '💾',
        base: 'byte',
        units: {
            bit: { name: 'Bit', abbr: 'b', factor: 0.125, plural: 'Bits' },
            byte: { name: 'Byte', abbr: 'B', factor: 1, plural: 'Bytes' },
            kilobyte: { name: 'Kilobyte', abbr: 'KB', factor: 1024, plural: 'Kilobytes' },
            megabyte: { name: 'Megabyte', abbr: 'MB', factor: 1048576, plural: 'Megabytes' },
            gigabyte: { name: 'Gigabyte', abbr: 'GB', factor: 1073741824, plural: 'Gigabytes' },
            terabyte: { name: 'Terabyte', abbr: 'TB', factor: 1099511627776, plural: 'Terabytes' },
            petabyte: { name: 'Petabyte', abbr: 'PB', factor: 1125899906842624, plural: 'Petabytes' },
            kibibyte: { name: 'Kibibyte', abbr: 'KiB', factor: 1024, plural: 'Kibibytes' },
            mebibyte: { name: 'Mebibyte', abbr: 'MiB', factor: 1048576, plural: 'Mebibytes' },
            gibibyte: { name: 'Gibibyte', abbr: 'GiB', factor: 1073741824, plural: 'Gibibytes' },
        },
    },
    pressure: {
        label: 'Pressure',
        icon: '🔧',
        base: 'pascal',
        units: {
            pascal: { name: 'Pascal', abbr: 'Pa', factor: 1, plural: 'Pascals' },
            kilopascal: { name: 'Kilopascal', abbr: 'kPa', factor: 1000, plural: 'Kilopascals' },
            bar: { name: 'Bar', abbr: 'bar', factor: 100000, plural: 'Bars' },
            psi: { name: 'PSI', abbr: 'psi', factor: 6894.76, plural: 'PSI' },
            atmosphere: { name: 'Atmosphere', abbr: 'atm', factor: 101325, plural: 'Atmospheres' },
            torr: { name: 'Torr', abbr: 'Torr', factor: 133.322, plural: 'Torr' },
            mmhg: { name: 'mmHg', abbr: 'mmHg', factor: 133.322, plural: 'mmHg' },
        },
    },
    energy: {
        label: 'Energy',
        icon: '⚡',
        base: 'joule',
        units: {
            joule: { name: 'Joule', abbr: 'J', factor: 1, plural: 'Joules' },
            kilojoule: { name: 'Kilojoule', abbr: 'kJ', factor: 1000, plural: 'Kilojoules' },
            calorie: { name: 'Calorie', abbr: 'cal', factor: 4.184, plural: 'Calories' },
            kilocalorie: { name: 'Kilocalorie', abbr: 'kcal', factor: 4184, plural: 'Kilocalories' },
            watt_hour: { name: 'Watt Hour', abbr: 'Wh', factor: 3600, plural: 'Watt Hours' },
            kilowatt_hour: { name: 'Kilowatt Hour', abbr: 'kWh', factor: 3600000, plural: 'Kilowatt Hours' },
            electronvolt: { name: 'Electronvolt', abbr: 'eV', factor: 1.602e-19, plural: 'Electronvolts' },
            btu: { name: 'BTU', abbr: 'BTU', factor: 1055.06, plural: 'BTU' },
            therm: { name: 'Therm', abbr: 'thm', factor: 105506000, plural: 'Therms' },
        },
    },
    frequency: {
        label: 'Frequency',
        icon: '🔊',
        base: 'hertz',
        units: {
            hertz: { name: 'Hertz', abbr: 'Hz', factor: 1, plural: 'Hertz' },
            kilohertz: { name: 'Kilohertz', abbr: 'kHz', factor: 1000, plural: 'Kilohertz' },
            megahertz: { name: 'Megahertz', abbr: 'MHz', factor: 1000000, plural: 'Megahertz' },
            gigahertz: { name: 'Gigahertz', abbr: 'GHz', factor: 1000000000, plural: 'Gigahertz' },
            rpm: { name: 'RPM', abbr: 'rpm', factor: 0.0166667, plural: 'RPM' },
        },
    },
    angle: {
        label: 'Angle',
        icon: '📐',
        base: 'degree',
        units: {
            degree: { name: 'Degree', abbr: '°', factor: 1, plural: 'Degrees' },
            radian: { name: 'Radian', abbr: 'rad', factor: 57.2958, plural: 'Radians' },
            gradian: { name: 'Gradian', abbr: 'gon', factor: 0.9, plural: 'Gradians' },
            arcminute: { name: 'Arc Minute', abbr: "'", factor: 1 / 60, plural: 'Arc Minutes' },
            arcsecond: { name: 'Arc Second', abbr: '"', factor: 1 / 3600, plural: 'Arc Seconds' },
        },
    },
};

// Generate all valid conversion pairs
export function getAllConversionPairs() {
    const pairs = [];
    for (const [catKey, cat] of Object.entries(unitCategories)) {
        const unitKeys = Object.keys(cat.units);
        for (const from of unitKeys) {
            for (const to of unitKeys) {
                if (from !== to) {
                    pairs.push({ category: catKey, from, to });
                }
            }
        }
    }
    return pairs;
}

// Convert value between units
export function convert(category, from, to, value) {
    const cat = unitCategories[category];
    if (!cat) return null;
    if (cat.customConvert && category === 'temperature') {
        return convertTemp(from, to, value);
    }
    const fromUnit = cat.units[from];
    const toUnit = cat.units[to];
    if (!fromUnit || !toUnit) return null;
    // Convert: value * fromFactor / toFactor
    return (value * fromUnit.factor) / toUnit.factor;
}

function convertTemp(from, to, value) {
    // Convert to Celsius first
    let celsius;
    switch (from) {
        case 'celsius': celsius = value; break;
        case 'fahrenheit': celsius = (value - 32) * 5 / 9; break;
        case 'kelvin': celsius = value - 273.15; break;
        case 'rankine': celsius = (value - 491.67) * 5 / 9; break;
        default: return null;
    }
    // Convert from Celsius to target
    switch (to) {
        case 'celsius': return celsius;
        case 'fahrenheit': return celsius * 9 / 5 + 32;
        case 'kelvin': return celsius + 273.15;
        case 'rankine': return (celsius + 273.15) * 9 / 5;
        default: return null;
    }
}

// Count total pairs
export function countTotalPairs() {
    let total = 0;
    for (const cat of Object.values(unitCategories)) {
        const n = Object.keys(cat.units).length;
        total += n * (n - 1);
    }
    return total;
}
