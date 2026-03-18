import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // if the user hits the root "/", they will be redirected to "/home"
    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/home', request.url))
    }
}

export const config = {
    matcher: '/'
}