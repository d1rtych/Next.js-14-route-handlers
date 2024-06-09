import { log } from "console";
import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme");
  
  log(requestHeaders.get("Authorization"));
  log(headerList.get("Authorization"));
  log(theme);
  log(cookies().get("resultPerPage"));

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  });
}
