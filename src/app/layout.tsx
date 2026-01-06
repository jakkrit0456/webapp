// src/app/layout.tsx (บางส่วน)
import Navbar from "@/components/Navbar"; 
import "./globals.css"; 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ใส่ไว้ข้างบน children */}
        {children}
      </body>
    </html>
  );
}