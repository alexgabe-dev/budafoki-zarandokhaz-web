import { NextRequest, NextResponse } from "next/server"

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "secret"

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  if (String(password) !== ADMIN_PASSWORD) {
    return new NextResponse("Unauthorized", { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set("admin", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 óra
  })
  return res
}
