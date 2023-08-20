import { NextResponse } from "next/server";
import connectMongoDB from "@/utils/dbConnection";
import Header from "@/models/header";

export async function POST(request) {
    try {
      const body = await request.json();
      console.log(body);
      await connectMongoDB();
      const headers = await Header.create(body);
      return NextResponse.json(
        { message: "Header Created", headers },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
  