import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Simulating an echo response
  const {searchParams} = new URL(request.url);
  const name = searchParams.get("name") || "No message provided";
  const instrument = searchParams.get("instrument") || "No message provided";
  
  return NextResponse.json({ name, instrument });
}