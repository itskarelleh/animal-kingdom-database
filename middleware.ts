import {NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next()

    if (request.nextUrl.pathname.startsWith("/api")) {
        response.headers.append("Access-Control-Allow-Origin", "*"),
            response.headers.append("Access-Control-Allow-Credentials", "true"),
            response.headers.append("Access-Control-Allow-Origin", "*"),
            response.headers.append("Authorization",`Bearer ${process.env.PERMANENT_AUTH_TOKEN}`),
            response.headers.append("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT"),
            response.headers.append("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" )
    }
    return response
}