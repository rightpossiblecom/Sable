import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, mode: "demo" });
}

export async function POST() {
  return NextResponse.json({ ok: true, mode: "demo" });
}

export async function PUT() {
  return NextResponse.json({ ok: true, mode: "demo" });
}
