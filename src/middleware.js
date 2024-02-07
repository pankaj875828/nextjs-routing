import { NextResponse } from 'next/server'
import React from 'react'

export default function middleware(request) {

    // if (request.nextUrl.pathname != '/login') { // condition redirect login page 
    return NextResponse.redirect(new URL('/login', request.url))
    // }

}

export const config = {
    matcher: ['/about/:path*', '/studentlist/:path*']
}
