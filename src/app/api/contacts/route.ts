import { NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const newContact = await prisma.contact.create({
            data: {
                name: body.name,    
                email: body.email,
                message: body.message
            },
        });
        
        return NextResponse.json({message: "ส่งข้อมูลสำเร็จ", data: newContact}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({message: "เกิดข้อผิดพลาดในการบันทึกข้อมูล"}, {status: 500});
    }
}
