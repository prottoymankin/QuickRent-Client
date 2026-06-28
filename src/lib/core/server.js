'use server';

import { headers } from "next/headers";
import { auth } from "../auth";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
  const response = await fetch(`${baseUrl}${path}`);
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