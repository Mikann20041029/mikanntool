// X vs Y comparison data
// Each category has items with properties for comparison

export const compareCategories = {
    languages: {
        label: 'Programming Languages',
        items: {
            python: { name: 'Python', type: 'General Purpose', year: 1991, paradigm: 'Multi-paradigm', typing: 'Dynamic', speed: 'Slow', learning: 'Easy', popularity: 'Very High', useCase: 'AI/ML, Web, Scripting, Data Science', ecosystem: 'pip/PyPI', companies: 'Google, Netflix, Instagram' },
            javascript: { name: 'JavaScript', type: 'Web/General', year: 1995, paradigm: 'Multi-paradigm', typing: 'Dynamic', speed: 'Medium', learning: 'Easy', popularity: 'Very High', useCase: 'Web, Server, Mobile, Desktop', ecosystem: 'npm', companies: 'Every web company' },
            typescript: { name: 'TypeScript', type: 'Web/General', year: 2012, paradigm: 'Multi-paradigm', typing: 'Static', speed: 'Medium', learning: 'Medium', popularity: 'High', useCase: 'Web, Server, Enterprise', ecosystem: 'npm', companies: 'Microsoft, Google, Airbnb' },
            java: { name: 'Java', type: 'General Purpose', year: 1995, paradigm: 'OOP', typing: 'Static', speed: 'Fast', learning: 'Medium', popularity: 'Very High', useCase: 'Enterprise, Android, Backend', ecosystem: 'Maven/Gradle', companies: 'Google, Amazon, LinkedIn' },
            csharp: { name: 'C#', type: 'General Purpose', year: 2000, paradigm: 'OOP', typing: 'Static', speed: 'Fast', learning: 'Medium', popularity: 'High', useCase: 'Games, Enterprise, Desktop', ecosystem: 'NuGet', companies: 'Microsoft, Unity, Stack Overflow' },
            cpp: { name: 'C++', type: 'Systems', year: 1985, paradigm: 'Multi-paradigm', typing: 'Static', speed: 'Very Fast', learning: 'Hard', popularity: 'High', useCase: 'Games, Systems, Embedded', ecosystem: 'vcpkg/Conan', companies: 'Apple, Google, Microsoft' },
            c: { name: 'C', type: 'Systems', year: 1972, paradigm: 'Procedural', typing: 'Static', speed: 'Very Fast', learning: 'Hard', popularity: 'High', useCase: 'OS, Embedded, Systems', ecosystem: 'Manual', companies: 'Linux, Apple, Intel' },
            rust: { name: 'Rust', type: 'Systems', year: 2015, paradigm: 'Multi-paradigm', typing: 'Static', speed: 'Very Fast', learning: 'Hard', popularity: 'Growing', useCase: 'Systems, WebAssembly, CLI', ecosystem: 'Cargo', companies: 'Mozilla, Cloudflare, Discord' },
            go: { name: 'Go', type: 'Systems/Backend', year: 2009, paradigm: 'Procedural', typing: 'Static', speed: 'Fast', learning: 'Easy', popularity: 'High', useCase: 'Backend, Cloud, DevOps', ecosystem: 'Go Modules', companies: 'Google, Uber, Twitch' },
            swift: { name: 'Swift', type: 'Mobile/Desktop', year: 2014, paradigm: 'Multi-paradigm', typing: 'Static', speed: 'Fast', learning: 'Medium', popularity: 'High', useCase: 'iOS, macOS, Server', ecosystem: 'SPM', companies: 'Apple, Lyft, Airbnb' },
            kotlin: { name: 'Kotlin', type: 'Mobile/Backend', year: 2011, paradigm: 'Multi-paradigm', typing: 'Static', speed: 'Fast', learning: 'Medium', popularity: 'High', useCase: 'Android, Backend, Multiplatform', ecosystem: 'Gradle', companies: 'JetBrains, Google, Pinterest' },
            ruby: { name: 'Ruby', type: 'Web/Scripting', year: 1995, paradigm: 'OOP', typing: 'Dynamic', speed: 'Slow', learning: 'Easy', popularity: 'Medium', useCase: 'Web, Scripting, DevOps', ecosystem: 'RubyGems', companies: 'Shopify, GitHub, Basecamp' },
            php: { name: 'PHP', type: 'Web', year: 1995, paradigm: 'Multi-paradigm', typing: 'Dynamic', speed: 'Medium', learning: 'Easy', popularity: 'High', useCase: 'Web, CMS, E-commerce', ecosystem: 'Composer', companies: 'Facebook, WordPress, Wikipedia' },
            scala: { name: 'Scala', type: 'General Purpose', year: 2004, paradigm: 'Functional/OOP', typing: 'Static', speed: 'Fast', learning: 'Hard', popularity: 'Medium', useCase: 'Big Data, Backend, Distributed', ecosystem: 'sbt', companies: 'Twitter, LinkedIn, Netflix' },
            r: { name: 'R', type: 'Data Science', year: 1993, paradigm: 'Functional', typing: 'Dynamic', speed: 'Slow', learning: 'Medium', popularity: 'Medium', useCase: 'Statistics, Data Analysis, Research', ecosystem: 'CRAN', companies: 'Google, Facebook, Pfizer' },
            dart: { name: 'Dart', type: 'Mobile/Web', year: 2011, paradigm: 'OOP', typing: 'Static', speed: 'Fast', learning: 'Easy', popularity: 'Growing', useCase: 'Mobile (Flutter), Web', ecosystem: 'pub.dev', companies: 'Google, Alibaba, BMW' },
            lua: { name: 'Lua', type: 'Scripting/Embedded', year: 1993, paradigm: 'Multi-paradigm', typing: 'Dynamic', speed: 'Fast', learning: 'Easy', popularity: 'Medium', useCase: 'Games, Embedded, Scripting', ecosystem: 'LuaRocks', companies: 'Roblox, Adobe, Cisco' },
            elixir: { name: 'Elixir', type: 'Backend', year: 2011, paradigm: 'Functional', typing: 'Dynamic', speed: 'Medium', learning: 'Medium', popularity: 'Growing', useCase: 'Web, Real-time, Distributed', ecosystem: 'Hex', companies: 'Discord, Pinterest, PepsiCo' },
            haskell: { name: 'Haskell', type: 'General Purpose', year: 1990, paradigm: 'Functional', typing: 'Static', speed: 'Fast', learning: 'Very Hard', popularity: 'Low', useCase: 'Research, Finance, Compilers', ecosystem: 'Hackage', companies: 'Facebook, GitHub, Standard Chartered' },
            perl: { name: 'Perl', type: 'Scripting', year: 1987, paradigm: 'Multi-paradigm', typing: 'Dynamic', speed: 'Medium', learning: 'Hard', popularity: 'Low', useCase: 'Text Processing, Sysadmin, Web', ecosystem: 'CPAN', companies: 'Amazon, BBC, Booking.com' },
            matlab: { name: 'MATLAB', type: 'Engineering', year: 1984, paradigm: 'Multi-paradigm', typing: 'Dynamic', speed: 'Medium', learning: 'Medium', popularity: 'Medium', useCase: 'Engineering, Math, Signal Processing', ecosystem: 'File Exchange', companies: 'NASA, Boeing, Toyota' },
            julia: { name: 'Julia', type: 'Scientific', year: 2012, paradigm: 'Multi-paradigm', typing: 'Dynamic', speed: 'Very Fast', learning: 'Medium', popularity: 'Growing', useCase: 'Scientific Computing, ML, Math', ecosystem: 'Pkg', companies: 'NASA, CERN, BlackRock' },
            objective_c: { name: 'Objective-C', type: 'Mobile', year: 1984, paradigm: 'OOP', typing: 'Static', speed: 'Fast', learning: 'Hard', popularity: 'Declining', useCase: 'iOS/macOS Legacy', ecosystem: 'CocoaPods', companies: 'Apple' },
            sql: { name: 'SQL', type: 'Database', year: 1974, paradigm: 'Declarative', typing: 'Static', speed: 'N/A', learning: 'Easy', popularity: 'Very High', useCase: 'Database Queries, Analytics', ecosystem: 'N/A', companies: 'Every company' },
            shell: { name: 'Shell/Bash', type: 'Scripting', year: 1989, paradigm: 'Imperative', typing: 'None', speed: 'Slow', learning: 'Medium', popularity: 'High', useCase: 'Automation, DevOps, Sysadmin', ecosystem: 'N/A', companies: 'Every Linux company' },
        },
    },
    frameworks: {
        label: 'Frameworks',
        items: {
            react: { name: 'React', type: 'Frontend', language: 'JavaScript', year: 2013, learning: 'Medium', popularity: 'Very High', useCase: 'SPA, Mobile (RN)', maintainer: 'Meta' },
            vue: { name: 'Vue.js', type: 'Frontend', language: 'JavaScript', year: 2014, learning: 'Easy', popularity: 'High', useCase: 'SPA, SSR', maintainer: 'Community' },
            angular: { name: 'Angular', type: 'Frontend', language: 'TypeScript', year: 2016, learning: 'Hard', popularity: 'High', useCase: 'Enterprise SPA', maintainer: 'Google' },
            svelte: { name: 'Svelte', type: 'Frontend', language: 'JavaScript', year: 2016, learning: 'Easy', popularity: 'Growing', useCase: 'SPA, Performance', maintainer: 'Community' },
            nextjs: { name: 'Next.js', type: 'Full-Stack', language: 'JavaScript', year: 2016, learning: 'Medium', popularity: 'Very High', useCase: 'SSR, SSG, Full-Stack', maintainer: 'Vercel' },
            nuxt: { name: 'Nuxt.js', type: 'Full-Stack', language: 'JavaScript', year: 2016, learning: 'Medium', popularity: 'High', useCase: 'SSR, SSG', maintainer: 'Community' },
            express: { name: 'Express.js', type: 'Backend', language: 'JavaScript', year: 2010, learning: 'Easy', popularity: 'Very High', useCase: 'REST API, Web Server', maintainer: 'Community' },
            django: { name: 'Django', type: 'Backend', language: 'Python', year: 2005, learning: 'Medium', popularity: 'High', useCase: 'Web Apps, API', maintainer: 'Django Foundation' },
            flask: { name: 'Flask', type: 'Backend', language: 'Python', year: 2010, learning: 'Easy', popularity: 'High', useCase: 'Microservices, API', maintainer: 'Pallets' },
            fastapi: { name: 'FastAPI', type: 'Backend', language: 'Python', year: 2018, learning: 'Easy', popularity: 'Growing', useCase: 'API, ML Services', maintainer: 'Community' },
            rails: { name: 'Ruby on Rails', type: 'Backend', language: 'Ruby', year: 2004, learning: 'Medium', popularity: 'Medium', useCase: 'Web Apps, MVP', maintainer: 'Community' },
            spring: { name: 'Spring Boot', type: 'Backend', language: 'Java', year: 2014, learning: 'Hard', popularity: 'Very High', useCase: 'Enterprise, Microservices', maintainer: 'VMware' },
            laravel: { name: 'Laravel', type: 'Backend', language: 'PHP', year: 2011, learning: 'Medium', popularity: 'High', useCase: 'Web Apps, API', maintainer: 'Community' },
            dotnet: { name: '.NET/ASP.NET', type: 'Full-Stack', language: 'C#', year: 2002, learning: 'Medium', popularity: 'High', useCase: 'Enterprise, Cloud', maintainer: 'Microsoft' },
            flutter: { name: 'Flutter', type: 'Mobile', language: 'Dart', year: 2017, learning: 'Medium', popularity: 'High', useCase: 'Cross-platform Mobile', maintainer: 'Google' },
            react_native: { name: 'React Native', type: 'Mobile', language: 'JavaScript', year: 2015, learning: 'Medium', popularity: 'High', useCase: 'Cross-platform Mobile', maintainer: 'Meta' },
            tailwind: { name: 'Tailwind CSS', type: 'CSS', language: 'CSS', year: 2017, learning: 'Easy', popularity: 'Very High', useCase: 'Styling, UI', maintainer: 'Tailwind Labs' },
            bootstrap: { name: 'Bootstrap', type: 'CSS', language: 'CSS', year: 2011, learning: 'Easy', popularity: 'High', useCase: 'Responsive UI', maintainer: 'Community' },
        },
    },
    databases: {
        label: 'Databases',
        items: {
            mysql: { name: 'MySQL', type: 'Relational', year: 1995, model: 'SQL', scaling: 'Vertical', learning: 'Easy', popularity: 'Very High', useCase: 'Web Apps, OLTP', license: 'GPL', companies: 'Facebook, Twitter, YouTube' },
            postgresql: { name: 'PostgreSQL', type: 'Relational', year: 1996, model: 'SQL', scaling: 'Vertical', learning: 'Medium', popularity: 'Very High', useCase: 'Complex Queries, GIS, Analytics', license: 'PostgreSQL', companies: 'Apple, Reddit, Instagram' },
            mongodb: { name: 'MongoDB', type: 'Document', year: 2009, model: 'NoSQL', scaling: 'Horizontal', learning: 'Easy', popularity: 'High', useCase: 'Flexible Schema, Real-time', license: 'SSPL', companies: 'eBay, Adobe, SAP' },
            redis: { name: 'Redis', type: 'Key-Value', year: 2009, model: 'NoSQL', scaling: 'Horizontal', learning: 'Easy', popularity: 'Very High', useCase: 'Caching, Sessions, Pub/Sub', license: 'BSD', companies: 'Twitter, GitHub, Stack Overflow' },
            sqlite: { name: 'SQLite', type: 'Embedded', year: 2000, model: 'SQL', scaling: 'Single-file', learning: 'Very Easy', popularity: 'Very High', useCase: 'Mobile, Desktop, Embedded', license: 'Public Domain', companies: 'Every mobile app' },
            elasticsearch: { name: 'Elasticsearch', type: 'Search Engine', year: 2010, model: 'NoSQL', scaling: 'Horizontal', learning: 'Medium', popularity: 'High', useCase: 'Full-text Search, Logging', license: 'Elastic', companies: 'Netflix, Uber, Slack' },
            cassandra: { name: 'Cassandra', type: 'Wide Column', year: 2008, model: 'NoSQL', scaling: 'Horizontal', learning: 'Hard', popularity: 'Medium', useCase: 'Time Series, IoT', license: 'Apache', companies: 'Netflix, Discord, Apple' },
            dynamodb: { name: 'DynamoDB', type: 'Key-Value', year: 2012, model: 'NoSQL', scaling: 'Horizontal', learning: 'Medium', popularity: 'High', useCase: 'Serverless, High Throughput', license: 'AWS', companies: 'Amazon, Lyft, Samsung' },
            firebase: { name: 'Firebase/Firestore', type: 'Document', year: 2012, model: 'NoSQL', scaling: 'Horizontal', learning: 'Easy', popularity: 'High', useCase: 'Real-time, Mobile', license: 'Google', companies: 'Google, Alibaba' },
            mariadb: { name: 'MariaDB', type: 'Relational', year: 2009, model: 'SQL', scaling: 'Vertical', learning: 'Easy', popularity: 'Medium', useCase: 'MySQL Alternative, Web Apps', license: 'GPL', companies: 'Google, Wikipedia, Samsung' },
            neo4j: { name: 'Neo4j', type: 'Graph', year: 2007, model: 'NoSQL', scaling: 'Horizontal', learning: 'Medium', popularity: 'Medium', useCase: 'Social Networks, Knowledge Graphs', license: 'GPL', companies: 'eBay, NASA, Walmart' },
            supabase: { name: 'Supabase', type: 'BaaS', year: 2020, model: 'SQL', scaling: 'Horizontal', learning: 'Easy', popularity: 'Growing', useCase: 'Firebase Alternative, Auth', license: 'Apache', companies: 'Startups, Indie devs' },
        },
    },
};

export function getAllComparePairs() {
    const pairs = [];
    for (const [catKey, cat] of Object.entries(compareCategories)) {
        const keys = Object.keys(cat.items);
        for (let i = 0; i < keys.length; i++) {
            for (let j = i + 1; j < keys.length; j++) {
                pairs.push({ category: catKey, a: keys[i], b: keys[j] });
            }
        }
    }
    return pairs;
}

export function countComparePairs() {
    let total = 0;
    for (const cat of Object.values(compareCategories)) {
        const n = Object.keys(cat.items).length;
        total += n * (n - 1) / 2;
    }
    return total;
}
