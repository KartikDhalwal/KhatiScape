// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // Must parse JSON manually in App Router

    const { name, email, subject, message } = body;

    const client = await clientPromise;
    const db = client.db("khatiScape");
    const collection = db.collection("enquiries");

    await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error saving contact form:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
