import { NextRequest, NextResponse } from "next/server";

export async function proxy(request:NextRequest) {

  console.log("request url.......", request.url)
  
  return NextResponse.next();
}

export const config = {
  matcher:["/dashboard"]
}