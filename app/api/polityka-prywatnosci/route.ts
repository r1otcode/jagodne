import data from "../../../mockupData/polityka-prywatnosci.json"
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(data)
}