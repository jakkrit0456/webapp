import {z} from 'zod';

export const UserSchema = z.object({
    email: z.string().email("อีเมลไม่ถูกต้อง"),
    password: z.string().min(8, "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร"),
    age: z.number().min(18, "คุณต้องมีอายุอย่างน้อย 18 ปี"),
});

export type User = z.infer<typeof UserSchema>;