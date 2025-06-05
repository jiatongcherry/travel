
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return NextResponse.json({"message": "Hello, World!"});
}