// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-white shadow-sm flex justify-between items-center">
      <div className="font-bold text-xl">MyProject</div>
      <ul className="flex gap-6 text-gray-600">
        <li className="hover:text-blue-500 cursor-pointer">หน้าแรก</li>
        <li className="hover:text-blue-500 cursor-pointer">เกี่ยวกับเรา</li>
        <li className="hover:text-blue-500 cursor-pointer text-red-500">ออกจากระบบ</li>
      </ul>
    </nav>
  );
}