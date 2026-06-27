import { NextResponse } from 'next/server'
import { getCurrentUser } from './lib/session'
 
export async function proxy(request) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

export const config = {
  matcher: [
    '/dashboard/admin/:path*',
    "/all-properties/:path*",
  ]
}