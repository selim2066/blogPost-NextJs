import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";
import { roles } from "./constant/roles";
import { userService } from "./service/user.service";

export async function proxy(request: NextRequest) {
  console.log("request url.......", request.url);

  //const { pathname } = new URL(request.url);
  const pathname = request.nextUrl.pathname;

  let isAuthenticated = false; // Replace with actual authentication logic
  let isAdmin = false;

  const { data } = await userService.getSession();

  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === roles.admin;
  }
  // user not authenticated at all

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // user authenticated but not admin then user cannot visit admin dashboard

  if (pathname.startsWith("/admin-dashboard") && !isAdmin) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // user authenticated and user is admin, he only can visit admin dashboard and not user dashboard

  if (pathname.startsWith("/dashboard") && isAdmin) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};
