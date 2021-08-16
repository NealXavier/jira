import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);

// 在一个函数里改变传入的对象本身是不好的
export const cleanObject = (obj: any) => {
  const result = Object.assign({}, obj);
  Object.keys(obj).forEach((key) => {
    // value === 0
    const value = obj[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const debounce = (func: any, delay: number) => {
  let timer: any;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, delay);
  };
};
// 自定义hook 如果不需要使用hook就用函数就行
export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
