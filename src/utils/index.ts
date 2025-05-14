import _ from 'lodash';

export function generatePrizeArray(prizes: CasePrize[]): CasePrize[] {
  const totalArrayCount = 100;
  const highestWeightPrizeArrayCount = _.random(40, 50);

  const highestWeightPrize = _.maxBy(prizes, 'weight') as CasePrize;
  const highestWeightPrizeArray = _.times(
    highestWeightPrizeArrayCount,
    _.constant(highestWeightPrize),
  );

  const remainingPrizes = _.difference(prizes, [highestWeightPrize]);
  const remainingPrizesArray = _.times(
    totalArrayCount - highestWeightPrizeArrayCount,
    () => _.sample(remainingPrizes),
  ) as CasePrize[];

  return _.shuffle([...highestWeightPrizeArray, ...remainingPrizesArray]);
}
