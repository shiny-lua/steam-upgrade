interface LevelPricing {
    threshold: number;
    price: number;
}

interface LevelStats {
    xp: number;
    sets: number;
    gameCoupons: number;
    emotes: number;
    backgrounds: number;
    showcases: number;
    friendCap: number;
    boosterPackRate: number;
    estimatedCost: number;
}

const LEVEL_PRICING: LevelPricing[] = [
    { threshold: 75, price: 0.34 },
    { threshold: 78, price: 0.36 },
    { threshold: 164, price: 0.39 },
    { threshold: 306, price: 0.45 },
    { threshold: 486, price: 0.54 },
    { threshold: Infinity, price: 0.76 }
];

const getPriceForLevel = (level: number): number => {
    return LEVEL_PRICING.find(({ threshold }) => level < threshold)?.price || 0.45;
};

const calculateLevelXP = (level: number): number => {
    return 100 + (Math.floor(level / 10) * 100);
};

export const getXPForLevel = (desiredLevel: number, currentLevel: number, xp_diff: number): LevelStats => {
    let xp = 0;
    let totalCost = 0;

    // Pre-calculate levels range
    const levelsRange = Array.from(
        { length: desiredLevel - currentLevel },
        (_, i) => currentLevel + i
    );

    // Calculate XP and cost in one pass
    levelsRange.forEach(level => {
        const levelXP = calculateLevelXP(level);
        xp += levelXP;
        totalCost += (levelXP / 100) * getPriceForLevel(level);
    });

    const tenthLevel = Math.floor(desiredLevel / 10);
    xp -= xp_diff;
    return {
        xp,
        sets: Math.floor(xp / 100),
        gameCoupons: Math.floor(xp / 100),
        emotes: Math.floor(xp / 100) * 2,
        backgrounds: Math.floor(xp / 100) * 2,
        showcases: Math.min(tenthLevel, 20),
        friendCap: Math.min(desiredLevel * 5, 1750),
        boosterPackRate: tenthLevel * 20,
        estimatedCost: Number(totalCost.toFixed(2))
    };
};

