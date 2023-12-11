import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes: ['/', '/animal/:name*', '/animals', '/classification', '/api/graphql'],
    ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/animal/:name*"],
    debug: true // Optional, for development debugging
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/animal/:name*', '/animals', '/classification', '/api/graphql', '/(api|trpc)(.*)'],
};
