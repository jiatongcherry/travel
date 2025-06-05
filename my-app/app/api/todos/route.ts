import { NextResponse } from "next/server";

type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

export async function GET(request: Request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}


export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }
  await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.API_KEY || '',
    },
  }).catch(error => {
    console.error('Error deleting todo:', error);
    return NextResponse.json({ error: "Failed to delete todo" }, { status: 500 });
  });

  // Simulate deleting a todo
  return NextResponse.json({ message: `Todo with ID ${id} deleted successfully` });
}