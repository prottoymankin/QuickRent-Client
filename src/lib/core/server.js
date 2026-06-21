'use server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
  return response.json();
}

export const serverMutation = async (path, data) => {
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
}