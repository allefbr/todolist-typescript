export default async function callApi(method: string, path: string, data?: any) {
  const BASE_URL = 'http://localhost:8080';

  const urlPath = new URL(`${BASE_URL}/${path}`);
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
  });

  const params = {
    method,
    headers,
  };

  if (data !== undefined && method === 'get')
    Object.keys(data).forEach((key: string) => urlPath.searchParams.append(key, data[key]));

  if (method !== 'get') {
    const paramsPost: any = {
      ...params,
      body: JSON.stringify(data),
    };

    const res = await fetch(urlPath.href, paramsPost);
    return res.json();
  }

  const res = await fetch(urlPath.href, params);
  return res.json();
}
