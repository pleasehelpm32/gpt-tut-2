import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// public routes in our case '/'
const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// - refactor components/MemberProfile.jsx

// jsx
// import { UserButton } from '@clerk/nextjs';
// // auth and currentUser are now imported from /server
// import { auth, currentUser } from '@clerk/nextjs/server';

// - refactor app/(dashboard)/profile/page.js

// js
// import { UserProfile } from '@clerk/nextjs';
// import { auth } from '@clerk/nextjs/server';

// return (
//   <>
//     <UserProfile routing='hash' />
//   </>
// );
