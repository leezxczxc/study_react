import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

const usePromise = <T extends Object>(promiseCreator: () => Promise<AxiosResponse<T>>, deps: Array<any>): [boolean, AxiosResponse<T> | null, Object | null] => {
// function usePromise<T> (promiseCreator: () => Promise<AxiosResponse<T>>, deps: Array<any>): [boolean, AxiosResponse<T> | null, Object | null] {
  // 로딩중 / 완료 / 실패에 대한 상태 관리
  const [loading, setLoading] = useState<boolean>(false);
  const [resolved, setResolved] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState<Object | null>(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process()
  }, deps);

  return [loading, resolved, error];
}

export default usePromise
