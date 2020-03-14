import { useState, useEffect } from 'react';

export const BASE_URL = 'https://covid19.mathdro.id/api';

/**
 * Fetch the api whit the desired url
 * @param {String} url
 */
export function useApiData(url = '') {
  if (url.startsWith('/')) url = url.slice(1);

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/${url}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setErrors);
  }, [url]);

  return [data, errors, loading];
}

export default useApiData;
