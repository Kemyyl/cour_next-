import { useState, useCallback } from 'react';

export function useCalculatrice() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const calculate = useCallback((operation: '+' | '-' | '*' | '/') => {
    let res = 0;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 0;
        break;
    }
    setResult(res);
    return res;
  }, [num1, num2]);

  const add = useCallback(() => calculate('+'), [calculate]);
  const subtract = useCallback(() => calculate('-'), [calculate]);
  const multiply = useCallback(() => calculate('*'), [calculate]);
  const divide = useCallback(() => calculate('/'), [calculate]);

  const reset = useCallback(() => {
    setNum1(0);
    setNum2(0);
    setResult(0);
  }, []);

  return {
    num1,
    setNum1,
    num2,
    setNum2,
    result,
    add,
    subtract,
    multiply,
    divide,
    reset,
  };
}
