# Simple

Simple `Random Number Generator` function for demonstrate.
- Input
  ```
  {
    "min": 0,
    "max": 2,
    "target": 1
  }
  ```
- Output
  - When generated random number is `0`
    ```
    {
      "min": 0,
      "max": 2,
      "target": 1,
      "randomNumber": 0,
      "isLargerThanTarget": false,
      "isTarget": false,
      "isSmallerThanTarget": true
    }
    ```
  - When generated random number is `1`
    ```
    {
      "min": 0,
      "max": 2,
      "target": 1,
      "randomNumber": 1,
      "isLargerThanTarget": false,
      "isTarget": true,
      "isSmallerThanTarget": false
    }
    ```
  - When generated random number is `2`
    ```
    {
      "min": 0,
      "max": 2,
      "target": 1,
      "randomNumber": 2,
      "isLargerThanTarget": true,
      "isTarget": false,
      "isSmallerThanTarget": false
    }
    ```
