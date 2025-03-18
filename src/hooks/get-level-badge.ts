const updateLevelBadge = (level: number) => {
    if (level < 100) {
      if (level < 10) {
        return {
          levelBadge: '2px solid rgb(130, 131, 133)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      } else if (level < 20) {
        return {
          levelBadge: '2px solid rgb(201, 43, 69)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      } else if (level < 30) {
        return {
          levelBadge: '2px solid rgb(228, 96, 70)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      } else if (level < 40) {
        return {
          levelBadge: '2px solid rgb(255, 214, 37)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      } else if (level < 60) {
        return {
          levelBadge: '2px solid rgb(82, 148, 231)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      } else if (level < 70) {
        return {
          levelBadge: '2px solid rgb(123, 87, 210)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      } else if (level < 80) {
        return {
          levelBadge: '2px solid rgb(205, 87, 212)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      } else if (level < 100) {
        return {
          levelBadge: '2px solid rgb(161, 130, 87)',
          levelBadgeOffset: 0,
          levelBadgeBorder: 'none'
        };
      }
    } else if (level < 6200) {
      const baseLevel = Math.floor(level / 100) * 100;
      const remainder = Math.floor((level - baseLevel) / 10); // Get the tens digit
      const yOffset = -(remainder * 32); // Each 10-level badge is 32px tall
      const badgePath = `/image/badges/${baseLevel}.png`;
      return {
        levelBadge: badgePath,
        levelBadgeOffset: yOffset,
        levelBadgeBorder: 'none'
      };
    }
    return {
      levelBadge: 'none',
      levelBadgeOffset: 0,
      levelBadgeBorder: 'none'
    };
  };

export default updateLevelBadge;