'use server';

import { headers } from "next/headers";
import { auth } from "../auth";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
  let token;

  try {
    const result = await auth.api.getToken({
      headers: await headers(),
    });

    token = result?.token;
  } catch (err) {
    token = undefined;
  }

  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      ...(token && {
        authorization: `Bearer ${token}`,
      }),
    },
  });

  return response.json();
};

export const serverMutation = async (path, options={}) => {
  const { token } = await auth.api.getToken({
    headers: await headers()
  });

  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
      ...options.headers
    },
  });

  return response.json();
}