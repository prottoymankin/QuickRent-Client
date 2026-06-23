'use server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
  return response.json();
}

export const serverMutation = async (path, options={}) => {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...options.headers
    },
  });

  return response.json();
}