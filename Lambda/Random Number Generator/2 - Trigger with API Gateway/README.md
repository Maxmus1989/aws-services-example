# Trigger with API Gateway

Simple `Random Number Generator` function added trigger via `API Gateway` for demonstrate.

NOTE: `Using Lambda Proxy integration`

- Input
  ```
  {
    "queryStringParameters": {
      "min": 0,
      "max": 2,
      "target": 1
    }
  }
  ```
- Output
  - When generated random number is `0`
    ```
    {
      "statusCode": 200,
      "body": "{\"min\":0,\"max\":2,\"target\":1,\"randomNumber\":0,\"isLargerThanTarget\":false,\"isTarget\":false,\"isSmallerThanTarget\":true}"
    }
    ```
  - When generated random number is `1`
    ```
    {
      "statusCode": 200,
      "body": "{\"min\":0,\"max\":2,\"target\":1,\"randomNumber\":1,\"isLargerThanTarget\":false,\"isTarget\":true,\"isSmallerThanTarget\":false}"
    }
    ```
  - When generated random number is `2`
    ```
    {
      "statusCode": 200,
      "body": "{\"min\":0,\"max\":2,\"target\":1,\"randomNumber\":2,\"isLargerThanTarget\":true,\"isTarget\":false,\"isSmallerThanTarget\":false}"
    }
    ```
