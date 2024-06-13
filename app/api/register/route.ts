import { signUp } from "@/app/lib/firebase/service";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const req = await request.json();
    const res = await signUp(req);
    return NextResponse.json({status: res.status, message: res.message}, {status: res.statusCode});
}

