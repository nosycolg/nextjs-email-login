import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('authjs.session-token');
    const pathName = request.nextUrl.pathname;

    if (pathName === '/auth' && token) {
        return NextResponse.redirect(new URL('/app', request.url));
    }

    if (pathName.startsWith('/app') && !token) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/app/:path*',
        '/auth',
    ],
};
