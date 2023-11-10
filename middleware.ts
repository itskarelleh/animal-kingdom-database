import { NextResponse} from "next/server";
import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
    publicRoutes: ["/", "/api/graphql"],
    afterAuth(auth, req) {
        if (!auth.userId && !auth.isPublicRoute) {
            const signInUrl = new URL("/sign-in", req.url);
            signInUrl.searchParams.set("redirect_url", req.url);
            return NextResponse.redirect(signInUrl);
        }
        return NextResponse.next();
    },
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/api/graphql', '/(api|trpc)(.*)'],
};
