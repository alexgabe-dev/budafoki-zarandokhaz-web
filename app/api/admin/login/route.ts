import { NextRequest, NextResponse } from "next/server"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "secret"

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  if (String(password) !== ADMIN_PASSWORD) {
    return new NextResponse("Unauthorized", { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  const forwardedProto = req.headers.get("x-forwarded-proto")
  const urlProto = (req.nextUrl?.protocol || "").replace(":", "")
  const isHttps = (forwardedProto || urlProto) === "https"
  res.cookies.set("admin", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: isHttps,
    path: "/",
    maxAge: 60 * 60 * 8, // 8 óra
  })
  return res
}
