import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
// This middleware is used to handle authentication with Clerk in the Khelacoin application
// It ensures that all routes except for static files and Next.js internals are protected
// The matcher specifies which routes the middleware should apply to
// It skips Next.js internals and static files, but applies to API routes and any other routes
// This allows for a consistent authentication experience across the application
// The middleware is exported as the default export, and the config specifies the routes to match
// This setup is essential for ensuring that users are authenticated before accessing protected routes
// The matcher uses a regular expression to exclude certain file types and paths
// This is important for performance and to avoid unnecessary authentication checks on static assets
// The middleware is part of the Clerk integration, which provides user management and authentication features