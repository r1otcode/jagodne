import data from "../../../mockupData/teamMembers.json"
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(data)
} 