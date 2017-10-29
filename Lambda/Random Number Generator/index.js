'use strict';

exports.handler = (event, context, callback) => {
  const { min, max, target } = event;
  const MIN = +(min || 0);
  const MAX = +(max || 10);
  const TARGET = +(target || Math.floor((MAX - MIN) / 2) + MIN);

  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  const isLargerThanTarget = randomNumber > TARGET;
  const isTarget = randomNumber === TARGET;
  const isSmallerThanTarget = randomNumber < TARGET;

  callback(null, {
    min: MIN,
    max: MAX,
    target: TARGET,
    randomNumber,
    isLargerThanTarget,
    isTarget,
    isSmallerThanTarget,
  });
};
