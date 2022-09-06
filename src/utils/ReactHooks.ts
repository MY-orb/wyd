import { useState, useMemo } from 'react';
import { AsyncLock, AsyncLockMode } from './JavaScriptUtils';

export function useAsyncLock(mode: AsyncLockMode) {
  const [asyncLock] = useState(() => new AsyncLock(mode));
  return asyncLock;
}

export function useAsyncLockCallback<R extends unknown[], T>(
  mode: AsyncLockMode,
  callback: (...args: R) => T,
) {
  const asyncLock = useAsyncLock(mode);
  const callback_ = useMemo(
    () => asyncLock.wrap(callback),
    [asyncLock, callback],
  );
  return callback_;
}
