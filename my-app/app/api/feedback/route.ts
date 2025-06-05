import { NextResponse } from "next/server";

type Feedback = {
    name?: string;
    email?: string;
    message?: string;
}

export async function POST(request: Request) {
    try {
        const feedback: Feedback = await request.json();

        // Here you would typically handle the feedback, e.g., save it to a database
        console.log("Feedback received:", feedback);

        return NextResponse.json({ message: "Feedback received successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error processing feedback:", error);
        return NextResponse.json({ error: "Failed to process feedback" }, { status: 500 });
    }
}