import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "linkup",
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  });
}
