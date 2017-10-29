'use strict';

exports.handler = (event, context, callback) => {
  const queryStringParameters = event.queryStringParameters || event;
  const { min, max, target } = queryStringParameters;
  const MIN = +(min || 0);
  const MAX = +(max || 10);
  const TARGET = +(target || Math.floor((MAX - MIN) / 2) + MIN);

  const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  const isLargerThanTarget = randomNumber > TARGET;
  const isTarget = randomNumber === TARGET;
  const isSmallerThanTarget = randomNumber < TARGET;

  // NOTE: Using Lambda Proxy integration
  callback(null, {
    "statusCode": 200,
    "body": JSON.stringify({
      min: MIN,
      max: MAX,
      target: TARGET,
      randomNumber,
      isLargerThanTarget,
      isTarget,
      isSmallerThanTarget,
    }),
  });
};
